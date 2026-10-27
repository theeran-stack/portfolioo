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
  status: 'Completed' | 'In Progress' | 'Upcoming';
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
  tasks?: ForgeActivityTask[];
  repoLink?: string;
}

export interface ForgeActivityTask {
  taskNumber: number;
  taskId: string;
  title: string;
  category: string;
  shortDescription: string;
  thumbnailUrl?: string;
  technologies: string[];
  overview: {
    objective: string;
    problemGoal: string;
    summary: string;
    description: string;
  };
  concepts: {
    title: string;
    explanation: string;
    points: string[];
  };
  systemDesign: {
    workflow: string;
    steps: { step: string; description: string }[];
  };
  hardwareSoftware: {
    hardware: string[];
    software: string[];
    protocols: string[];
  };
  wiringSetup: {
    description: string;
    pinConnections: { component: string; pin: string; esp32Pin: string; note: string }[];
  };
  implementation: {
    filename: string;
    language: string;
    code: string;
    keyFunctions: { name: string; purpose: string }[];
    repositoryUrl: string;
  };
  configuration: {
    title: string;
    steps: string[];
  };
  evidence: {
    images?: { url: string; caption: string; type: 'image' | 'video' }[];
    videoUrl?: string;
    videoCaption?: string;
    videoOrientation?: 'landscape' | 'portrait';
    terminalLogs?: string;
    placeholderNotice?: string;
  };
  challengesFixes: {
    problem: string;
    cause: string;
    investigation: string;
    fix: string;
    outcome: string;
  }[];
  reflection: string;
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

