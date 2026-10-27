'use client';

import Image from 'next/image';
import { ArrowUpRight, ExternalLink, BookOpen } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { ProjectItem } from '@/types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="card-premium overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Thumbnail */}
        <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[var(--bg-elevated)]">
          <Image
            src={project.featuredImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-80" />

          {/* Badges on top */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="badge-pill backdrop-blur-md bg-[var(--bg-surface)]/80 font-mono text-[11px]">
              {project.category}
            </span>
            <span className="badge-neutral backdrop-blur-md bg-[var(--bg-surface)]/80 font-mono text-[11px]">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-[var(--text-muted)]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-0 border-t border-[var(--border-subtle)] mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(project)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Study</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub for ${project.title}`}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="p-2 rounded-lg bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
