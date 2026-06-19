import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Target } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Focus',
    text: 'Mempelajari sistem informasi, analisis kebutuhan, basis data, dan bagaimana teknologi mendukung proses bisnis.'
  },
  {
    icon: Target,
    title: 'Builder Mindset',
    text: 'Suka mengubah ide menjadi interface yang jelas, cepat dipahami, dan nyaman digunakan di berbagai perangkat.'
  },
  {
    icon: Sparkles,
    title: 'Tech Enthusiast',
    text: 'Aktif mengikuti perkembangan web modern, UI interaction, dan eksperimen teknologi untuk produk digital.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="About Me"
          title="Mahasiswa sistem informasi yang membangun pengalaman digital modern."
          description="Saya Agil Sujito, mahasiswa Sistem Informasi Universitas Tanjungpura yang memiliki minat pada bidang IT Governance, Information Security, dan Data Management. Saya berpengalaman dalam analisis risiko TI, pengelolaan data, dan pengembangan aplikasi web."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanGlow dark:bg-white/10">
                <Icon size={23} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
