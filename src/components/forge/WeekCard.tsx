'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Camera, CheckCircle } from 'lucide-react';
import { ForgeWeekRecord } from '@/types/portfolio';

interface WeekCardProps {
  week: ForgeWeekRecord;
}

export default function WeekCard({ week }: WeekCardProps) {
  const hasGallery = week.galleryImages && week.galleryImages.length > 0;
  const firstImage = hasGallery ? week.galleryImages![0].url : null;
  const detailUrl = `/forge-journal/week-${week.weekNumber}`;

  return (
    <article className="card-premium p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
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

        {/* Thumbnail preview if gallery exists */}
        {firstImage && (
          <Link href={detailUrl} className="block relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <Image
              src={firstImage}
              alt={week.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 350px"
            />
            {hasGallery && (
              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1">
                <Camera className="w-3 h-3 text-[var(--accent-primary)]" />
                <span>{week.galleryImages!.length} Photos</span>
              </span>
            )}
          </Link>
        )}

        <Link href={detailUrl}>
          <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-1">
            {week.title}
          </h3>
        </Link>

        <p className="text-xs font-mono text-[var(--accent-primary)] mb-3">
          {week.category}
        </p>

        <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-4">
          {week.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-[var(--accent-primary)]">
        <Link
          href={detailUrl}
          className="flex items-center gap-1.5 hover:underline"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read Journal</span>
        </Link>
        <Link href={detailUrl} aria-label={`Read Journal for ${week.title}`}>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
