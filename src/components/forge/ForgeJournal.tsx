'use client';

import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { forgeProgramInfo, forgeWeeks } from '@/data/forge';

export default function ForgeJournal() {
  const completedCount = forgeWeeks.filter((w) => w.status === 'Completed').length;

  return (
    <section id="journal" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INTERNSHIP & RESEARCH FELLOWSHIP"
          title="Forge Journal"
          subtitle="A comprehensive technical record of my fellowship at Forge Innovation & Ventures, engineering FreeRTOS embedded systems, hardware telemetry, and industrial IoT nodes."
        />

        {/* Program Overview Banner (No Week Cards or Filters on Homepage) */}
        <div className="card-premium p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge-pill font-mono text-xs font-bold">
                  {forgeProgramInfo.programName}
                </span>
                <span className="badge-neutral font-mono text-xs">
                  {forgeProgramInfo.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading">
                {forgeProgramInfo.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {forgeProgramInfo.overview}
              </p>

              {/* Core Fellowship Objectives */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-2 font-semibold">
                  Key Focus Areas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {forgeProgramInfo.learningObjectives.slice(0, 3).map((obj, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                      <span>{obj}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Prominent CTA to Dedicated Page */}
              <div className="pt-4">
                <Link
                  href="/forge-journal"
                  className="btn-primary inline-flex items-center gap-2 py-3 px-6 text-sm font-semibold"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open Forge Journal (6 Weeks)</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Metrics & Progress Visual */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent-surface)] border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] mb-3">
                <Compass className="w-7 h-7" />
              </div>

              <p className="text-4xl font-bold font-heading text-[var(--text-primary)]">
                {completedCount} / {forgeWeeks.length}
              </p>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-1 font-semibold">
                Weeks Documented & Completed
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-[var(--bg-surface)] h-2.5 rounded-full overflow-hidden mt-5 border border-[var(--border-subtle)]">
                <div
                  className="bg-gradient-to-r from-[var(--accent-primary)] to-amber-500 h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(completedCount / forgeWeeks.length) * 100}%`
                  }}
                />
              </div>

              <p className="text-xs font-mono text-[var(--accent-primary)] mt-3 font-semibold">
                Status: 5 Completed • 1 In Progress
              </p>

              <Link
                href="/forge-journal"
                className="mt-5 text-xs font-semibold text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>View All 6 Weekly Records</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
