'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import WeekCard from '@/components/forge/WeekCard';
import { forgeProgramInfo, forgeWeeks } from '@/data/forge';

export default function ForgeJournalPage() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing' | 'upcoming'>('all');

  const completedCount = forgeWeeks.filter((w) => w.status === 'Completed').length;
  const inProgressCount = forgeWeeks.filter((w) => w.status === 'In Progress').length;
  const upcomingCount = forgeWeeks.filter((w) => w.status === 'Upcoming').length;

  const filteredWeeks = forgeWeeks.filter((w) => {
    if (filter === 'completed') return w.status === 'Completed';
    if (filter === 'ongoing') return w.status === 'In Progress';
    if (filter === 'upcoming') return w.status === 'Upcoming';
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Fixed Navbar */}
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <span className="badge-pill font-mono text-xs font-semibold">
              {forgeWeeks.length} Weeks Documented
            </span>
          </div>

          <SectionHeading
            badge="INTERNSHIP & RESEARCH FELLOWSHIP"
            title="Forge Journal"
            subtitle={`A structured technical record of my fellowship at Forge Innovation & Ventures, detailing all ${forgeWeeks.length} weekly sprints of industrial prototyping, FreeRTOS real-time embedded systems, hardware telemetry, and IoT engineering.`}
          />

          {/* Program Overview Banner */}
          <div className="card-premium p-6 sm:p-8 mb-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge-pill font-mono text-xs font-bold">
                    {forgeProgramInfo.programName}
                  </span>
                  <span className="badge-neutral font-mono text-xs">
                    {forgeProgramInfo.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
                  {forgeProgramInfo.subtitle}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {forgeProgramInfo.overview}
                </p>

                {/* Learning Objectives Pills */}
                <div className="pt-2">
                  <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-2 font-semibold">
                    Core Fellowship Objectives:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {forgeProgramInfo.learningObjectives.slice(0, 4).map((obj, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                        <span>{obj}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Metric & Visual */}
              <div className="lg:col-span-4 p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center flex flex-col justify-center items-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent-surface)] border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] mb-3">
                  <Compass className="w-7 h-7" />
                </div>

                <p className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                  {completedCount} / {forgeWeeks.length}
                </p>
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  Weeks Documented & Completed
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-[var(--bg-surface)] h-2 rounded-full overflow-hidden mt-4 border border-[var(--border-subtle)]">
                  <div
                    className="bg-gradient-to-r from-[var(--accent-primary)] to-amber-500 h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(completedCount / forgeWeeks.length) * 100}%`
                    }}
                  />
                </div>
                <p className="text-[11px] font-mono text-[var(--accent-primary)] mt-2 font-semibold">
                  Status: {completedCount} Completed • {inProgressCount} In Progress{upcomingCount > 0 ? ` • ${upcomingCount} Upcoming` : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center justify-between mb-8 border-b border-[var(--border-subtle)] pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] mr-2">
                Filter Weeks:
              </span>
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                  filter === 'all'
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                All Weeks ({forgeWeeks.length})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                  filter === 'completed'
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                Completed ({completedCount})
              </button>
              <button
                onClick={() => setFilter('ongoing')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                  filter === 'ongoing'
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                In Progress ({inProgressCount})
              </button>
              {upcomingCount > 0 && (
                <button
                  onClick={() => setFilter('upcoming')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                    filter === 'upcoming'
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Upcoming ({upcomingCount})
                </button>
              )}
            </div>
          </div>

          {/* All 20 Weeks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWeeks.map((week) => (
              <WeekCard key={week.id} week={week} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
