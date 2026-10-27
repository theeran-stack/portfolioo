'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Compass,
  Layers,
  Image as ImageIcon,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import Lightbox from '@/components/ui/Lightbox';
import { ForgeWeekRecord } from '@/types/portfolio';

interface WeekDetailClientProps {
  week: ForgeWeekRecord;
}

export default function WeekDetailClient({ week }: WeekDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/forge-journal"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Forge Journal</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="badge-pill font-mono text-xs font-bold">
              WEEK {week.weekNumber < 10 ? `0${week.weekNumber}` : week.weekNumber}
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                week.status === 'Completed'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : week.status === 'In Progress'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
              }`}
            >
              {week.status}
            </span>
          </div>
        </div>

        {/* Hero Card */}
        <div className="card-premium p-6 sm:p-10 mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-semibold uppercase">
            <span>{week.category}</span>
            <span>•</span>
            <span>{week.dateRange}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-heading leading-tight">
            {week.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {week.subtitle}
          </p>
        </div>

        {/* Executive Summary */}
        <div className="card-premium p-6 sm:p-8 mb-10">
          <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Executive Summary</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
            {week.summary}
          </p>
        </div>

        {/* Objectives & Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="card-premium p-6 sm:p-8">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Learning Objectives</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              {week.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--accent-primary)] mt-1">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium p-6 sm:p-8">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span>Key Activities & Deliverables</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              {week.activitiesCompleted.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hardware & Firmware Challenges Solved */}
        {week.challengesFixesList && week.challengesFixesList.length > 0 && (
          <div className="card-premium p-6 sm:p-8 mb-10">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Hardware & Firmware Challenges Solved</span>
            </h3>
            <div className="space-y-4">
              {week.challengesFixesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                >
                  <p className="text-xs sm:text-sm font-semibold text-rose-400 mb-1">
                    <span className="font-mono">CHALLENGE {idx + 1}: </span>
                    {item.challenge}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 pl-3 border-l-2 border-[var(--accent-primary)]">
                    <strong className="text-[var(--text-primary)]">FIX APPLIED: </strong>
                    {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reflection & Key Takeaways */}
        <div className="card-premium p-6 sm:p-8 mb-10 border-l-4 border-[var(--accent-primary)]">
          <h4 className="text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider font-bold mb-2">
            Personal Engineering Reflection
          </h4>
          <p className="text-base text-[var(--text-primary)] italic leading-relaxed">
            &ldquo;{week.reflection}&rdquo;
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-3 font-mono">
            Key Takeaway: {week.keyLearnings}
          </p>
        </div>

        {/* Photo Evidence & Hardware Gallery */}
        {week.galleryImages && week.galleryImages.length > 0 && (
          <div className="card-premium p-6 sm:p-8 mb-10">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Prototyping Evidence & Hardware Setup (Click to Zoom)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {week.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedImage({ url: img.url, caption: img.caption })
                  }
                  className="group cursor-pointer rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all shadow-md"
                >
                  <div className="relative w-full h-52 sm:h-64 overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>
                  <p className="p-3 text-xs text-[var(--text-secondary)] font-mono leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Team Credits */}
        <div className="card-premium p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-2 font-semibold">
              Skills Developed in This Sprint:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {week.skillsGained.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {week.teamCredits && (
            <div className="text-left sm:text-right">
              <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-1 font-semibold">
                Credits:
              </p>
              <p className="text-xs text-[var(--text-primary)] font-medium">
                {week.teamCredits.map((c) => `${c.role}: ${c.name}`).join(' | ')}
              </p>
            </div>
          )}
        </div>

        {/* Back Link Bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/forge-journal"
            className="btn-secondary text-xs py-3 px-6 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Weeks</span>
          </Link>
        </div>
      </div>

      {/* Lightbox for Gallery Photos */}
      <Lightbox
        isOpen={!!selectedImage}
        imageUrl={selectedImage?.url || ''}
        caption={selectedImage?.caption || ''}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
