'use client';

import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '@/data/projects';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';

const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Embedded & IoT',
  'Full Stack',
  'Creative Tech',
  'Machine Learning'
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO WORK"
          title="Featured Projects & Systems"
          subtitle="Real-world engineering solutions spanning edge IoT microcontrollers, machine learning models, audio platforms, and modern web architectures."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {PROJECT_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-glow)]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Project Case Study Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
