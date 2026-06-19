import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const { PNG } = require('C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pngjs');

const root = process.cwd();
const outputDir = path.join(root, 'qa');
const targetUrl = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5174';

function analyzePng(buffer) {
  const png = PNG.sync.read(buffer);
  let nonDarkPixels = 0;
  let accentPixels = 0;
  let checkedPixels = 0;

  for (let y = 0; y < Math.min(png.height, 720); y += 4) {
    for (let x = 0; x < png.width; x += 4) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      const brightness = (r + g + b) / 3;
      checkedPixels += 1;
      if (brightness > 18) nonDarkPixels += 1;
      if ((g > 145 && b > 145) || (r > 170 && b > 120)) accentPixels += 1;
    }
  }

  return {
    checkedPixels,
    nonDarkRatio: Number((nonDarkPixels / checkedPixels).toFixed(3)),
    accentRatio: Number((accentPixels / checkedPixels).toFixed(3))
  };
}

async function captureState(page, name, viewport) {
  await page.mouse.move(viewport.width * 0.7, viewport.height * 0.36);
  await page.mouse.down();
  await page.waitForTimeout(180);
  await page.mouse.up();
  await page.mouse.move(viewport.width * 0.28, viewport.height * 0.58);
  await page.waitForTimeout(1200);

  const screenshotPath = path.join(outputDir, `${name}.png`);
  const buffer = await page.screenshot({ path: screenshotPath, fullPage: true });
  const metrics = analyzePng(buffer);
  const facts = await page.evaluate(() => ({
    title: document.title,
    canvasCount: document.querySelectorAll('canvas').length,
    navLinks: Array.from(document.querySelectorAll('nav a')).map((link) => link.textContent.trim()).filter(Boolean),
    heroHeading: document.querySelector('h1')?.textContent,
    isDark: document.documentElement.classList.contains('dark'),
    hasContactForm: Boolean(document.querySelector('form input[type="email"]') && document.querySelector('textarea'))
  }));

  return { name, viewport, screenshotPath, metrics, facts };
}

async function runViewport(browser, name, viewport) {
  const page = await browser.newPage({ viewport });
  const issues = [];
  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) issues.push(`${message.type()}: ${message.text()}`);
  });
  page.on('pageerror', (error) => issues.push(`pageerror: ${error.message}`));
  await page.goto(targetUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.localStorage.setItem('agil-theme', 'dark'));
  await page.reload({ waitUntil: 'networkidle' });
  try {
  await page.waitForSelector('canvas', { state: 'visible', timeout: 15000 });
  } catch {
    issues.push('canvas selector timeout');
  }

  const darkState = await captureState(page, `${name}-dark`, viewport);
  const themeButton = page.getByRole('button', { name: 'Toggle theme' });
  if ((await themeButton.count()) === 1) {
    await themeButton.click();
  } else {
    issues.push('theme toggle not uniquely found');
  }
  const lightState = await captureState(page, `${name}-light`, viewport);

  await page.close();
  return [{ ...darkState, issues }, { ...lightState, issues }];
}

await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
});

try {
  const results = [];
  results.push(...(await runViewport(browser, 'desktop', { width: 1440, height: 960 })));
  results.push(...(await runViewport(browser, 'mobile', { width: 390, height: 844 })));

  for (const result of results) {
    if (result.facts.canvasCount < 1) {
      throw new Error(`${result.name}: canvas 3D tidak ditemukan\n${result.issues.join('\n')}`);
    }
    if (result.facts.heroHeading !== 'Agil Sujito') throw new Error(`${result.name}: hero heading tidak sesuai`);
    if (!result.facts.hasContactForm) throw new Error(`${result.name}: form contact tidak lengkap`);
    if (result.metrics.nonDarkRatio < 0.08) throw new Error(`${result.name}: screenshot terlihat terlalu kosong`);
    if (result.metrics.accentRatio < 0.01) throw new Error(`${result.name}: aksen visual/canvas kurang terdeteksi`);
  }

  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
