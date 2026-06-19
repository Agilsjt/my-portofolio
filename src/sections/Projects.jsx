import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Projects"
          title="Selected work dengan fokus pada sistem, interface, dan pengalaman pengguna."
          description="Proyek nyata yang telah diselesaikan."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-line dark:bg-white/[0.055] dark:shadow-black/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    aria-label={`Open ${project.title}`}
                    className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-800 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 dark:border-line dark:text-white dark:hover:text-cyanGlow"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="mt-3 min-h-24 leading-7 text-slate-600 dark:text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-white/[0.07] dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
