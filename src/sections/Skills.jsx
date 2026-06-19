import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Skills"
          title="Skill set untuk membangun website yang rapi, cepat, dan interaktif."
          description="Kumpulan kemampuan utama yang relevan untuk pengembangan produk web, mulai dari frontend, backend, basis data, hingga workflow kolaborasi."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }, index) => (
            <motion.article
              key={title}
              className="group glass-panel rounded-2xl p-6"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-mintGlow transition group-hover:scale-110 dark:bg-white/10">
                  <Icon size={23} />
                </div>
                <span className="h-px flex-1 bg-gradient-to-r from-cyanGlow/70 via-white/15 to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-line dark:bg-white/[0.06] dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
