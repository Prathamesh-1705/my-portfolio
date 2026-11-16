import React, { useState } from 'react';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import DiagonalReveal from './DiagonalReveal';
import VideoModal from './VideoModal';

export default function ProjectsSection() {
  const [activeVideoProject, setActiveVideoProject] = useState(null);

  const projects = [
    {
      id: 'rag-assistant',
      title: 'RAG Document Assistant',
      category: 'AI / Retrieval',
      year: '2025 – 2026',
      featured: true,
      note: 'Built semantic retrieval over large multi-format document collections with Gemini citations ✦',
      description:
        'Designed and built an end-to-end semantic retrieval-augmented generation pipeline using LangChain and Gemini LLM APIs. Includes an automated ingestion engine for PDF, DOCX, and CSV files, relational session state tracking in SQLite, and backend REST endpoints delivering context-aware citations.',
      video: '/videos/Rag Document Assistant.mp4',
      github: 'https://github.com/Prathamesh-1705/RAG_Document_Assistant',
      tech: ['LangChain', 'RAG', 'Gemini AI', 'SQLite', 'REST APIs', 'Semantic Search'],
    },
    {
      id: 'sql-assistant',
      title: 'AI Data Warehouse SQL Assistant',
      category: 'Data Engineering / AI',
      year: '2026',
      note: 'Engineered ETL pipelines & Gemini natural-language-to-SQL translation ✦',
      description:
        'Engineered scalable ETL pipelines processing 5+ retail datasets into a centralized MySQL database (10,000+ records). Integrated Google Gemini AI to translate complex natural language queries into verified SQL commands, complete with a real-time Streamlit analytical dashboard.',
      video: '/videos/AI_Data_Warehouse_Assistant.mp4',
      github: 'https://github.com/Prathamesh-1705/ai-data-warehouse-assistant',
      tech: ['Python', 'MySQL', 'SQLAlchemy', 'Streamlit', 'Gemini AI', 'ETL Pipelines'],
    },
    {
      id: 'ev-resale',
      title: 'EV Resale Price Prediction',
      category: 'Machine Learning',
      year: '2025',
      note: 'Predictive regression algorithms with feature engineering on EV market dynamics ✦',
      description:
        'Developed end-to-end machine learning regression pipelines for predicting electric vehicle secondary market values. Applied rigorous exploratory data analysis, outlier mitigation, and feature transformation using Scikit-Learn and Pandas.',
      video: '/videos/EV Resale.mp4',
      github: 'https://github.com/Prathamesh-1705/ev_resale_price_prediction',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Predictive Modeling'],
    },
  ];

  return (
    <section id="works" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b-2 border-[#060504] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#060504]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#7d766f]">
              SELECTED WORK — 2024 TO 2026
            </span>
          </div>
          <h2 className="font-caveat font-bold text-5xl sm:text-7xl text-[#060504]">
            Works & Systems
          </h2>
        </div>

        <p className="font-caveat text-2xl text-[#7d766f] flex items-center gap-2">
          <span>a little showcase of my work</span>
          <span className="text-xl">✏️</span>
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {/* Featured Project Showcase */}
        {projects.slice(0, 1).map((proj) => (
          <DiagonalReveal key={proj.id} delay={0.1}>
            <div className="bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-6 sm:p-8 relative group">
              {/* Handwritten Note Callout Banner */}
              <div className="mb-6 bg-[#ffe500] sketch-border px-4 py-2 inline-flex items-center gap-2 shadow-sm rotate-[-0.5deg]">
                <p className="font-caveat font-bold text-xl sm:text-2xl text-[#060504] leading-snug">
                  {proj.note}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Video / Visual Preview Box */}
                <div className="lg:col-span-7 relative">
                  <div 
                    onClick={() => setActiveVideoProject(proj)}
                    className="relative aspect-video bg-[#060504] sketch-border overflow-hidden cursor-pointer group/video sketch-wobble"
                  >
                    {proj.video && (
                      <video
                        src={proj.video}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                      />
                    )}

                    {/* Play Badge Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/video:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-[#ffe500] sketch-border flex items-center justify-center text-[#060504] sketch-shadow-sm group-hover/video:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-[#060504] ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-[#060504]/80 text-white font-mono text-xs px-2.5 py-1 rounded">
                      CLICK TO EXPAND VIDEO
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#7d766f]">
                        {proj.category}
                      </span>
                      <span className="text-xs text-[#7d766f]">•</span>
                      <span className="font-mono text-xs text-[#7d766f]">{proj.year}</span>
                    </div>

                    <h3 className="font-caveat text-4xl sm:text-5xl font-bold text-[#060504] leading-tight">
                      {proj.title}
                    </h3>

                    <p className="font-sans text-sm text-[#474747] mt-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 bg-[#f7f6f4] border border-[#060504] rounded-sm font-semibold"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 pt-4 border-t border-[#060504]/20 flex items-center gap-4">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#ffe500] sketch-border font-caveat text-xl font-bold text-[#060504] sketch-shadow-sm hover:sketch-shadow transition-all no-underline"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>GitHub</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}

                      {proj.video && (
                        <button
                          onClick={() => setActiveVideoProject(proj)}
                          className="flex items-center gap-1.5 font-caveat text-xl font-bold text-[#060504] hover:underline"
                        >
                          <Play className="w-4 h-4" />
                          <span>Watch Demo</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DiagonalReveal>
        ))}

        {/* Project Pairs (2-column layout matching Framer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((proj, idx) => (
            <DiagonalReveal key={proj.id} delay={idx * 0.15}>
              <div className="bg-[#fff9f5] sketch-border-thick sketch-shadow h-full flex flex-col justify-between p-6 sm:p-7 relative group hover:sketch-shadow-lg transition-all duration-300">
                {/* Handwritten Note Callout */}
                <div className="mb-4 bg-[#ffe500]/90 sketch-border px-3 py-1 inline-block self-start rotate-[-1deg]">
                  <p className="font-caveat font-bold text-base text-[#060504]">
                    {proj.note}
                  </p>
                </div>

                {/* Media Preview Box */}
                {proj.video ? (
                  <div
                    onClick={() => setActiveVideoProject(proj)}
                    className="relative aspect-video bg-[#060504] sketch-border overflow-hidden cursor-pointer group/vid mb-5 sketch-wobble"
                  >
                    <video
                      src={proj.video}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-85 group-hover/vid:opacity-100 transition-opacity"
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover/vid:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#ffe500] sketch-border flex items-center justify-center text-[#060504] shadow-sm">
                        <Play className="w-5 h-5 fill-[#060504] ml-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video bg-[#e2e2e2] sketch-border flex flex-col items-center justify-center p-6 mb-5 text-center">
                    <Sparkles className="w-10 h-10 text-[#060504] mb-2" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[#060504] font-bold">
                      Enterprise AI Platform
                    </span>
                  </div>
                )}

                {/* Info Block */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#7d766f]">
                      {proj.category}
                    </span>
                    <span className="text-xs text-[#7d766f]">•</span>
                    <span className="font-mono text-xs text-[#7d766f]">{proj.year}</span>
                  </div>

                  <h3 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504] leading-tight">
                    {proj.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#474747] mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Bottom Tech & Links */}
                <div className="mt-6 pt-4 border-t border-[#060504]/20 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 bg-[#f7f6f4] border border-[#060504] rounded-sm font-semibold"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-caveat text-xl font-bold text-[#060504] hover:underline no-underline"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub Repository</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    {proj.video && (
                      <button
                        onClick={() => setActiveVideoProject(proj)}
                        className="font-caveat text-lg font-bold text-[#060504] underline"
                      >
                        Play Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </DiagonalReveal>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={!!activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
        project={activeVideoProject}
      />
    </section>
  );
}
