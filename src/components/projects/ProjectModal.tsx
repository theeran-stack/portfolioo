'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { ProjectItem } from '@/types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="badge-pill font-mono text-xs">
              {project.category}
            </span>
            <span className="badge-neutral font-mono text-xs">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-base text-[var(--text-secondary)] leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                <GithubIcon size={16} />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4"
              >
                <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          {/* 1. Overview */}
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>1. Project Overview</span>
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* 2. Problem Statement & Motivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>The Problem Statement</span>
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Solution Architecture</span>
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {project.solutionArchitecture}
              </p>
            </div>
          </div>

          {/* 3. Key Features */}
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Engineering Challenges & Fixes */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                Engineering Challenges & Technical Solutions
              </h3>
              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                  >
                    <p className="text-xs font-semibold text-rose-400 mb-1 flex items-center gap-2">
                      <span className="font-mono">CHALLENGE {idx + 1}:</span>
                      <span>{item.challenge}</span>
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-2 pl-4 border-l-2 border-[var(--accent-primary)]">
                      <strong className="text-[var(--text-primary)]">Resolution: </strong>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Key Learnings & Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                Key Learnings
              </h3>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--accent-primary)]">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.outcomes && (
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                  Verified Outcome
                </h3>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 leading-relaxed">
                  {project.outcomes}
                </div>
              </div>
            )}
          </div>

          {/* 6. Technology Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3 font-semibold">
              Technologies & Frameworks Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
