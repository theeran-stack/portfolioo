'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Forge Journal', href: '#journal' },
  { label: 'Coding', href: '#coding' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--text-primary)] focus:outline-none"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-surface)] text-[var(--accent-primary)] border border-[var(--border-subtle)] font-mono text-sm font-semibold transition-transform group-hover:scale-105">
            T
          </span>
          <span className="font-heading tracking-wider">
            THEERAN<span className="text-[var(--accent-primary)]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-surface)]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--border-subtle)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[var(--accent-surface)] border border-[var(--accent-primary)]/30 -z-10" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#journal"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-primary)] transition-all duration-200"
          >
            <Compass className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>Season One</span>
          </a>
          <a
            href="#contact"
            className="btn-primary text-xs py-2 px-4 font-semibold"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2 mt-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[var(--accent-surface)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/30'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[var(--text-muted)]">→</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-3"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
