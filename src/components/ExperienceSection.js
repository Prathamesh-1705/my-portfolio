import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import DiagonalReveal from './DiagonalReveal';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Artificial Intelligence Intern',
      company: 'Gamasusco Private Limited',
      period: 'Aug 2026 – Present',
      location: 'Mumbai, Maharashtra, IN',
      type: 'Industrial Internship',
      status: 'Current Role',
      summary:
        'Contributed to the development of an enterprise AI-powered Smart Carbon Accounting Platform for automated greenhouse gas (GHG) emissions tracking, environmental calculations, and sustainability analytics.',
      highlights: [
        'Implemented automated data validation and ingestion workflows in Python to reliably parse operational carbon footprint metrics across diverse enterprise datasets.',
        'Engineered complex calculation routines for greenhouse gas emission scopes, generating clean, structured analytical datasets for downstream client dashboards.',
        'Collaborated closely with senior data engineering and AI teams to enforce rigorous data integrity, schema validation, and reporting pipelines.',
        'Assisted in formulating automated exception logs and audit trails to guarantee transparency in carbon accounting reports.',
      ],
      skills: ['Python', 'Data Validation', 'ETL Pipelines', 'Carbon Analytics', 'Automation', 'Enterprise AI'],
    },
    {
      role: 'Data Science Intern',
      company: 'Softcrowd Technologies',
      period: 'Dec 2024 – Jan 2025',
      location: 'Nashik, Maharashtra / Remote',
      type: 'Technical Internship',
      status: 'Completed',
      summary:
        'Conducted exploratory data analysis, dataset cleaning, preprocessing, and predictive machine learning experimentation across structured business datasets.',
      highlights: [
        'Performed thorough exploratory data analysis (EDA), missing value imputation, outlier detection, and preprocessing using Python, Pandas, and NumPy.',
        'Assisted in feature selection, model tuning, and cross-validation workflows using Scikit-Learn to evaluate regression and classification benchmarks.',
        'Created high-impact visual representations and statistical summary reports using Matplotlib and Seaborn to guide business decision-making.',
        'Documented data dictionaries, pipeline assumptions, and reproducible Jupyter notebook workflows for team reference.',
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'EDA', 'Feature Engineering', 'Data Visualization'],
    },
  ];

  const education = {
    degree: 'Bachelor of Engineering (B.E.) in Artificial Intelligence & Data Science',
    institution: "Jawahar Education Society's Institute of Technology, Management & Research (JES ITMR)",
    affiliation: 'Savitribai Phule Pune University (SPPU)',
    location: 'Nashik, Maharashtra, India',
    period: 'Nov 2022 – Jun 2026',
    status: 'Graduating 2026 (Final Year)',
    description:
      'Pursuing an intensive 4-year engineering curriculum focused on artificial intelligence systems, statistical learning, algorithmic complexity, and scalable data architectures.',
    coursework: [
      'Machine Learning & Predictive Modeling',
      'Data Structures & Algorithms (DSA)',
      'Database Management Systems (DBMS) & SQL',
      'Artificial Intelligence Principles',
      'Deep Learning & Neural Networks',
      'Probability, Statistics & Linear Algebra',
      'Big Data Technologies & Cloud Computing',
      'Object-Oriented Programming (OOP)',
    ],
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b-2 border-[#060504] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#060504]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#7d766f]">
              03 / CAREER & EDUCATION TIMELINE
            </span>
          </div>
          <h2 className="font-caveat font-bold text-5xl sm:text-7xl text-[#060504]">
            Work Experience & Education
          </h2>
        </div>

        <p className="font-caveat text-2xl text-[#7d766f] flex items-center gap-2">
          <span>chronological journey</span>
          <span className="text-xl">📓</span>
        </p>
      </div>

      {/* Main Spiral Notebook Container */}
      <DiagonalReveal delay={0.1}>
        <div className="relative bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-6 sm:p-10 pt-14">
          
          {/* Top Spiral Rings Binding */}
          <div className="absolute -top-4 left-6 right-6 flex justify-between items-center pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="spiral-ring" />
                <div className="spiral-hole -mt-1" />
              </div>
            ))}
          </div>

          {/* Section 1: Work Experience Timeline */}
          <div className="mb-14">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#060504] mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ffe500] border border-[#060504]">
                  <Briefcase className="w-6 h-6 text-[#060504]" />
                </div>
                <h3 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504]">
                  Industry Experience
                </h3>
              </div>
              <span className="font-mono text-xs text-[#7d766f] hidden sm:inline">
                [ 2 INTERNSHIP ROLES ]
              </span>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div 
                  key={exp.company}
                  className="relative pl-6 sm:pl-8 border-l-2 border-[#060504] pb-2 group"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[10px] top-1.5 w-5 h-5 rounded-full bg-[#ffe500] border-2 border-[#060504] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#060504]" />
                  </div>

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504] leading-tight">
                          {exp.role}
                        </h4>
                        <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-[#ffe500] border border-[#060504]">
                          {exp.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#7d766f]">
                        <span className="font-bold text-[#060504] text-sm">
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="self-start sm:self-auto flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 bg-[#f7f6f4] border border-[#060504]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-sm sm:text-base text-[#474747] my-3 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 bg-[#f7f6f4]/60 p-4 border border-[#060504]/20">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#7d766f] mb-1">
                      Key Contributions & Impact:
                    </p>
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="font-sans text-xs sm:text-sm text-[#060504] flex items-start gap-2.5">
                        <span className="font-mono text-[#060504] font-bold shrink-0 mt-0.5">↳</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Academic Education Box */}
          <div className="pt-10 border-t-2 border-[#060504]">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#060504] mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#ffe500] border border-[#060504]">
                  <GraduationCap className="w-6 h-6 text-[#060504]" />
                </div>
                <h3 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504]">
                  Academic Education
                </h3>
              </div>
              <span className="font-mono text-xs text-[#7d766f] hidden sm:inline">
                [ 2022 — 2026 ]
              </span>
            </div>

            <div className="bg-[#f7f6f4] sketch-border p-6 sm:p-8 sketch-shadow-sm relative">
              {/* Corner Stamp */}
              <div className="absolute top-4 right-4 hidden sm:block border-2 border-[#060504] bg-[#ffe500] px-3 py-1 rotate-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                  {education.status}
                </span>
              </div>

              <div className="max-w-3xl">
                <div className="inline-block sm:hidden mb-2 border border-[#060504] bg-[#ffe500] px-2 py-0.5 font-mono text-[10px] font-bold">
                  {education.status}
                </div>

                <h4 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504] leading-tight">
                  {education.degree}
                </h4>

                <p className="font-sans text-base font-semibold text-[#060504] mt-1">
                  {education.institution}
                </p>

                <p className="font-mono text-xs text-[#7d766f] mt-1 flex flex-wrap items-center gap-2">
                  <span>{education.affiliation}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                  <span>•</span>
                  <span className="font-bold text-[#060504]">{education.period}</span>
                </p>

                <p className="font-sans text-sm text-[#474747] mt-4 leading-relaxed">
                  {education.description}
                </p>

                {/* Coursework Checklist */}
                <div className="mt-6 pt-5 border-t border-[#060504]/20">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#7d766f] mb-3">
                    Core Coursework & Theoretical Foundations:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {education.coursework.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#060504] font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-[#060504] shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </DiagonalReveal>
    </section>
  );
}
