import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WeekDetailClient from './WeekDetailClient';
import { forgeWeeks } from '@/data/forge';

interface PageProps {
  params: Promise<{ week: string }>;
}

export function generateStaticParams() {
  return forgeWeeks.map((week) => ({
    week: `week-${week.weekNumber}`,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { week } = await params;
  const weekNumber = parseInt(week.replace(/\D/g, ''), 10);
  const weekData = forgeWeeks.find(
    (w) => w.weekNumber === weekNumber || w.id === week || w.slug === week
  );

  if (!weekData) {
    return {
      title: 'Week Not Found | Forge Journal',
    };
  }

  return {
    title: `${weekData.title} | Theeran P. Forge Journal`,
    description: weekData.subtitle,
  };
}

export default async function WeekDetailPage({ params }: PageProps) {
  const { week } = await params;
  const weekNumber = parseInt(week.replace(/\D/g, ''), 10);
  const weekData = forgeWeeks.find(
    (w) => w.weekNumber === weekNumber || w.id === week || w.slug === week
  );

  if (!weekData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-28 pb-20">
        <WeekDetailClient week={weekData} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
