'use client';

import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Code2,
  Compass,
  Cpu,
  Sparkles
} from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/SocialIcons';
import { personalProfile } from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Interactive Canvas */}
      <ParticleCanvas />

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[var(--accent-glow)] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-[var(--text-secondary)]">
                ProtoSem Fellow @ Forge • B.E. CSE @ KCT
              </span>
            </div>

            {/* Headline & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
              {personalProfile.name}
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-medium text-[var(--accent-primary)] font-heading tracking-tight">
              {personalProfile.tagline}
            </p>

            <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
              {personalProfile.shortBio}
            </p>

            {/* Core Pillars */}
            <div className="flex flex-wrap gap-2 my-6">
              {[
                'Embedded IoT & FreeRTOS',
                'Full-Stack Web Dev',
                'Cinematography & Visual Storytelling',
                'Machine Learning Research'
              ].map((pill) => (
                <span
                  key={pill}
                  className="badge-neutral text-xs py-1 px-3"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a href="#projects" className="btn-primary">
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a href="#journal" className="btn-secondary">
                <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Forge Journal (Season 01)</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[var(--border-subtle)] w-full max-w-md">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mr-1">
                Profiles:
              </span>
              <a
                href={personalProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalProfile.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
              >
                <LeetcodeIcon size={16} />
              </a>
              <a
                href={`mailto:${personalProfile.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Quick Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-3xl p-2 bg-gradient-to-b from-[var(--border-subtle)] via-transparent to-[var(--border-subtle)] border border-[var(--border-subtle)] shadow-2xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[var(--bg-surface)]">
                <Image
                  src="/profile.png"
                  alt="Theeran P. — Computer Science Engineer & Creative Technologist"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 320px, 384px"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />

                {/* Corner Accents */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase">Status</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">
                      KCT CSE III Year (8.00 CGPA)
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
                </div>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-3 w-72 sm:w-80 md:w-96 mt-4">
              <div className="card-premium p-3 text-center">
                <p className="text-xl font-bold font-heading text-[var(--accent-primary)]">
                  {personalProfile.stats.projectsCompleted}+
                </p>
                <p className="text-[11px] text-[var(--text-muted)] font-mono">Projects</p>
              </div>
              <div className="card-premium p-3 text-center">
                <p className="text-xl font-bold font-heading text-[var(--text-primary)]">
                  {personalProfile.stats.forgeWeeks}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] font-mono">Forge Weeks</p>
              </div>
              <div className="card-premium p-3 text-center">
                <p className="text-xl font-bold font-heading text-[var(--text-primary)]">
                  {personalProfile.stats.eventsCovered}+
                </p>
                <p className="text-[11px] text-[var(--text-muted)] font-mono">Films & Shoots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
