'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/SocialIcons';
import { personalProfile } from '@/data/profile';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          {/* Brand & Closing statement */}
          <div className="text-center md:text-left">
            <Link
              href="/#home"
              className="text-lg font-bold font-heading text-[var(--text-primary)] tracking-wider"
            >
              THEERAN<span className="text-[var(--accent-primary)]">.</span>
            </Link>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Computer Science Engineer • Creative Technologist • ProtoSem Fellow
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-secondary)]">
            <Link href="/#about" className="hover:text-[var(--accent-primary)] transition-colors">
              About
            </Link>
            <Link href="/#skills" className="hover:text-[var(--accent-primary)] transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="hover:text-[var(--accent-primary)] transition-colors">
              Projects
            </Link>
            <Link href="/#experience" className="hover:text-[var(--accent-primary)] transition-colors">
              Experience
            </Link>
            <Link href="/forge-journal" className="hover:text-[var(--accent-primary)] transition-colors">
              Forge Journal
            </Link>
            <Link href="/#coding" className="hover:text-[var(--accent-primary)] transition-colors">
              Coding
            </Link>
            <Link href="/#contact" className="hover:text-[var(--accent-primary)] transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>
            © {currentYear} {personalProfile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalProfile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalProfile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={personalProfile.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              <LeetcodeIcon size={16} />
            </a>
            <a
              href={`mailto:${personalProfile.email}`}
              aria-label="Email"
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
