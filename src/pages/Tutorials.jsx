import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { tutorials } from '../data/tutorials';

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function Tutorials() {
  const { t } = useTranslation();

  return (
    <div className="container-page py-12">
      <PageHeader subtitle={t('tutorials.subtitle')} title={t('tutorials.title')} />

      {tutorials.length === 0 ? (
        <div className="card p-12 text-center text-zinc-500">{t('tutorials.no_items')}</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tutorials.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="card overflow-hidden group hover:border-brand-500/50 transition-colors"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="block p-5"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="chip text-[10px]">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="flex items-start gap-1.5 text-lg font-semibold font-display mb-2 group-hover:text-brand-500 transition-colors">
                  {t(`tutorials.items.${item.slug}.title`)}
                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                  {t(`tutorials.items.${item.slug}.description`)}
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <ExternalLink size={12} />
                    {hostname(item.url)}
                  </span>
                  <span className="font-medium text-brand-500">{t('tutorials.visit')}</span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
