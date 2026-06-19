import { motion } from 'framer-motion';

export default function SectionHeader({ kicker, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-zinc-300">{description}</p>
      )}
    </motion.div>
  );
}
