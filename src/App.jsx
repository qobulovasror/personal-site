import { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import MobileTopbar from './components/MobileTopbar';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const Contact = lazy(() => import('./pages/Contact'));

function PageTransition({ children, pathKey }) {
  return (
    <motion.div
      key={pathKey}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const wrap = (el) => <PageTransition pathKey={location.pathname}>{el}</PageTransition>;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <ScrollToTop />
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="lg:pl-72">
        <MobileTopbar onOpen={() => setOpen(true)} />
        <main className="min-h-screen">
          <Suspense fallback={<Loading />}>
            <Routes location={location}>
              <Route path="/" element={wrap(<Home />)} />
              <Route path="/about" element={wrap(<About />)} />
              <Route path="/resume" element={wrap(<Resume />)} />
              <Route path="/portfolio" element={wrap(<Portfolio />)} />
              <Route path="/tutorials" element={wrap(<Tutorials />)} />
              <Route path="/contact" element={wrap(<Contact />)} />
            </Routes>
          </Suspense>
        </main>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
