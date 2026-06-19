import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { floatingIcons, stats } from '../data/portfolio.js';

export default function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.35 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ['20%', '80%']);
  const cursorGlow = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(117,240,183,0.22), transparent 28%)`
  );

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      className="hero-interactive relative isolate flex min-h-screen items-center overflow-hidden pt-24"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: cursorGlow }}
      />

      <div className="section-shell pointer-events-none relative z-10 grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pointer-events-auto max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-sky-200/80 bg-white/60 px-4 py-2 text-sm font-medium text-sky-600 shadow-sm shadow-sky-100/70 backdrop-blur-xl dark:border-cyanGlow/35 dark:bg-cyanGlow/10 dark:text-cyanGlow dark:shadow-[0_0_26px_rgba(61,231,255,0.16)]">
            Tech Enthusiast
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Agil Sujito
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-slate-700 sm:text-2xl dark:text-zinc-200">
            Information Systems Student | Tech Enthusiast
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-300">
            Mahasiswa Sistem Informasi Universitas Tanjungpura yang memiliki minat pada IT Governance, pengelolaan data, dan pengembangan sistem informasi. Berpengalaman dalam analisis risiko TI, keamanan informasi, pengelolaan kualitas data, serta pengembangan aplikasi web, dengan fokus menghubungkan kebutuhan bisnis dan teknologi.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyanGlow px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-mintGlow"
            >
              View Projects
              <ArrowDown size={17} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-bold text-slate-900 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/35 dark:hover:bg-white/15"
            >
              Contact Me
              <Mail size={17} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {[
              { label: 'GitHub', icon: Github, href: 'https://github.com/Agilsjt', external: true },
              { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/agil16/', external: true },
              { label: 'Email', icon: Mail, href: 'mailto:agilsujito8@gmail.com' }
            ].map(({ label, icon: Icon, href, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white/70 text-slate-800 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-600 dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:text-cyanGlow"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none relative hidden min-h-[500px] lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
        >
          <div className="absolute right-0 top-8 grid w-[360px] gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-panel rounded-2xl p-5 dark:border-cyanGlow/20 dark:bg-ink/55"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-2xl font-black text-slate-950 dark:text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {floatingIcons.map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-sky-600 shadow-sm shadow-slate-200/60 backdrop-blur-xl dark:border-cyanGlow/40 dark:bg-ink/72 dark:text-cyan-200 dark:shadow-[0_0_30px_rgba(61,231,255,0.22)]"
              style={{
                left: `${12 + index * 17}%`,
                bottom: `${18 + (index % 2) * 22}%`
              }}
              animate={{ y: [0, -18, 0], rotate: [0, 6, -4, 0] }}
              transition={{ duration: 4.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
