import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';
import { profile } from '../data/profile';

export default function Home() {
  const { t } = useTranslation();
  const roles = t('home.roles', { returnObjects: true });

  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center overflow-hidden">
      {/* Decorative blobs (DOM order keeps them behind content) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container-page py-16 lg:py-0 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 chip"
          >
            <Sparkles size={12} className="text-brand-500" />
            {t('home.greeting')}
          </motion.span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.05]">
            <span className="block">{profile.name.split(' ')[0]}</span>
            <span className="heading-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div className="mt-6 text-2xl sm:text-3xl font-medium text-zinc-700 dark:text-zinc-300 h-10">
            <TypeWriter words={Array.isArray(roles) ? roles : []} />
          </div>

          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('home.tagline')}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/portfolio" className="btn-primary group">
              {t('home.cta_projects')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <Mail size={16} />
              {t('home.cta_contact')}
            </Link>
            <a href={"https://github.com/qobulovasror/cv/blob/main/Asror_Qobulov.pdf"} target="_blank" className="btn-ghost">
              <Download size={16} />
              CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-zinc-500">Follow</span>
            <div className="h-px flex-1 max-w-[40px] bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex items-center gap-2">
              {[
                { href: profile.socials.github, Icon: FaGithub },
                { href: profile.socials.linkedin, Icon: FaLinkedin },
                { href: profile.socials.telegram, Icon: FaTelegram },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-brand-500 hover:text-brand-500 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
