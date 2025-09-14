'use client';

import { Sun, Moon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
interface HeaderProps {
  translations: {
    toggleLanguage: string;
    toggleTheme: string;
  };
}



export default function Header({ translations }: HeaderProps) {
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

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-background/70 backdrop-blur-md">
      {/* ... باقي الكود كما هو ... */}
      <button
        onClick={switchLocale}
        aria-label={translations.toggleLanguage}
        className="cursor-pointer p-2 font-semibold text-foreground/80 hover:text-violet-400 transition"
      >
        {/* ... */}
      </button>

      {mounted && (
        <button
          onClick={toggleTheme}
          aria-label={translations.toggleTheme}
          className="cursor-pointer p-2 text-foreground/80 hover:text-violet-400 transition"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      )}
    </header>
  );
}

