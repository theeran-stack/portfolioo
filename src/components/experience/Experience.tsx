import { Briefcase, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="JOURNEY & ROLES"
          title="Experience & Leadership"
          subtitle="My professional trajectory across computer science, student media leadership, professional video production, and fellowship programs."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border-subtle)] ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  item.isCurrent
                    ? 'bg-[var(--accent-primary)] border-[var(--bg-primary)] ring-4 ring-[var(--accent-glow)]'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)]'
                }`}
              />

              <div className="card-premium p-6 sm:p-8">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="badge-pill font-mono text-[11px]">
                      {item.category}
                    </span>
                    {item.isCurrent && (
                      <span className="badge-pill bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-[11px]">
                        Active Role
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      <span>{item.period}</span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
                  {item.role}
                </h3>

                <p className="text-sm font-semibold text-[var(--accent-primary)] mt-1 mb-4">
                  {item.organization}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[var(--accent-primary)] mt-1">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Milestones */}
                {item.milestones && item.milestones.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                    <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      <span>Key Milestones:</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.milestones.map((m, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills Used */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--border-subtle)]">
                  {item.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-surface)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
