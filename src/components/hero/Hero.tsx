'use client';

import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Code2
} from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/SocialIcons';
import { personalProfile } from '@/data/profile';
import { forgeWeeks } from '@/data/forge';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[var(--accent-glow)] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Identity, Intro, Skills, CTAs, Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-[var(--text-secondary)]">
                ProtoSem Fellow @ Forge • B.E. CSE @ KCT
              </span>
            </div>

            {/* Main Name & Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
              {personalProfile.name}
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-medium text-[var(--accent-primary)] font-heading tracking-tight">
              {personalProfile.tagline}
            </p>

            <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
              {personalProfile.shortBio}
            </p>

            {/* Core Pillars / Skills Badges */}
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

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a href="#projects" className="btn-primary">
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <Link href="/forge-journal" className="btn-secondary">
                <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Forge Journal ({forgeWeeks.length} Weeks)</span>
              </Link>
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

          {/* Right Column: Engineering Focus & Telemetry Metrics Console (Replaces Profile Image) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="card-premium p-6 sm:p-8 space-y-6 relative overflow-hidden bg-gradient-to-b from-[var(--bg-surface)] via-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                    System Telemetry
                  </span>
                </div>
                <span className="badge-pill font-mono text-[11px]">
                  KCT • III YEAR
                </span>
              </div>

              {/* Fellowship / Research Focus */}
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-semibold uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>Current Fellowship Focus</span>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)] font-heading">
                  ESP32 FreeRTOS Telemetry & Industrial IoT Nodes
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Engineering preemptive real-time firmware, hardware SPI flash datalogging, and MQTT wireless telemetry pipelines at Forge Innovation & Ventures.
                </p>
              </div>

              {/* Verified Metrics 4-Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-[var(--accent-primary)]">
                    {personalProfile.stats.projectsCompleted}+
                  </p>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1 uppercase">
                    Projects Built
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)]">
                    {forgeWeeks.length}
                  </p>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1 uppercase">
                    Forge Weeks
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-[var(--text-primary)]">
                    {personalProfile.stats.eventsCovered}+
                  </p>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1 uppercase">
                    Films & Shoots
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-emerald-400">
                    {personalProfile.stats.gpa}
                  </p>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1 uppercase">
                    Academic CGPA
                  </p>
                </div>
              </div>

              {/* Quick Competencies Footer */}
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>📍 Coimbatore, India</span>
                <span className="text-[var(--accent-primary)] font-semibold">Active & Building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
