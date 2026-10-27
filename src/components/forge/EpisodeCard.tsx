'use client';

import Image from 'next/image';
import { ArrowRight, BookOpen, Camera, CheckCircle } from 'lucide-react';
import { ForgeWeekEpisode } from '@/types/portfolio';

interface EpisodeCardProps {
  episode: ForgeWeekEpisode;
  onSelect: (episode: ForgeWeekEpisode) => void;
}

export default function EpisodeCard({ episode, onSelect }: EpisodeCardProps) {
  const hasGallery = episode.galleryImages && episode.galleryImages.length > 0;
  const firstImage = hasGallery ? episode.galleryImages![0].url : null;

  return (
    <article
      onClick={() => onSelect(episode)}
      className="card-premium p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="badge-pill font-mono text-xs font-bold">
            WEEK {episode.weekNumber < 10 ? `0${episode.weekNumber}` : episode.weekNumber}
          </span>

          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
              episode.status === 'Completed'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
            }`}
          >
            {episode.status}
          </span>
        </div>

        {/* Thumbnail preview if gallery exists */}
        {firstImage && (
          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <Image
              src={firstImage}
              alt={episode.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 350px"
            />
            {hasGallery && (
              <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1">
                <Camera className="w-3 h-3 text-[var(--accent-primary)]" />
                <span>{episode.galleryImages!.length} Photos</span>
              </span>
            )}
          </div>
        )}

        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-1">
          {episode.title}
        </h3>

        <p className="text-xs font-mono text-[var(--accent-primary)] mb-3">
          {episode.category}
        </p>

        <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-4">
          {episode.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-[var(--accent-primary)]">
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read Journal</span>
        </span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
}
