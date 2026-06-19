import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setError('Mohon isi nama, email, dan pesan terlebih dahulu.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body = encodeURIComponent(
      `Halo Agil,\n\n${message}\n\nNama: ${name}\nEmail: ${email}`
    );

    setError('');
    window.location.href = `mailto:agilsujito8@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="section-shell">
        <SectionHeader
          kicker="Contact"
          title="Mari terhubung untuk ide, kolaborasi, atau project digital."
          description="Form ini disiapkan sebagai tampilan frontend. Untuk produksi, hubungkan submit handler ke email service, backend API, atau form provider pilihan."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="glass-panel rounded-2xl p-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Agil Sujito</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-300">
              Mahasiswa Sistem Informasi Universitas Tanjungpura dengan personal branding sebagai Tech Enthusiast.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="mailto:agilsujito8@gmail.com"
                className="focus-ring flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-700 transition hover:-translate-y-1 hover:border-cyan-400 dark:border-line dark:bg-white/[0.05] dark:text-zinc-300"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-cyanGlow dark:bg-white/10">
                  <Mail size={19} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-950 dark:text-white">Email</span>
                  <span className="text-sm">agilsujito8@gmail.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-700 dark:border-line dark:bg-white/[0.05] dark:text-zinc-300">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-mintGlow dark:bg-white/10">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-950 dark:text-white">Location</span>
                  <span className="text-sm">Pontianak, Kalimantan Barat</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="glass-panel rounded-2xl p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-zinc-200">
                Nama
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  required
                  className="focus-ring rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 font-normal text-slate-950 outline-none transition placeholder:text-slate-400 dark:border-line dark:bg-white/[0.06] dark:text-white"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-zinc-200">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="focus-ring rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 font-normal text-slate-950 outline-none transition placeholder:text-slate-400 dark:border-line dark:bg-white/[0.06] dark:text-white"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-zinc-200">
              Pesan
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda..."
                required
                className="focus-ring resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 font-normal text-slate-950 outline-none transition placeholder:text-slate-400 dark:border-line dark:bg-white/[0.06] dark:text-white"
              />
            </label>
            {error && <p className="mt-4 text-sm font-medium text-rose-500">{error}</p>}
            <button
              type="submit"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-cyan-500 sm:w-auto dark:bg-cyanGlow dark:text-ink dark:hover:bg-mintGlow"
            >
              Send Message
              <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
