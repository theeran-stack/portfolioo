'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Compass,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Terminal,
  Cpu
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import EpisodeCard from './EpisodeCard';
import EpisodeModal from './EpisodeModal';
import { forgeProgramInfo, forgeEpisodes } from '@/data/forge';
import { ForgeWeekEpisode } from '@/types/portfolio';

export default function ForgeJournal() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
  const [activeEpisode, setActiveEpisode] = useState<ForgeWeekEpisode | null>(null);

  const filteredEpisodes = forgeEpisodes.filter((ep) => {
    if (filter === 'completed') return ep.status === 'Completed';
    if (filter === 'ongoing') return ep.status === 'In Progress';
    return true;
  });

  // Featured milestone: Episode 07 (FreeRTOS & SPI MicroSD Logger)
  const featuredEpisode = forgeEpisodes.find((ep) => ep.weekNumber === 7) || forgeEpisodes[0];

  return (
    <section id="journal" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INTERNSHIP & RESEARCH FELLOWSHIP"
          title="Season One: Forge Journey"
          subtitle="A documentary-style technical record of my 20-week fellowship at Forge Innovation & Ventures, engineering FreeRTOS embedded systems, hardware telemetry, and industrial IoT nodes."
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
                {forgeProgramInfo.completedWeeks} / {forgeProgramInfo.totalWeeks}
              </p>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mt-1">
                Weeks Documented & Completed
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-[var(--bg-surface)] h-2 rounded-full overflow-hidden mt-4 border border-[var(--border-subtle)]">
                <div
                  className="bg-gradient-to-r from-[var(--accent-primary)] to-amber-500 h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(forgeProgramInfo.completedWeeks / forgeProgramInfo.totalWeeks) * 100}%`
                  }}
                />
              </div>
              <p className="text-[11px] font-mono text-[var(--accent-primary)] mt-2 font-semibold">
                Cohort Status: Actively In Progress
              </p>
            </div>
          </div>
        </div>

        {/* Featured Milestone Card */}
        {featuredEpisode && (
          <div className="mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Featured Milestone Spotlight</span>
            </div>

            <div
              onClick={() => setActiveEpisode(featuredEpisode)}
              className="card-premium p-6 sm:p-8 cursor-pointer group hover:border-[var(--border-hover)] transition-all relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="badge-pill text-xs font-mono font-bold">
                      EPISODE 07
                    </span>
                    <span className="badge-neutral text-xs font-mono">
                      {featuredEpisode.category}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {featuredEpisode.title}
                  </h4>

                  <p className="text-sm font-medium text-[var(--text-secondary)]">
                    {featuredEpisode.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    {featuredEpisode.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredEpisode.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-[var(--accent-primary)]">
                    <span>Inspect Episode Documentation & Firmware Telemetry</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                    <Image
                      src="/img/week-7/freertos-esp32-node.jpeg"
                      alt="ESP32 FreeRTOS Hardware Node"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-mono text-white text-center">
                      Live FreeRTOS MicroSD SPI Hardware Node
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter controls */}
        <div className="flex items-center justify-between mb-8 border-b border-[var(--border-subtle)] pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-[var(--text-muted)] mr-2">
              Filter Episodes:
            </span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                filter === 'all'
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              All Episodes ({forgeEpisodes.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                filter === 'completed'
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              Completed ({forgeProgramInfo.completedWeeks})
            </button>
            <button
              onClick={() => setFilter('ongoing')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                filter === 'ongoing'
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              In Progress ({forgeEpisodes.length - forgeProgramInfo.completedWeeks})
            </button>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              onSelect={(ep) => setActiveEpisode(ep)}
            />
          ))}
        </div>

        {/* Episode Detail Modal */}
        <EpisodeModal
          episode={activeEpisode}
          onClose={() => setActiveEpisode(null)}
        />
      </div>
    </section>
  );
}
