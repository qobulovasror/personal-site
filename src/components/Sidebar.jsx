import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Mail,
  X,
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegram, FaFacebook, FaCodepen } from 'react-icons/fa';
import avatar from '../assets/user.jpeg';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const items = [
  { to: '/', icon: HomeIcon, key: 'home' },
  { to: '/about', icon: User, key: 'about' },
  { to: '/resume', icon: FileText, key: 'resume' },
  { to: '/portfolio', icon: Briefcase, key: 'portfolio' },
  { to: '/tutorials', icon: GraduationCap, key: 'tutorials' },
  { to: '/contact', icon: Mail, key: 'contact' },
];

const socialIcons = [
  { href: profile.socials.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
  { href: profile.socials.github, Icon: FaGithub, label: 'GitHub' },
  { href: profile.socials.telegram, Icon: FaTelegram, label: 'Telegram' },
  { href: profile.socials.facebook, Icon: FaFacebook, label: 'Facebook' },
  { href: profile.socials.codepen, Icon: FaCodepen, label: 'Codepen' },
];

export default function Sidebar({ open, onClose }) {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {open && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isDesktop || open ? 0 : -320 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="fixed top-0 left-0 z-50 h-screen w-72 flex flex-col bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800"
      >
        {/* Mobile close */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label={t('common.close')}
        >
          <X size={20} />
        </button>

        {/* Avatar */}
        <div className="relative px-6 pt-8 pb-6 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 blur opacity-60" />
            <img
              src={avatar}
              alt={profile.name}
              className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white dark:ring-zinc-950"
            />
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
          </div>
          <h2 className="mt-4 text-lg font-semibold font-display">{profile.name}</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{profile.location}</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pb-2 overflow-y-auto">
          <ul className="space-y-1">
            {items.map(({ to, icon: Icon, key }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-500/10 to-accent-500/10 text-brand-600 dark:text-brand-400'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={18} className={isActive ? 'text-brand-500' : ''} />
                      <span>{t(`nav.${key}`)}</span>
                      {isActive && (
                        <motion.span
                          layoutId="active-dot"
                          className="ml-auto h-2 w-2 rounded-full bg-brand-500"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="px-4 py-3 flex items-center gap-2 border-t border-zinc-200 dark:border-zinc-800">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Socials */}
        <div className="px-4 py-4 flex items-center justify-center gap-2 border-t border-zinc-200 dark:border-zinc-800">
          {socialIcons.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="p-2 text-zinc-500 hover:text-brand-500 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="pb-4 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </motion.aside>
    </>
  );
}
