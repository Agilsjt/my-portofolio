import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navItems } from '../data/portfolio.js';

export default function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-line dark:bg-ink/80 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full" onClick={handleNavigate}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-glow dark:bg-white dark:text-ink">
            AS
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 sm:block dark:text-zinc-300">
            Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm shadow-slate-200/60 backdrop-blur-xl md:flex dark:border-line dark:bg-white/[0.055] dark:shadow-none">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-zinc-300 dark:hover:bg-white dark:hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/75 text-slate-800 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:border-cyan-400 dark:border-line dark:bg-white/[0.055] dark:text-white dark:shadow-none"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/75 text-slate-800 md:hidden dark:border-line dark:bg-white/[0.055] dark:text-white"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="section-shell pb-5 md:hidden">
          <div className="glass-panel grid gap-1 rounded-2xl p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-950 hover:text-white dark:text-zinc-200 dark:hover:bg-white dark:hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
