export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  instagram?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  year: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  shortBio: string;
  fullBio: string[];
  education: Education;
  location: string;
  phone?: string;
  email: string;
  socials: SocialLinks;
  careerGoals: string;
  workingPhilosophy: string;
  softSkills: string[];
  stats: {
    projectsCompleted: number;
    forgeWeeks: number;
    eventsCovered: number;
    gpa: string;
  };
}

export type SkillCategory =
  | 'Languages & Core'
  | 'Web & Frameworks'
  | 'Embedded & IoT'
  | 'Creative & Media'
  | 'Tools & DevOps';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  levelLabel: 'Core' | 'Proficient' | 'Advanced' | 'Expert';
  icon: string;
  description: string;
  tags?: string[];
  isFeatured?: boolean;
}

export type ProjectCategory =
  | 'All'
  | 'Embedded & IoT'
  | 'Full Stack'
  | 'Creative Tech'
  | 'Machine Learning';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  status: 'Completed' | 'In Progress' | 'Maintained';
  date: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featuredImage: string;
  galleryImages?: string[];
  problemStatement: string;
  solutionArchitecture: string;
  keyFeatures: string[];
  challenges: { challenge: string; solution: string }[];
  lessonsLearned: string[];
  outcomes?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: 'Education' | 'Cinematography' | 'Video Production' | 'Leadership';
  period: string;
  location: string;
  description: string[];
  skillsUsed: string[];
  milestones: string[];
  isCurrent?: boolean;
}

export interface ForgeMedia {
  title: string;
  url: string;
  type: 'image' | 'video';
  caption?: string;
}

export interface ForgeChallenge {
  challenge: string;
  fix: string;
}

export interface ForgeTeamCredit {
  role: string;
  name: string;
}

export interface ForgeWeekEpisode {
  weekNumber: number;
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  dateRange: string;
  category: string;
  status: 'Completed' | 'In Progress';
  summary: string;
  objectives: string[];
  activitiesCompleted: string[];
  challengesFaced?: string;
  challengesFixesList?: ForgeChallenge[];
  skillsGained: string[];
  conceptsLearned?: string[];
  keyLearnings: string;
  reflection: string;
  highlights: string[];
  media?: ForgeMedia[];
  galleryImages?: { url: string; caption: string; type: 'image' | 'video' }[];
  tags: string[];
  teamCredits?: ForgeTeamCredit[];
  repoLink?: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  bio: string;
  solvedCount: number;
  streak: number;
  topics: { name: string; count: number }[];
  badges: string[];
}

export type ForgeWeekRecord = ForgeWeekEpisode;

