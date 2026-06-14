import { motion } from 'framer-motion';
import { Code2, Layout, Server, Smartphone, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function About() {
  const { t } = useTranslation();
  const age = new Date().getFullYear() - profile.birthYear;

  const services = [
    { Icon: Code2, key: 'web_dev' },
    { Icon: Layout, key: 'responsive' },
    { Icon: Server, key: 'fullstack' },
    { Icon: Smartphone, key: 'mobile' },
  ];

  const info = [
    { label: t('about.name_label'), value: profile.name },
    { label: t('about.age_label'), value: age },
    { label: t('about.residence_label'), value: profile.location },
    { label: t('about.freelance_label'), value: t('about.available') },
    { label: t('about.email_label'), value: profile.email },
  ];

  return (
    <div className="container-page py-12">
      <PageHeader subtitle={t('about.subtitle')} title={t('about.title')} />

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="lg:col-span-3 card p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-display mb-4">
            {t('about.heading')}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {t('about.p1')}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('about.p2')}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="https://github.com/qobulovasror/cv/blob/main/Asror_Qobulov.pdf" target="_blank" className="btn-primary">
              <Download size={16} /> {t('about.download_cv')}
            </a>
            <Link to="/contact" className="btn-secondary">
              <Mail size={16} /> {t('about.hire_me')}
            </Link>
          </div>
        </motion.div>

        {/* Personal info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="lg:col-span-2 card p-6"
        >
          <h3 className="text-lg font-semibold font-display mb-4">
            {t('about.info_title')}
          </h3>
          <ul className="space-y-3">
            {info.map((row) => (
              <li key={row.label} className="flex justify-between items-center text-sm gap-3">
                <span className="font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  {row.label}
                </span>
                <span className="text-right text-zinc-900 dark:text-zinc-100 truncate">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Services */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold font-display mb-6 text-center">
          {t('about.services_title')}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ Icon, key }, i) => (
            <motion.div
              key={key}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={i + 3}
              whileHover={{ y: -4 }}
              className="card p-6 group hover:border-brand-500/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 flex items-center justify-center mb-4 group-hover:from-brand-500 group-hover:to-accent-500 transition-colors">
                <Icon size={24} className="text-brand-500 group-hover:text-white" />
              </div>
              <h4 className="font-semibold mb-2">{t(`about.services.${key}.title`)}</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t(`about.services.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
