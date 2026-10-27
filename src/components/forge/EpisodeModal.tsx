'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Compass,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Users,
  Image as ImageIcon,
  BookOpen
} from 'lucide-react';
import { ForgeWeekEpisode } from '@/types/portfolio';
import Lightbox from '../ui/Lightbox';

interface EpisodeModalProps {
  episode: ForgeWeekEpisode | null;
  onClose: () => void;
}

export default function EpisodeModal({ episode, onClose }: EpisodeModalProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !selectedImage) onClose();
    };

    if (episode) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [episode, selectedImage, onClose]);

  if (!episode) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="episode-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="badge-pill font-mono text-xs font-bold">
                WEEK {episode.weekNumber < 10 ? `0${episode.weekNumber}` : episode.weekNumber}
              </span>
              <span className="badge-neutral font-mono text-xs">
                {episode.category}
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

            <button
              onClick={onClose}
              aria-label="Close Episode Details"
              className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Title & Subtitle */}
            <div>
              <h2
                id="episode-modal-title"
                className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading"
              >
                {episode.title}
              </h2>
              <p className="mt-2 text-base text-[var(--text-secondary)] leading-relaxed">
                {episode.subtitle}
              </p>
            </div>

            {/* Overview / Summary */}
            <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Executive Summary</span>
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {episode.summary}
              </p>
            </div>

            {/* Objectives & Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Learning Objectives</span>
                </h3>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {episode.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)]">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Key Activities & Deliverables</span>
                </h3>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {episode.activitiesCompleted.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hardware/Software Challenges & Fixes */}
            {episode.challengesFixesList && episode.challengesFixesList.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Hardware & Firmware Challenges Solved</span>
                </h3>
                <div className="space-y-3">
                  {episode.challengesFixesList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                    >
                      <p className="text-xs font-semibold text-rose-400 mb-1">
                        <span className="font-mono">CHALLENGE: </span>
                        {item.challenge}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] mt-2 pl-3 border-l-2 border-[var(--accent-primary)]">
                        <strong className="text-[var(--text-primary)]">FIX APPLIED: </strong>
                        {item.fix}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reflection & Key Takeaways */}
            <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)]">
              <h4 className="text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider font-bold mb-1">
                Personal Engineering Reflection
              </h4>
              <p className="text-sm text-[var(--text-primary)] italic leading-relaxed">
                &ldquo;{episode.reflection}&rdquo;
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2 font-mono">
                Key Takeaway: {episode.keyLearnings}
              </p>
            </div>

            {/* Photo & Video Evidence Gallery */}
            {episode.galleryImages && episode.galleryImages.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Prototyping Evidence & Hardware Setup</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {episode.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        setSelectedImage({ url: img.url, caption: img.caption })
                      }
                      className="group cursor-pointer rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all"
                    >
                      <div className="relative w-full h-44 sm:h-52 overflow-hidden">
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                      <p className="p-3 text-xs text-[var(--text-secondary)] font-mono line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills & Team Credits */}
            <div className="border-t border-[var(--border-subtle)] pt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-2">
                  Skills Developed
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {episode.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {episode.teamCredits && (
                <div className="text-right">
                  <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-1">
                    Credits
                  </p>
                  <p className="text-xs text-[var(--text-primary)] font-medium">
                    {episode.teamCredits.map((c) => `${c.role}: ${c.name}`).join(' | ')}
                  </p>
                </div>
              )}
            </div>
          </div>
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
