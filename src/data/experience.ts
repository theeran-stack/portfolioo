import { ExperienceItem } from '@/types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-kct-cse',
    role: 'Computer Science & Engineering Undergraduate',
    organization: 'Kumaraguru College of Technology (KCT)',
    category: 'Education',
    period: '2024 — 2028 (III Year)',
    location: 'Coimbatore, Tamil Nadu, India',
    description: [
      'Pursuing Bachelor of Engineering with an 8.00 CGPA, focusing on software engineering principles, system architecture, data structures, and algorithms.',
      'Selected as a ProtoSem Hardware & Embedded Systems Fellow at Forge Innovation & Ventures, engineering FreeRTOS telemetry systems and IoT protocols.',
      'Actively participate in departmental hackathons, systems programming coursework, and collaborative engineering projects.'
    ],
    skillsUsed: ['C++', 'Data Structures', 'Python', 'TypeScript', 'Embedded Systems', 'Computer Networks'],
    milestones: [
      'Maintained 8.00 CGPA across academic terms',
      'Selected for prestigious Forge ProtoSem fellowship program',
      'Completed Departmental Certification in Full-Stack Web Development'
    ],
    isCurrent: true
  },
  {
    id: 'exp-nigal-cinematographer',
    role: 'Lead Cinematographer & Camera Director',
    organization: 'Nigal Club & Independent Productions',
    category: 'Cinematography',
    period: '2023 — Present (3+ Years)',
    location: 'Coimbatore & Regional',
    description: [
      'Direct visual framing, camera motion, lighting geometry, and multi-cam setups for over 50+ institutional, cultural, and flagship college productions.',
      'Operate cinema cameras, 3-axis motorized gimbals, follow-focus gear, and wireless audio monitoring systems in high-pressure live environments.',
      'Lead camera crew coordination during major campus inaugurations, national symposiums, and documentary shoots.'
    ],
    skillsUsed: ['Cinematography', 'Gimbal Rigging', 'Lighting Direction', 'Framing & Composition', 'Multi-Cam Coverage'],
    milestones: [
      'Directed video coverage across 50+ flagship university events',
      'Nominated for regional student film showcase with horror/thriller short film "12:12"',
      'Engineered custom Arduino camera gimbal telemetry logger for real-time motion analytics'
    ],
    isCurrent: true
  },
  {
    id: 'exp-elaris-editor',
    role: 'Professional Video Editor & Colorist',
    organization: 'Elaris Club & Freelance Projects',
    category: 'Video Production',
    period: '2024 — Present (2+ Years)',
    location: 'Coimbatore & Remote',
    description: [
      'Edit dynamic after-movies, promotional reels, narrative short films, and recap packages using Adobe Premiere Pro and DaVinci Resolve.',
      'Perform color grading, audio restoration, sound design, Foley synchronization, and motion graphics with Adobe After Effects.',
      'Successfully managed and delivered over 30+ high-engagement social media reels and 3 live real-time editing sessions with same-day turnaround.'
    ],
    skillsUsed: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Color Grading', 'Sound Design', 'After Effects'],
    milestones: [
      'Delivered 30+ commercial and institutional video projects',
      'Executed 3 high-intensity live editing sessions with immediate same-day broadcast releases'
    ],
    isCurrent: true
  },
  {
    id: 'exp-leadership-clubs',
    role: 'Media Core & Technical Team Lead',
    organization: 'Nigal Club & Elaris Media @ KCT',
    category: 'Leadership',
    period: '2024 — Present',
    location: 'Coimbatore, India',
    description: [
      'Supervise media production pipelines from pre-production script breakdown to final multi-platform delivery.',
      'Mentor junior engineering students in camera operation, lighting principles, and timeline editing workflows.',
      'Collaborate with university leadership, guest dignitaries, and department heads to ensure broadcast-quality coverage.'
    ],
    skillsUsed: ['Team Leadership', 'Production Management', 'Mentorship', 'Cross-Team Communication'],
    milestones: [
      'Built a standardized digital asset archive and proxy editing workflow for the club media library',
      'Mentored 15+ junior students across cinematography and post-production techniques'
    ],
    isCurrent: true
  }
];
