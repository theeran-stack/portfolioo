# Theeran P. — Premium Digital Portfolio & Systems Ecosystem

A production-ready personal digital portfolio and engineering journal built for **Theeran P.** (Computer Science Engineering student at Kumaraguru College of Technology, ProtoSem Fellow at Forge Innovation & Ventures, Lead Cinematographer, and IoT Builder).

---

## 🌟 Key Architecture & Highlights

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across all content data models)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with a curated editorial design system (Matte Black, Deep Charcoal, Ember Orange accent `#ff5722`)
- **Animations & Canvas**: Custom GPU-accelerated HTML5 Particle Canvas + [Framer Motion](https://www.framer.com/motion/) micro-interactions
- **Theme Architecture**: Persistent Dark and Light theme toggle stored in `localStorage` with zero-flash SSR hydration
- **Dedicated Internship Journal**: **"Season One: Forge Journey"** documenting 20 weeks of industrial prototyping, FreeRTOS multi-tasking, SPI/I2C sensor telemetry, and IoT cloud pipelines
- **Interactive Modals**: Full 13-point case study dialogs for projects, weekly episode journals, and image lightbox

---

## 📁 Repository Structure

```text
├── public/
│   ├── img/                   # Documented Forge Journey weekly photos (weeks 1, 2, 3, 7)
│   ├── profile.jpg            # High-res profile portrait
│   └── profile.png            # Transparent / optimized profile avatar
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens, theme variables, custom scrollbars
│   │   ├── layout.tsx         # Google Fonts (Space Grotesk & Inter), SEO metadata, theme bootstrap
│   │   └── page.tsx           # Page assembler composing all primary sections
│   ├── components/
│   │   ├── about/             # About narrative, KCT education credentials, soft skills
│   │   ├── coding/            # LeetCode problem solving & GitHub repository metrics
│   │   ├── contact/           # Direct contact details, validated form & mailto fallback
│   │   ├── experience/        # Experience timeline (Education, Nigal Cinematography, Elaris)
│   │   ├── forge/             # Season One: Forge Journey, EpisodeCard, EpisodeModal
│   │   ├── hero/              # Hero headline, ParticleCanvas, status pill, quick metrics
│   │   ├── layout/            # Navbar with scroll-spy, Footer, ThemeToggle
│   │   ├── projects/          # Project filtering, ProjectCard, ProjectModal case study
│   │   └── ui/                # Lightbox modal, SectionHeading, SocialIcons
│   ├── data/                  # Strongly-typed content files for zero-touch UI updates
│   │   ├── coding.ts          # LeetCode and GitHub stats & topics
│   │   ├── experience.ts      # Roles, organizations, verified dates, and milestones
│   │   ├── forge.ts           # 20 weekly Forge ProtoSem records, objectives, and gallery
│   │   ├── profile.ts         # Personal details, education, philosophy, and social links
│   │   ├── projects.ts        # 6 verified engineering projects with full case studies
│   │   └── skills.ts          # Categorized technical proficiencies & tags
│   └── types/
│       └── portfolio.ts       # TypeScript interfaces for all data structures
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js (v18.17+ or v20+)
- npm, pnpm, or yarn

### 1. Installation

```bash
# Clone or navigate to the directory
cd "Final portfolio"

# Install dependencies
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live website with Hot Module Replacement (HMR).

### 3. Production Build & Verification

```bash
# Compile and test TypeScript & production bundle
npm run build

# Run the local production server
npm run start
```

---

## 🛠️ Content Management: How to Update Content

The portfolio uses a **Data-Driven Architecture**. To add or edit content, you do **not** need to modify React components or UI layout code:

### 1. Adding a New Project
Open [`src/data/projects.ts`](file:///c:/Users/Theeran/Documents/Final%20portfolio/src/data/projects.ts) and add an object conforming to `ProjectItem`:
```ts
{
  id: 'my-new-project',
  title: 'Project Title',
  category: 'Embedded & IoT', // or 'Full Stack', 'Machine Learning', 'Creative Tech'
  technologies: ['ESP32', 'FreeRTOS', 'C++'],
  problemStatement: '...',
  solutionArchitecture: '...',
  // ...
}
```
The project card and interactive case study modal will render automatically with instant category filter support.

### 2. Adding a New Forge Episode
Open [`src/data/forge.ts`](file:///c:/Users/Theeran/Documents/Final%20portfolio/src/data/forge.ts) and update or add the week entry in `forgeEpisodes`. Include images in `public/img/week-X/` to display them in the responsive gallery and lightbox.

### 3. Updating Skills or Experience
- Edit [`src/data/skills.ts`](file:///c:/Users/Theeran/Documents/Final%20portfolio/src/data/skills.ts) to adjust proficiencies, tags, or categories.
- Edit [`src/data/experience.ts`](file:///c:/Users/Theeran/Documents/Final%20portfolio/src/data/experience.ts) to append new roles or milestones.

---

## 📦 Deployment Workflow (GitHub + Vercel)

### Step 1: Initialize / Commit Git Repository
```bash
git add .
git commit -m "feat: complete production portfolio for Theeran P."
```

### Step 2: Push to GitHub
1. Create a new repository on your GitHub account (e.g. `theeran-stack/portfolio` or `portfolio-2026`).
2. Link the remote and push:
```bash
git remote add origin https://github.com/theeran-stack/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select your `portfolio` repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Root Directory: `./`
5. Click **"Deploy"**.

Any subsequent push to your `main` branch will automatically trigger an optimized Vercel edge deployment.

---

## ⚖️ License & Attribution

Designed and engineered for **Theeran P.** All rights reserved.
