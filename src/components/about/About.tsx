import {
  GraduationCap,
  Sparkles,
  Compass,
  Lightbulb,
  CheckCircle2,
  Award,
  Layers
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { personalProfile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="IDENTITY & PHILOSOPHY"
          title="Engineering Rigor Meets Visual Storytelling"
          subtitle="I believe technology becomes truly meaningful when precision systems engineering and emotional creative resonance unite."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative & Philosophy (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-premium p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>The Mission & Approach</span>
              </h3>

              <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
                {personalProfile.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Working Philosophy Quote */}
              <div className="mt-6 p-4 rounded-xl bg-[var(--bg-elevated)] border-l-4 border-[var(--accent-primary)]">
                <p className="text-sm italic font-serif text-[var(--text-primary)] leading-relaxed">
                  &ldquo;{personalProfile.workingPhilosophy}&rdquo;
                </p>
                <p className="text-xs font-mono text-[var(--accent-primary)] mt-2 font-semibold">
                  — Theeran P.
                </p>
              </div>
            </div>

            {/* Soft Skills & Core Strengths */}
            <div className="card-premium p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Professional Strengths</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalProfile.softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Academic Credentials (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="card-premium p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-[var(--text-primary)]">
                <GraduationCap className="w-24 h-24" />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-2 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Verified Education</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {personalProfile.education.degree}
              </h3>

              <p className="text-sm font-medium text-[var(--text-secondary)] mt-1">
                {personalProfile.education.institution}
              </p>

              <div className="flex flex-wrap gap-2 my-4">
                <span className="badge-pill font-mono text-xs">
                  {personalProfile.education.period}
                </span>
                <span className="badge-neutral font-mono text-xs">
                  {personalProfile.education.year}
                </span>
                <span className="badge-pill bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-xs font-bold">
                  CGPA: {personalProfile.education.cgpa}
                </span>
              </div>

              <p className="text-xs text-[var(--text-muted)] font-mono mb-4">
                📍 {personalProfile.education.location}
              </p>

              <div className="border-t border-[var(--border-subtle)] pt-4 mt-4">
                <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-2 font-semibold">
                  Key Highlights:
                </p>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  {personalProfile.education.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-3 font-semibold">
                <Award className="w-4 h-4" />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    UiPath Academy — Automation Starter Course
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    Robotic Process Automation & Workflow Orchestration
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Cisco Packet Tracer — Networking Essentials
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    Cisco Networking Academy • TCP/IP & Subnetting Topologies
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Full Stack Web Architecture Coursework
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    KCT Department of Computer Science & Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
