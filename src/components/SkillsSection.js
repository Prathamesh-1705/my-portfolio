import React from 'react';
import { Cpu, Code2, Wrench, Database, Zap, CheckSquare } from 'lucide-react';
import DiagonalReveal from './DiagonalReveal';

export default function SkillsSection() {
  // Strictly extracted from Prathamesh G. Tirmare's latest resume:
  // Technical Skills: Languages, Developer Tools, Technologies/Frameworks & Project Stacks
  const skillCategories = [
    {
      id: 'tech-frameworks',
      title: 'Technologies & Frameworks',
      subtitle: 'From resume Technical Skills & AI projects',
      icon: Cpu,
      annotation: '// Gemini AI, RAG & Scikit-learn pipelines',
      skills: [
        'Gemini AI',
        'RAG',
        'LangChain',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'REST APIs',
      ],
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      subtitle: 'From resume Technical Skills: Languages',
      icon: Code2,
      annotation: '// Core computational & query languages',
      skills: [
        'Python',
        'SQL',
        'JavaScript',
        'HTML/CSS',
      ],
    },
    {
      id: 'dev-tools',
      title: 'Developer Tools & Analytics',
      subtitle: 'From resume Technical Skills: Developer Tools',
      icon: Wrench,
      annotation: '// Data analysis, BI dashboards & version control',
      skills: [
        'Git',
        'GitHub',
        'Jupyter Notebook',
        'Power BI',
        'Microsoft Excel',
        'Streamlit',
      ],
    },
    {
      id: 'data-databases',
      title: 'Databases & Applied Stack',
      subtitle: 'From resume Projects & Engineering stack',
      icon: Database,
      annotation: '// Relational databases, ETL & application stack',
      skills: [
        'MySQL',
        'SQLAlchemy',
        'ETL Pipelines',
        'SQLite',
        'React',
        'Node.js',
        'Express',
        'Prisma',
      ],
    },
  ];

  const methodology = [
    { label: 'Data Processing', desc: 'Cleaning, transforming, and analyzing structured datasets using Python, SQL & Pandas.' },
    { label: 'RAG Architecture', desc: 'Semantic search, keyword retrieval, and Cross-Encoder reranking with Gemini AI & LangChain.' },
    { label: 'Data Pipelines', desc: 'Automated ETL workflows to clean, transform, and load warehouse data into MySQL.' },
    { label: 'Analytics & BI', desc: 'Interactive Streamlit, Power BI, and Excel dashboards for actionable business insights.' },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b-2 border-[#060504] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#060504]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#7d766f]">
              02 / TECHNICAL SKILLS (VERIFIED RESUME)
            </span>
          </div>
          <h2 className="font-caveat font-bold text-5xl sm:text-7xl text-[#060504]">
            Skills & Tooling
          </h2>
        </div>

        <p className="font-caveat text-2xl text-[#7d766f] flex items-center gap-2">
          <span>skills verified on resume</span>
          <span className="text-xl">🛠️</span>
        </p>
      </div>

      {/* Highlight Sticky Callout based on Professional Summary */}
      <DiagonalReveal delay={0.05}>
        <div className="mb-12 bg-[#ffe500] sketch-border sketch-shadow-sm p-5 sm:p-6 relative rotate-[-0.5deg]">
          {/* Scotch tape on top corner */}
          <div className="absolute -top-3.5 left-10 w-20 h-5 bg-white/70 border border-[#060504] -rotate-3 pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#060504] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-caveat text-2xl sm:text-3xl font-bold text-[#060504] leading-tight">
                  Professional Focus & Engineering Profile
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#060504]/90 mt-1 max-w-3xl leading-relaxed">
                  Artificial Intelligence & Data Science graduate with strong skills in data analysis, SQL, data visualization, and business intelligence. Experienced in cleaning, transforming, and analyzing structured datasets using Python, SQL, Power BI, and Excel to generate actionable insights.
                </p>
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-auto">
              <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#060504] text-[#fff9f5]">
                RESUME SPEC ✦
              </span>
            </div>
          </div>
        </div>
      </DiagonalReveal>

      {/* 4-Card Skills Grid — Strictly skills from the resume */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((cat, idx) => {
          const IconComponent = cat.icon;
          return (
            <DiagonalReveal key={cat.id} delay={0.1 * (idx + 1)}>
              <div 
                className="bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-6 sm:p-8 relative h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Simulated masking tape at top center */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-white/80 border border-[#060504] rotate-1 pointer-events-none shadow-xs" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#060504]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-[#ffe500] border border-[#060504]">
                          <IconComponent className="w-5 h-5 text-[#060504]" />
                        </div>
                        <h3 className="font-caveat text-2xl sm:text-3xl font-bold text-[#060504] leading-tight">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="font-mono text-[11px] text-[#7d766f] mt-1.5 ml-1">
                        {cat.subtitle}
                      </p>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#7d766f]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5 my-6">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-[#f7f6f4] border border-[#060504] px-3.5 py-1.5 text-[#060504] hover:bg-[#ffe500] transition-colors sketch-shadow-sm font-mono text-xs sm:text-sm font-semibold flex items-center gap-1.5"
                      >
                        <span className="text-[#7d766f]">#</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hand-drawn scribble annotation note */}
                <div className="pt-4 border-t border-[#060504]/20 flex items-center justify-between text-[#7d766f]">
                  <p className="font-caveat text-lg text-[#060504]">
                    {cat.annotation}
                  </p>
                </div>
              </div>
            </DiagonalReveal>
          );
        })}
      </div>

      {/* Applied Competencies from Resume */}
      <DiagonalReveal delay={0.3}>
        <div className="bg-[#f7f6f4] sketch-border p-6 sm:p-8 sketch-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#060504]">
            <div className="flex items-center gap-2.5">
              <CheckSquare className="w-6 h-6 text-[#060504]" />
              <h3 className="font-caveat text-3xl font-bold text-[#060504]">
                Applied Competencies from Resume
              </h3>
            </div>
            <span className="font-mono text-xs text-[#7d766f]">
              {`// key workflows & responsibilities`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {methodology.map((m, i) => (
              <div 
                key={i} 
                className="flex items-start gap-3 bg-[#fff9f5] border border-[#060504] p-4 sketch-shadow-sm"
              >
                <div className="w-5 h-5 rounded-sm bg-[#ffe500] border border-[#060504] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-mono text-xs font-bold text-[#060504]">✓</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#7d766f] block mb-1">
                    {m.label}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#060504] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DiagonalReveal>
    </section>
  );
}