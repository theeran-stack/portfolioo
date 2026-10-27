'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theeran-theme', nextTheme);
    } catch (e) {
      // ignore
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] cursor-pointer"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
