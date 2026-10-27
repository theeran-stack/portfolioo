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
  Layers,
  Image as ImageIcon,
  ExternalLink,
  BookOpen,
  Cpu,
  Cloud,
  Globe,
  Radio,
  Server,
  Zap
} from 'lucide-react';
import Lightbox from '@/components/ui/Lightbox';
import { ForgeWeekRecord } from '@/types/portfolio';

interface WeekDetailClientProps {
  week: ForgeWeekRecord;
}

export default function WeekDetailClient({ week }: WeekDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  const prevWeekNumber = week.weekNumber > 1 ? week.weekNumber - 1 : null;
  const nextWeekNumber = week.weekNumber < 20 ? week.weekNumber + 1 : null;

  const isWeek7 = week.weekNumber === 7;
  const weekBadgeText = isWeek7
    ? 'PROTOSEM · WEEK 07'
    : `WEEK ${week.weekNumber < 10 ? `0${week.weekNumber}` : week.weekNumber}`;

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/forge-journal"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Forge Journal / Internship</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="badge-pill font-mono text-xs font-bold tracking-wider">
              {weekBadgeText}
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                week.status === 'Completed'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : week.status === 'In Progress'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
              }`}
            >
              {week.status}
            </span>
          </div>
        </div>

        {/* Hero Card */}
        <div className="card-premium p-6 sm:p-10 mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-semibold uppercase">
            <span>{week.category}</span>
            <span>•</span>
            <span>{week.dateRange}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-heading leading-tight">
            {week.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {week.subtitle}
          </p>
        </div>

        {/* Executive Summary / Overview Description */}
        <div className="card-premium p-6 sm:p-8 mb-10">
          <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Weekly Overview & Reflection</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
            {week.summary}
          </p>
        </div>

        {/* Five Activity Cards Section (Week 07 specific or for weeks with tasks) */}
        {week.tasks && week.tasks.length > 0 && (
          <section className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
                  HANDS-ON LABORATORY SPRINT
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading mt-1">
                  Five Activity Tasks
                </h2>
              </div>
              <span className="badge-pill font-mono text-xs font-semibold">
                {week.tasks.length} Detailed Technical Modules
              </span>
            </div>

            {/* Summary of the five activities */}
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] mb-6 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)] font-semibold">Activity Summary: </strong>
              During this sprint, five dedicated IoT assignments were completed sequentially—spanning from bare-metal local ESP32 HTTP web servers (Task 1) and global MQTT cloud broker integration via Adafruit IO (Task 2), to event-driven automated workflows with IFTTT (Task 3), real-time environmental telemetry streaming using Firebase and DHT11/LDR sensors (Task 4), and historical telemetry logging with automated lighting and CSV data export (Task 5).
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {week.tasks.map((task) => (
                <article
                  key={task.taskId}
                  className="card-premium p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-primary)]/50"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-pill font-mono text-[11px] font-bold">
                        ACTIVITY 0{task.taskNumber}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--accent-primary)] font-medium text-right max-w-[140px] truncate">
                        {task.category}
                      </span>
                    </div>

                    {/* Thumbnail Preview */}
                    {task.thumbnailUrl && (
                      <Link
                        href={`/forge-journal/week-${week.weekNumber}/${task.taskId}`}
                        className="block relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                      >
                        <Image
                          src={task.thumbnailUrl}
                          alt={task.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 350px"
                        />
                      </Link>
                    )}

                    {/* Title */}
                    <Link href={`/forge-journal/week-${week.weekNumber}/${task.taskId}`}>
                      <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-2 leading-snug">
                        {task.title}
                      </h3>
                    </Link>

                    {/* Short Description */}
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                      {task.shortDescription}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {task.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {task.technologies.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)]">
                          +{task.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <Link
                      href={`/forge-journal/week-${week.weekNumber}/${task.taskId}`}
                      className="btn-primary text-xs py-2.5 px-4 w-full flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[var(--accent-primary)]/20 transition-all font-semibold"
                    >
                      <span>View More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Technologies & Components Overview (Week 07) */}
        {isWeek7 && (
          <div className="card-premium p-6 sm:p-8 mb-10">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Technologies & Hardware Components Overview</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-mono font-bold text-xs">
                  <Radio className="w-4 h-4" />
                  <span>HARDWARE & SENSORS</span>
                </div>
                <ul className="space-y-1.5 text-[var(--text-secondary)]">
                  <li>• ESP32 DevKit V1 (Dual-Core Xtensa)</li>
                  <li>• DHT11 Temp & Humidity Sensor</li>
                  <li>• Light Dependent Resistor (LDR)</li>
                  <li>• 5mm High-Efficiency LEDs</li>
                  <li>• 220Ω & 10kΩ Precision Resistors</li>
                  <li>• Solderless Breadboard & Jumpers</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs">
                  <Cloud className="w-4 h-4" />
                  <span>CLOUD & WEB PLATFORMS</span>
                </div>
                <ul className="space-y-1.5 text-[var(--text-secondary)]">
                  <li>• Adafruit IO MQTT Broker & Feeds</li>
                  <li>• IFTTT Automation Webhooks</li>
                  <li>• Firebase Realtime Database (RTDB)</li>
                  <li>• Firebase Authentication Service</li>
                  <li>• Embedded Web Server (HTTP Port 80)</li>
                  <li>• Arduino IDE 2.3+ ESP32 Core</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs">
                  <Globe className="w-4 h-4" />
                  <span>PROTOCOLS & STANDARDS</span>
                </div>
                <ul className="space-y-1.5 text-[var(--text-secondary)]">
                  <li>• MQTT (Port 1883 Pub/Sub)</li>
                  <li>• HTTP / REST GET & POST Verbs</li>
                  <li>• IEEE 802.11 b/g/n Wi-Fi 2.4GHz</li>
                  <li>• JSON Telemetry Serialization</li>
                  <li>• HTML5 / CSS3 Responsive DOM</li>
                  <li>• CSV Data Logging & Export</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Objectives & Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="card-premium p-6 sm:p-8">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Key Learning Outcomes</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              {week.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--accent-primary)] mt-1">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-premium p-6 sm:p-8">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span>Key Activities & Deliverables</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              {week.activitiesCompleted.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges & Solutions */}
        {week.challengesFixesList && week.challengesFixesList.length > 0 && (
          <div className="card-premium p-6 sm:p-8 mb-10">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Hardware & Firmware Challenges Solved</span>
            </h3>
            <div className="space-y-4">
              {week.challengesFixesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
                >
                  <p className="text-xs sm:text-sm font-semibold text-rose-400 mb-1">
                    <span className="font-mono">CHALLENGE {idx + 1}: </span>
                    {item.challenge}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 pl-3 border-l-2 border-[var(--accent-primary)]">
                    <strong className="text-[var(--text-primary)]">FIX APPLIED: </strong>
                    {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reflection & Key Takeaways */}
        <div className="card-premium p-6 sm:p-8 mb-10 border-l-4 border-[var(--accent-primary)]">
          <h4 className="text-xs font-mono uppercase text-[var(--accent-primary)] tracking-wider font-bold mb-2">
            Weekly Reflection
          </h4>
          <p className="text-base text-[var(--text-primary)] italic leading-relaxed whitespace-pre-line">
            &ldquo;{week.reflection}&rdquo;
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-3 font-mono">
            Key Takeaway: {week.keyLearnings}
          </p>
        </div>

        {/* Photo Evidence & Hardware Gallery */}
        {week.galleryImages && week.galleryImages.length > 0 && (
          <div className="card-premium p-6 sm:p-8 mb-10">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Prototyping Evidence & Hardware Setup (Click to Zoom)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {week.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedImage({ url: img.url, caption: img.caption })
                  }
                  className="group cursor-pointer rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all shadow-md"
                >
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                  <p className="p-3 text-xs text-[var(--text-secondary)] font-mono leading-relaxed line-clamp-2">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Team Credits */}
        <div className="card-premium p-6 sm:p-8 mb-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-2 font-semibold">
              Skills Developed in This Sprint:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {week.skillsGained.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {week.teamCredits && (
            <div className="text-left sm:text-right">
              <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-1 font-semibold">
                Credits:
              </p>
              <p className="text-xs text-[var(--text-primary)] font-medium">
                {week.teamCredits.map((c) => `${c.role}: ${c.name}`).join(' | ')}
              </p>
            </div>
          )}
        </div>

        {/* Prev / Next / Return Navigation Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
          {prevWeekNumber ? (
            <Link
              href={`/forge-journal/week-${prevWeekNumber}`}
              className="btn-secondary text-xs py-2.5 px-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Week {prevWeekNumber < 10 ? `0${prevWeekNumber}` : prevWeekNumber}</span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href="/forge-journal"
            className="btn-primary text-xs py-2.5 px-6 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <BookOpen className="w-4 h-4" />
            <span>Return to Internship Dashboard</span>
          </Link>

          {nextWeekNumber ? (
            <Link
              href={`/forge-journal/week-${nextWeekNumber}`}
              className="btn-secondary text-xs py-2.5 px-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Week {nextWeekNumber < 10 ? `0${nextWeekNumber}` : nextWeekNumber}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
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
