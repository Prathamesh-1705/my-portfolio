import React from 'react';
import { FileText, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import DiagonalReveal from './DiagonalReveal';

export default function CertificationsSection() {
  const certifications = [
    {
      id: 'python-bootcamp',
      title: 'Python Bootcamp: 100 Days of Code',
      issuer: 'CodeWithHarry',
      credentialType: 'Professional Program Completion',
      pdf: '/certificates/Python_Bootcamp_Certificate.pdf',
      accentColor: '#ffe500',
      description:
        'Comprehensive software engineering bootcamp covering foundational to advanced Python architecture, modular code structuring, and computational problem solving.',
      topics: [
        'Object-Oriented Programming (OOP) & Inheritance',
        'Data Structures & Algorithmic Logic',
        'File Handling, I/O & Exception Management',
        'Functional Programming, Generators & Decorators',
        'API Consumption & Third-Party Library Integration',
      ],
      skills: ['Python 3', 'OOP', 'Data Structures', 'Algorithms', 'Clean Code'],
    },
    {
      id: 'data-science',
      title: 'Comprehensive Data Science Masterclass',
      issuer: 'CodeWithHarry',
      credentialType: 'Verified Specialization Certificate',
      pdf: '/certificates/Data_Science_Course_Certificate.pdf',
      accentColor: '#fff9f5',
      description:
        'In-depth specialization into the mathematical and algorithmic underpinnings of modern data science, exploratory analysis, and supervised machine learning pipelines.',
      topics: [
        'Numerical Computing & Matrix Operations with NumPy',
        'Data Wrangling, Indexing & Aggregations with Pandas',
        'Exploratory Data Analysis (EDA) & Distribution Modeling',
        'Data Visualization with Matplotlib & Seaborn',
        'Supervised Learning: Linear/Logistic Regression, Decision Trees',
      ],
      skills: ['Data Science', 'NumPy', 'Pandas', 'EDA', 'Scikit-Learn', 'Matplotlib'],
    },
    {
      id: 'data-analytics',
      title: 'Industry Data Analytics Program',
      issuer: 'Career365',
      credentialType: 'Industry Readiness Certification',
      pdf: '/certificates/Data_Analayst_Certificate.pdf',
      accentColor: '#ffe500',
      description:
        'Hands-on analytics and business intelligence training with focus on enterprise data extraction, KPI metric formulation, and interactive dashboard authoring.',
      topics: [
        'Advanced Microsoft Excel (VLOOKUP, Pivot Tables, Macros)',
        'Interactive Business Dashboards in Microsoft Power BI',
        'Data Modeling, Relationships & Measure Authoring (DAX)',
        'Data Storytelling & Executive Presentation Formatting',
        'SQL Queries for Business Analytics & Data Extraction',
      ],
      skills: ['Power BI', 'Advanced Excel', 'Data Modeling', 'Business Intelligence', 'SQL'],
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b-2 border-[#060504] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#060504]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#7d766f]">
              04 / CREDENTIALS & LICENSES
            </span>
          </div>
          <h2 className="font-caveat font-bold text-5xl sm:text-7xl text-[#060504]">
            Certifications & Badges
          </h2>
        </div>

        <p className="font-caveat text-2xl text-[#7d766f] flex items-center gap-2">
          <span>verified credentials & course completion</span>
          <span className="text-xl">📜</span>
        </p>
      </div>

      {/* Certifications 3-Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {certifications.map((cert, index) => (
          <DiagonalReveal key={cert.id} delay={0.1 * (index + 1)}>
            <div className="bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-6 sm:p-7 relative flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-transform duration-200">
              
              {/* Top Pin / Scotch Tape */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/80 border border-[#060504] -rotate-1 pointer-events-none" />

              <div>
                {/* Header Row: Issuer & Rubber Stamp */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#060504]">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#7d766f] block">
                      ISSUED BY
                    </span>
                    <p className="font-caveat text-2xl font-bold text-[#060504]">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Stamp Graphic */}
                  <div className="border-2 border-[#060504] px-2 py-0.5 bg-[#ffe500] rotate-3 text-center">
                    <span className="font-mono text-[9px] font-bold tracking-wider text-[#060504] block">
                      VERIFIED ✦
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-caveat text-3xl font-bold text-[#060504] leading-tight mb-2">
                  {cert.title}
                </h3>

                <p className="font-mono text-[11px] text-[#7d766f] mb-3">
                  {cert.credentialType}
                </p>

                <p className="font-sans text-xs text-[#474747] leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Covered Core Curriculum */}
                <div className="mb-6 space-y-1.5 bg-[#f7f6f4] p-3.5 border border-[#060504]/20">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7d766f] mb-2">
                    Key Competencies Mastered:
                  </p>
                  {cert.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#060504] font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#060504] shrink-0 mt-0.5" />
                      <span className="leading-tight">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: View PDF */}
              <div className="pt-4 border-t border-[#060504]">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#ffe500] sketch-border font-caveat text-2xl font-bold text-[#060504] hover:bg-[#ffe500]/90 transition-transform active:scale-95 no-underline group/btn shadow-xs"
                >
                  <FileText className="w-5 h-5 text-[#060504]" />
                  <span>View Original PDF</span>
                  <ArrowUpRight className="w-4 h-4 text-[#060504] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </DiagonalReveal>
        ))}
      </div>

      {/* Authenticity Ledger Note */}
      <DiagonalReveal delay={0.4}>
        <div className="bg-[#fff9f5] sketch-border p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sketch-shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ffe500] sketch-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#060504]" />
            </div>
            <div>
              <h4 className="font-caveat text-2xl font-bold text-[#060504]">
                Credential Authenticity Guarantee
              </h4>
              <p className="font-sans text-xs text-[#7d766f]">
                All certificate documents above are authentic verified PDFs rendered directly from local storage.
              </p>
            </div>
          </div>

          <span className="font-mono text-xs text-[#060504] border border-[#060504] px-3 py-1 bg-[#f7f6f4] shrink-0">
            3 CERTIFICATES ON FILE
          </span>
        </div>
      </DiagonalReveal>
    </section>
  );
}