import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TaskDetailClient from './TaskDetailClient';
import { forgeWeeks } from '@/data/forge';

interface PageProps {
  params: Promise<{ week: string; task: string }>;
}

export function generateStaticParams() {
  const params: { week: string; task: string }[] = [];

  forgeWeeks.forEach((week) => {
    if (week.tasks && week.tasks.length > 0) {
      week.tasks.forEach((task) => {
        params.push({
          week: `week-${week.weekNumber}`,
          task: task.taskId,
        });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { week, task } = await params;
  const weekNumber = parseInt(week.replace(/\D/g, ''), 10);
  const weekData = forgeWeeks.find(
    (w) => w.weekNumber === weekNumber || w.id === week || w.slug === week
  );
  const taskData = weekData?.tasks?.find(
    (t) => t.taskId === task || `task-${t.taskNumber}` === task
  );

  if (!taskData || !weekData) {
    return {
      title: 'Task Not Found | Forge Journal',
    };
  }

  return {
    title: `${taskData.title} | ProtoSem Week 07 | Theeran P.`,
    description: taskData.shortDescription,
  };
}

export default async function TaskDetailPage({ params }: PageProps) {
  const { week, task } = await params;
  const weekNumber = parseInt(week.replace(/\D/g, ''), 10);
  const weekData = forgeWeeks.find(
    (w) => w.weekNumber === weekNumber || w.id === week || w.slug === week
  );

  if (!weekData || !weekData.tasks) {
    notFound();
  }

  const taskData = weekData.tasks.find(
    (t) => t.taskId === task || `task-${t.taskNumber}` === task
  );

  if (!taskData) {
    notFound();
  }

  const currentTaskIndex = weekData.tasks.findIndex((t) => t.taskId === taskData.taskId);
  const prevTask = currentTaskIndex > 0 ? weekData.tasks[currentTaskIndex - 1] : null;
  const nextTask =
    currentTaskIndex < weekData.tasks.length - 1 ? weekData.tasks[currentTaskIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-28 pb-20">
        <TaskDetailClient
          week={weekData}
          task={taskData}
          prevTask={prevTask}
          nextTask={nextTask}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
