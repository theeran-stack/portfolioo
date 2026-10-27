import { CodingProfile } from '@/types/portfolio';

export const leetcodeProfile: CodingProfile = {
  platform: 'LeetCode',
  username: 'theeran-stack',
  profileUrl: 'https://leetcode.com/u/theeran-stack',
  bio: 'Computer Science student solving algorithmic problems with clean, efficient C++ and modern paradigms.',
  solvedCount: 165,
  streak: 28,
  topics: [
    { name: 'Arrays & Hashing', count: 48 },
    { name: 'Two Pointers & Sliding Window', count: 26 },
    { name: 'Linked Lists', count: 18 },
    { name: 'Binary Trees & BSTs', count: 24 },
    { name: 'Stack & Queues', count: 20 },
    { name: 'Dynamic Programming Basics', count: 15 },
    { name: 'Graph Traversal (BFS/DFS)', count: 14 }
  ],
  badges: ['50 Days Badge 2025', 'C++ Specialist', 'Problem Solving Bronze']
};

export const githubProfile = {
  platform: 'GitHub',
  username: 'theeran-stack',
  profileUrl: 'https://github.com/theeran-stack',
  stats: {
    publicRepos: 18,
    totalCommits: 340,
    languages: ['C++', 'Python', 'TypeScript', 'HTML/CSS', 'C']
  }
};
