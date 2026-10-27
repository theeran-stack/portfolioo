import {
  ExternalLink,
  Flame,
  Award,
  Terminal,
  Cpu
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { GithubIcon, LeetcodeIcon } from '../ui/SocialIcons';
import { leetcodeProfile, githubProfile } from '@/data/coding';

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-20 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PROBLEM SOLVING & REPOSITORIES"
          title="Coding & Algorithmic Practice"
          subtitle="Continuous practice in algorithmic thinking, data structures, and production repository engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LeetCode Profile Card (Col 7) */}
          <div className="lg:col-span-7 card-premium p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                  <LeetcodeIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    LeetCode Profile
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent-primary)]">
                    @{leetcodeProfile.username}
                  </p>
                </div>
              </div>

              <a
                href={leetcodeProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                <span>Visit LeetCode</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {leetcodeProfile.bio}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                <p className="text-2xl font-bold font-heading text-[var(--text-primary)]">
                  {leetcodeProfile.solvedCount}+
                </p>
                <p className="text-[11px] font-mono text-[var(--text-muted)]">
                  Problems Solved
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                <p className="text-2xl font-bold font-heading text-amber-500 flex items-center justify-center gap-1">
                  <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
                  <span>{leetcodeProfile.streak}d</span>
                </p>
                <p className="text-[11px] font-mono text-[var(--text-muted)]">
                  Active Streak
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold font-heading text-[var(--accent-primary)]">
                  C++
                </p>
                <p className="text-[11px] font-mono text-[var(--text-muted)]">
                  Primary Language
                </p>
              </div>
            </div>

            {/* Topic Breakdown */}
            <div>
              <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-3 font-semibold">
                Topic Breakdown & Problem Distribution:
              </p>
              <div className="space-y-2.5">
                {leetcodeProfile.topics.map((topic) => (
                  <div key={topic.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[var(--text-secondary)] font-medium">
                        {topic.name}
                      </span>
                      <span className="font-mono text-[var(--text-muted)]">
                        {topic.count} solved
                      </span>
                    </div>
                    <div className="w-full bg-[var(--bg-elevated)] h-1.5 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                      <div
                        className="bg-[var(--accent-primary)] h-full rounded-full"
                        style={{ width: `${Math.min((topic.count / 50) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-[var(--text-muted)] mr-2 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Earned Badges:</span>
              </span>
              {leetcodeProfile.badges.map((badge) => (
                <span
                  key={badge}
                  className="badge-pill text-[11px] font-mono bg-amber-500/10 text-amber-400 border-amber-500/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Repository Activity Card (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-premium p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)]">
                    <GithubIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      GitHub Repositories
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent-primary)]">
                      @{githubProfile.username}
                    </p>
                  </div>
                </div>

                <a
                  href={githubProfile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                Active open-source work, microcontroller firmware repositories, Python machine learning pipelines, and web applications.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                  <p className="text-xl font-bold font-heading text-[var(--text-primary)]">
                    {githubProfile.stats.publicRepos}
                  </p>
                  <p className="text-[10px] font-mono text-[var(--text-muted)]">
                    Public Repositories
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                  <p className="text-xl font-bold font-heading text-[var(--accent-primary)]">
                    {githubProfile.stats.totalCommits}+
                  </p>
                  <p className="text-[10px] font-mono text-[var(--text-muted)]">
                    Commits Logged
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-2 font-semibold">
                  Primary Code Languages:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {githubProfile.stats.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href={githubProfile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-xs py-2.5 text-center"
                >
                  <span>Explore GitHub Profile & Commits</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
