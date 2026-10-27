'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Compass,
  Cpu,
  Layers,
  Code2,
  Terminal,
  Settings,
  Image as ImageIcon,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
  Play,
  Radio,
  Share2,
  Server,
  Zap,
  Globe,
  Sliders
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import Lightbox from '@/components/ui/Lightbox';
import { ForgeWeekRecord, ForgeActivityTask } from '@/types/portfolio';

interface TaskDetailClientProps {
  week: ForgeWeekRecord;
  task: ForgeActivityTask;
  prevTask: ForgeActivityTask | null;
  nextTask: ForgeActivityTask | null;
}

export default function TaskDetailClient({
  week,
  task,
  prevTask,
  nextTask
}: TaskDetailClientProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(task.implementation.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopiedCode(false);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 0. Breadcrumb Navigation & Back to Week 07 */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
            <Link
              href="/"
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/forge-journal"
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              Forge Journal
            </Link>
            <span>/</span>
            <Link
              href={`/forge-journal/week-${week.weekNumber}`}
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              Week 0{week.weekNumber}
            </Link>
            <span>/</span>
            <span className="text-[var(--accent-primary)] font-semibold">
              Task {task.taskNumber}
            </span>
          </nav>

          <Link
            href={`/forge-journal/week-${week.weekNumber}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Week 0{week.weekNumber} Overview</span>
          </Link>
        </div>

        {/* Task Header Hero */}
        <header className="card-premium p-6 sm:p-10 mb-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="badge-pill font-mono text-xs font-bold tracking-wider">
                ACTIVITY 0{task.taskNumber}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-surface)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/20">
                {task.category}
              </span>
            </div>

            <span className="text-xs font-mono text-[var(--text-muted)]">
              ProtoSem · Week 0{week.weekNumber}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] font-heading leading-tight">
            {task.title}
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {task.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {task.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* 1. OVERVIEW */}
        <section id="overview" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <BookOpen className="w-4 h-4" />
            <span>1. Activity Overview</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent-primary)] uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Primary Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {task.overview.objective}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>Problem & Learning Goal</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {task.overview.problemGoal}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Executive Summary
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {task.overview.summary}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-[var(--text-primary)]">
              Activity Description & Context
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
              {task.overview.description}
            </p>
          </div>
        </section>

        {/* 2. CONCEPTS */}
        <section id="concepts" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <Lightbulb className="w-4 h-4" />
            <span>2. Core Technical Concepts</span>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-heading">
              {task.concepts.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {task.concepts.explanation}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
              Technical Principles & Key Takeaways:
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {task.concepts.points.map((pt, idx) => {
                const [conceptTitle, ...rest] = pt.split(':');
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[var(--accent-surface)] text-[var(--accent-primary)] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {rest.length > 0 ? (
                        <>
                          <strong className="text-[var(--text-primary)] font-semibold">
                            {conceptTitle}:
                          </strong>{' '}
                          {rest.join(':')}
                        </>
                      ) : (
                        pt
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. SYSTEM DESIGN & ARCHITECTURE */}
        <section id="system-design" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <Layers className="w-4 h-4" />
            <span>3. System Design & Communication Flow</span>
          </div>

          {/* Responsive Workflow Diagram Banner */}
          <div className="p-4 sm:p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 font-semibold">
              End-to-End Architectural Flow:
            </p>
            <div className="text-xs sm:text-sm font-mono text-[var(--accent-primary)] font-semibold p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--accent-primary)]/20 overflow-x-auto whitespace-pre-wrap sm:whitespace-normal">
              {task.systemDesign.workflow}
            </div>
          </div>

          {/* Step-by-Step Architecture Pipeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
              Step-by-Step Message Processing:
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {task.systemDesign.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] font-mono">
                      {st.step}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HARDWARE & SOFTWARE STACK */}
        <section id="hardware-software" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <Cpu className="w-4 h-4" />
            <span>4. Hardware & Software Requirements</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hardware */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent-primary)] uppercase">
                <Radio className="w-4 h-4" />
                <span>Hardware Components</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                {task.hardwareSoftware.hardware.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--accent-primary)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase">
                <Code2 className="w-4 h-4" />
                <span>Software & Platforms</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                {task.hardwareSoftware.software.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Protocols */}
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <Globe className="w-4 h-4" />
                <span>Protocols & Network</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                {task.hardwareSoftware.protocols.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. WIRING / SETUP */}
        <section id="wiring-setup" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <Radio className="w-4 h-4" />
            <span>5. Wiring & Hardware Setup</span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {task.wiringSetup.description}
          </p>

          <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono uppercase border-b border-[var(--border-subtle)]">
                <tr>
                  <th className="py-3 px-4">Component</th>
                  <th className="py-3 px-4">Device Pin</th>
                  <th className="py-3 px-4">ESP32 Pin / Destination</th>
                  <th className="py-3 px-4">Engineering Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                {task.wiringSetup.pinConnections.map((conn, idx) => (
                  <tr key={idx} className="hover:bg-[var(--bg-surface)]/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">
                      {conn.component}
                    </td>
                    <td className="py-3 px-4 font-mono text-[var(--accent-primary)]">
                      {conn.pin}
                    </td>
                    <td className="py-3 px-4 font-mono font-semibold text-emerald-400">
                      {conn.esp32Pin}
                    </td>
                    <td className="py-3 px-4 text-[var(--text-muted)]">
                      {conn.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. IMPLEMENTATION & SOURCE CODE */}
        <section id="implementation" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
              <Code2 className="w-4 h-4" />
              <span>6. Firmware Implementation & Source Code</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="badge-neutral font-mono text-[11px]">
                {task.implementation.filename}
              </span>
              <button
                onClick={handleCopyCode}
                className="btn-secondary text-[11px] py-1.5 px-3 inline-flex items-center gap-1.5 cursor-pointer font-mono"
                aria-label="Copy source code"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Syntax Highlighted Code Viewer */}
          <div className="relative rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[#0d1117] text-gray-200">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-gray-300 font-semibold">{task.implementation.filename}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                {task.implementation.language}
              </span>
            </div>

            <pre className="p-4 sm:p-6 overflow-x-auto text-xs font-mono leading-relaxed max-h-[500px]">
              <code>{task.implementation.code}</code>
            </pre>
          </div>

          {/* Key Functions Breakdown Table */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
              Core Function & Callback Breakdown:
            </h4>
            <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono uppercase border-b border-[var(--border-subtle)]">
                  <tr>
                    <th className="py-3 px-4">Routine / Function</th>
                    <th className="py-3 px-4">Architectural Purpose & Behaviour</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {task.implementation.keyFunctions.map((fn, idx) => (
                    <tr key={idx} className="hover:bg-[var(--bg-surface)]/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-[var(--accent-primary)]">
                        {fn.name}
                      </td>
                      <td className="py-3 px-4 leading-relaxed">
                        {fn.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. CONFIGURATION */}
        <section id="configuration" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <Settings className="w-4 h-4" />
            <span>7. Configuration & Platform Setup</span>
          </div>

          <div>
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-heading">
              {task.configuration.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              All credentials (Wi-Fi passwords, private API keys, and database tokens) are represented with secure placeholders.
            </p>
          </div>

          <div className="space-y-3">
            {task.configuration.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-[var(--accent-surface)] text-[var(--accent-primary)] font-mono text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. EVIDENCE & VALIDATION */}
        <section id="evidence" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <ImageIcon className="w-4 h-4" />
            <span>8. Experimental Evidence & Telemetry Logs</span>
          </div>

          {/* Photos */}
          {task.evidence.images && task.evidence.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {task.evidence.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedImage({ url: img.url, caption: img.caption })
                  }
                  className="group cursor-pointer rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all shadow-md"
                >
                  <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>
                  <p className="p-3 text-xs text-[var(--text-secondary)] font-mono leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Video Demonstration Player if available */}
          {task.evidence.videoUrl && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase text-[var(--accent-primary)] font-bold flex items-center gap-2">
                <Play className="w-3.5 h-3.5" />
                <span>Live Demonstration Reel:</span>
              </h4>
              <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-black">
                <video
                  controls
                  className="w-full max-h-[420px] object-cover"
                  preload="metadata"
                >
                  <source src={task.evidence.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {task.evidence.videoCaption && (
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  {task.evidence.videoCaption}
                </p>
              )}
            </div>
          )}

          {/* Terminal / Telemetry Logs */}
          {task.evidence.terminalLogs && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Serial Monitor & Telemetry Traces:</span>
              </h4>
              <div className="p-4 rounded-xl bg-[#090d13] border border-[#1e293b] font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto whitespace-pre">
                {task.evidence.terminalLogs}
              </div>
            </div>
          )}

          {/* Placeholder Notice if any */}
          {task.evidence.placeholderNotice && (
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{task.evidence.placeholderNotice}</span>
            </div>
          )}
        </section>

        {/* 9. CHALLENGES & FIXES */}
        <section id="challenges-fixes" className="card-premium p-6 sm:p-8 mb-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>9. Challenges Encountered & Engineering Solutions</span>
          </div>

          <div className="space-y-4">
            {task.challengesFixes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400">
                  <span className="badge-pill bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px]">
                    ISSUE 0{idx + 1}
                  </span>
                  <span>{item.problem}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-semibold">
                      ROOT CAUSE:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {item.cause}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-semibold">
                      INVESTIGATION:
                    </span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {item.investigation}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-surface)] border-l-2 border-[var(--accent-primary)] text-xs space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[var(--accent-primary)] font-bold">
                    ENGINEERING FIX IMPLEMENTED:
                  </span>
                  <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                    {item.fix}
                  </p>
                  <p className="text-[11px] text-emerald-400 font-mono mt-1">
                    ✓ Outcome: {item.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. REFLECTION */}
        <section id="reflection" className="card-premium p-6 sm:p-8 mb-10 border-l-4 border-[var(--accent-primary)] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
            <BookOpen className="w-4 h-4" />
            <span>10. Personal Engineering Reflection</span>
          </div>

          <p className="text-base text-[var(--text-primary)] italic leading-relaxed whitespace-pre-line">
            &ldquo;{task.reflection}&rdquo;
          </p>

          <p className="text-xs text-[var(--text-muted)] font-mono pt-2">
            Documented as part of ProtoSem Week 07 — IoT & Connectivity: Connecting Hardware to the Web
          </p>
        </section>

        {/* 11. REPOSITORY LINK */}
        <section id="repository" className="card-premium p-6 sm:p-8 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
              <GithubIcon size={16} />
              <span>11. Source Code Repository</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              ProtoSem Firmware & Hardware Schematics Repository
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-xl">
              Inspect the validated source code, Arduino sketches, libraries, and hardware documentation on GitHub.
            </p>
          </div>

          <a
            href={task.implementation.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2 self-start sm:self-center shrink-0"
          >
            <GithubIcon size={16} />
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>

        {/* Previous / Next Activity Navigation Footer */}
        <nav aria-label="Activity Navigation" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
          {prevTask ? (
            <Link
              href={`/forge-journal/week-${week.weekNumber}/${prevTask.taskId}`}
              className="btn-secondary text-xs py-2.5 px-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <span className="block text-[10px] text-[var(--text-muted)] font-mono">PREVIOUS TASK</span>
                <span className="font-semibold">Task 0{prevTask.taskNumber}</span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href={`/forge-journal/week-${week.weekNumber}`}
            className="btn-secondary text-xs py-2.5 px-5 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Week 0{week.weekNumber} Overview</span>
          </Link>

          {nextTask ? (
            <Link
              href={`/forge-journal/week-${week.weekNumber}/${nextTask.taskId}`}
              className="btn-secondary text-xs py-2.5 px-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center text-right group"
            >
              <div className="text-right">
                <span className="block text-[10px] text-[var(--text-muted)] font-mono">NEXT TASK</span>
                <span className="font-semibold">Task 0{nextTask.taskNumber}</span>
              </div>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>
      </div>

      {/* Lightbox for Zoomable Image Evidence */}
      <Lightbox
        isOpen={!!selectedImage}
        imageUrl={selectedImage?.url || ''}
        caption={selectedImage?.caption || ''}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
