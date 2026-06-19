import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import Scene from './components/Scene.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('agil-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('agil-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-ink dark:text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(99,102,241,0.11),transparent_26%),linear-gradient(135deg,#F8FAFC_0%,#EAF6FF_48%,#F8FAFC_100%)] dark:bg-[radial-gradient(circle_at_20%_12%,rgba(61,231,255,0.16),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,107,158,0.12),transparent_26%),linear-gradient(135deg,#080B12_0%,#0E1424_52%,#07080D_100%)]" />
        <div className="absolute inset-0 opacity-35 mix-blend-multiply dark:opacity-70 dark:mix-blend-normal">
          <Scene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-slate-50/55 to-slate-50/90 dark:from-ink/20 dark:via-ink/50 dark:to-ink/80" />
      </div>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-ink"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="relative flex h-28 w-28 items-center justify-center"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <span className="absolute inset-0 rounded-full border border-cyanGlow/20" />
              <motion.span
                className="absolute inset-2 rounded-full border-2 border-transparent border-t-cyanGlow border-r-mintGlow"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
              <span className="text-xl font-semibold tracking-[0.18em] text-white">AS</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
