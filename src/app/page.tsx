import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Experience from '@/components/experience/Experience';
import ForgeJournal from '@/components/forge/ForgeJournal';
import CodingProfiles from '@/components/coding/CodingProfiles';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Primary Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. About & Academic Section */}
        <About />

        {/* 3. Technical Expertise & Skills */}
        <Skills />

        {/* 4. Projects Showcase & Case Studies */}
        <Projects />

        {/* 5. Experience Timeline & Roles */}
        <Experience />

        {/* 6. Dedicated Internship / Forge Learning Journal */}
        <ForgeJournal />

        {/* 7. Coding & Problem Solving Profile */}
        <CodingProfiles />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
