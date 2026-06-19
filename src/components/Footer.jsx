import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/Agilsjt', external: true },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/agil16/', external: true },
  { label: 'Email', icon: Mail, href: 'mailto:agilsujito8@gmail.com' }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60 py-8 backdrop-blur-xl dark:border-white/10 dark:bg-ink/55">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-sm text-slate-600 sm:flex-row dark:text-zinc-400">
        <p>(c) {new Date().getFullYear()} Agil Sujito. Built with React and Three.js.</p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, icon: Icon, href, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/75 text-slate-700 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 dark:border-line dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:text-cyanGlow"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
