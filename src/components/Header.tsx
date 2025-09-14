'use client';

import { Sun, Moon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ElectricBorder from './ElectricBorder';

export default function Header({
  translations,
}: {
  translations: { toggleLanguage: string; toggleTheme: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentLocale = pathname.split('/')[1];
  const isArabic = currentLocale === 'en';

  const switchLocale = () => {
    const segments = pathname.split('/');
    segments[1] = isArabic ? 'ar' : 'en';
    router.push(segments.join('/'));
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-background/70 backdrop-blur-md fixed">
      {/* Logo مع أنيميشن */}
      <motion.div
        className="flex items-center cursor-pointer space-x-2"
        onClick={() => router.push(pathname)}
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" rx="12" fill="url(#logoGradientHeader)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 16H16V24H24V16ZM24 32H16V40H24V32ZM16 48V40H8V48H16ZM48 16H40V24H48V16ZM40 8H48V16H56V8H40ZM32 16V8H40V16H32ZM16 16V8H24V16H16Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="logoGradientHeader"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-2xl font-bold text-foreground">
          codespce
        </span>
      </motion.div>

      {/* الأزرار */}
      <nav className="flex items-center gap-4">
        {/* زر اللغة */}
        <button
          onClick={switchLocale}
          aria-label={translations.toggleLanguage}
          className="cursor-pointer p-2 font-semibold text-foreground/80 hover:text-violet-400 transition"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isArabic ? (
              <motion.span
                key="ar"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                AR
              </motion.span>
            ) : (
              <motion.span
                key="en"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                EN
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* زر الثيم */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label={translations.toggleTheme}
            className="cursor-pointer p-2 text-foreground/80 hover:text-violet-400 transition"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        )}
      </nav>
    </header>
  );
}
