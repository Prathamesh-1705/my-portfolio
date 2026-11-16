import React from 'react';
import WireframeFilters from './components/WireframeFilters';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import FlipbookContact from './components/FlipbookContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f4] text-[#060504] relative sketch-grid-bg selection:bg-[#ffe500] selection:text-[#060504]">
      {/* SVG Turbulence & Rough Sketch Filter Defs */}
      <WireframeFilters />

      {/* Hand-Drawn Ink Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <FlipbookContact />
      </main>
    </div>
  );
}
