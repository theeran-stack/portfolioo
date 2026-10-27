interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  className = ''
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="badge-pill uppercase tracking-widest text-[11px] font-mono">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
