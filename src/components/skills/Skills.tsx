'use client';

import { useState } from 'react';
import {
  Code2,
  FileCode2,
  FileCode,
  Layout,
  Globe,
  Atom,
  Server,
  Palette,
  Cpu,
  Clock,
  Radio,
  Gauge,
  Film,
  Sliders,
  Camera,
  Volume2,
  GitBranch,
  Flame,
  Terminal,
  Workflow,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skillsData } from '@/data/skills';
import { SkillCategory } from '@/types/portfolio';

const CATEGORIES: ('All' | SkillCategory)[] = [
  'All',
  'Languages & Core',
  'Web & Frameworks',
  'Embedded & IoT',
  'Creative & Media',
  'Tools & DevOps'
];

// Icon mapping helper
function renderSkillIcon(iconName: string) {
  const props = { className: 'w-5 h-5 text-[var(--accent-primary)]' };
  switch (iconName) {
    case 'Code2':
      return <Code2 {...props} />;
    case 'FileCode2':
      return <FileCode2 {...props} />;
    case 'FileCode':
      return <FileCode {...props} />;
    case 'Layout':
      return <Layout {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'Atom':
      return <Atom {...props} />;
    case 'Server':
      return <Server {...props} />;
    case 'Palette':
      return <Palette {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'Radio':
      return <Radio {...props} />;
    case 'Gauge':
      return <Gauge {...props} />;
    case 'Film':
      return <Film {...props} />;
    case 'Sliders':
      return <Sliders {...props} />;
    case 'Camera':
      return <Camera {...props} />;
    case 'Volume2':
      return <Volume2 {...props} />;
    case 'GitBranch':
      return <GitBranch {...props} />;
    case 'Flame':
      return <Flame {...props} />;
    case 'Terminal':
      return <Terminal {...props} />;
    case 'Workflow':
      return <Workflow {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategory>('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNICAL MASTERY"
          title="Skills & Engineering Domains"
          subtitle="A comprehensive overview of tools, systems, and creative technologies I utilize to build hardware, software, and cinematic projects."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-glow)]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="card-premium p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--accent-surface)] border border-[var(--accent-primary)]/20 transition-transform group-hover:scale-110">
                    {renderSkillIcon(skill.icon)}
                  </div>

                  <span className="badge-pill text-[11px] font-mono">
                    {skill.levelLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                  {skill.name}
                </h3>

                <p className="text-xs font-mono text-[var(--accent-primary)] mb-3">
                  {skill.category}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {skill.tags && skill.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-[var(--border-subtle)]">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
