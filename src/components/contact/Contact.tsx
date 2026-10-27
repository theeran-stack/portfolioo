'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  InstagramIcon
} from '../ui/SocialIcons';
import { personalProfile } from '@/data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please add a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      const mailtoUrl = `mailto:${personalProfile.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 900);
  };

  return (
    <section id="contact" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="COLLABORATION & INQUIRIES"
          title="Let's Build Something Memorable"
          subtitle="Open for embedded systems engineering, IoT research, full-stack software collaborations, and cinematography or video production projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Direct Info (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-premium p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Direct Contact Information
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Whether you have an inquiry about the Forge ProtoSem journey, an industrial IoT opportunity, or a creative film production shoot, feel free to reach out directly.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalProfile.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent-surface)] text-[var(--accent-primary)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                      Primary Email
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] truncate transition-colors">
                      {personalProfile.email}
                    </p>
                  </div>
                </a>

                {personalProfile.phone && (
                  <a
                    href={`tel:${personalProfile.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent-surface)] text-[var(--accent-primary)] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                        Phone / WhatsApp
                      </p>
                      <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {personalProfile.phone}
                      </p>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent-surface)] text-[var(--accent-primary)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {personalProfile.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider mb-3 font-semibold">
                  Professional Channels:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalProfile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalProfile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalProfile.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                  >
                    <LeetcodeIcon size={14} />
                    <span>LeetCode</span>
                  </a>
                  {personalProfile.socials.instagram && (
                    <a
                      href={personalProfile.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                    >
                      <InstagramIcon size={14} />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Col 7) */}
          <div className="lg:col-span-7 card-premium p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-heading">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
              Fill out the message fields below. Upon submission, it prepares a direct email dispatch to Theeran P.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-300">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
                  Thank you for reaching out. Your default email client has been prepared with your message, and Theeran will review it shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary text-xs py-2 px-4 mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-[var(--text-muted)] mb-1.5 font-semibold"
                    >
                      Your Name <span className="text-[var(--accent-primary)]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[var(--border-subtle)] focus:border-[var(--border-hover)]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-[var(--text-muted)] mb-1.5 font-semibold"
                    >
                      Email Address <span className="text-[var(--accent-primary)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[var(--border-subtle)] focus:border-[var(--border-hover)]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-[var(--text-muted)] mb-1.5 font-semibold"
                  >
                    Subject <span className="text-[var(--accent-primary)]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Embedded Telemetry Project / Cinematography Shoot"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-[var(--border-subtle)] focus:border-[var(--border-hover)]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-[var(--text-muted)] mb-1.5 font-semibold"
                  >
                    Your Message <span className="text-[var(--accent-primary)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-[var(--border-subtle)] focus:border-[var(--border-hover)]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-3 mt-2 cursor-pointer font-semibold"
                >
                  {status === 'submitting' ? (
                    <span>Preparing Dispatch...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
