import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import InteractiveLanyard from './InteractiveLanyard';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-8 max-w-6xl mx-auto overflow-visible">
      {/* Top Banner Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center justify-between flex-wrap gap-3"
      >
        <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#7d766f] bg-[#fff9f5] px-3 py-1 sketch-border">
          PORTFOLIO • 2026
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-xs text-[#060504] font-semibold">
            AVAILABLE FOR ROLES
          </span>
        </div>
      </motion.div>

      {/* Main Grid: Left Copy & Right 3D Lanyard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Handwritten greeting badge */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -2, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative inline-block mb-4"
          >
            {/* Yellow brush stroke behind */}
            <div className="absolute inset-0 bg-[#ffe500] transform -rotate-1 skew-x-3 rounded-sm scale-110 -z-10 shadow-sm" />
            <p className="font-caveat font-bold text-xl sm:text-2xl text-[#060504] px-3 py-0.5">
              hello!!! have a nice day ✦
            </p>
          </motion.div>

          {/* Big Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h1 className="font-caveat font-bold text-5xl sm:text-7xl md:text-8xl text-[#060504] leading-[0.95] tracking-tight">
              I'm Prathamesh
            </h1>

            {/* Hand-drawn SVG doodle underline */}
            <div className="w-48 sm:w-72 h-4 my-2">
              <svg viewBox="0 0 140 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M1 3.843c.086.167 3.116-.106 6.85-.915 20.2-4.38 65-1.5 131 1.2"
                  stroke="#060504"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Subtitle Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-caveat text-2xl sm:text-3xl text-[#060504] mt-3 leading-snug font-medium max-w-xl"
          >
            An <span className="underline decoration-wavy decoration-[#ffe500] font-bold">AI & Data Science Engineer</span> with hands on experience in data Science and Analysis turning complicated datasets and business problems into clean, scalable applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="/Prathmesh-Tirmare_AIDS_2026.pdf"
              download="Prathamesh_Tirmare_Resume.pdf"
              className="flex items-center gap-2.5 px-6 py-3 bg-[#ffe500] sketch-border font-caveat text-2xl font-bold text-[#060504] sketch-shadow sketch-shadow-hover no-underline"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            <a
              href="#works"
              className="flex items-center gap-2 px-6 py-3 bg-[#fff9f5] sketch-border font-caveat text-2xl font-bold text-[#060504] sketch-shadow-sm sketch-shadow-hover no-underline"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center gap-4 pt-4 border-t border-[#060504]/20 w-full max-w-md"
          >
            <span className="font-mono text-xs text-[#7d766f] uppercase tracking-wider">Connect:</span>

            <a
              href="https://github.com/Prathamesh-1705/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#fff9f5] sketch-border sketch-shadow-sm hover:scale-110 transition-transform text-[#060504]"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-[#fff9f5] sketch-border sketch-shadow-sm hover:scale-110 transition-transform text-[#060504]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:prathameshtirmare246@gmail.com"
              className="p-2 bg-[#fff9f5] sketch-border sketch-shadow-sm hover:scale-110 transition-transform text-[#060504]"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="tel:+919699246283"
              className="p-2 bg-[#fff9f5] sketch-border sketch-shadow-sm hover:scale-110 transition-transform text-[#060504]"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Hanging Lanyard */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-6">
          <InteractiveLanyard />
        </div>
      </div>

      {/* Decorative Wavy Divider Line */}
      <div className="mt-20 w-full overflow-hidden opacity-30 select-none pointer-events-none">
        <svg viewBox="0 0 773 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-3">
          <path
            d="M1 3.507c2.106.832 9.394 2.484 17.88 2 15-1 30-2 45 0s30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0 30 2 45 0 30-2 45 0"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
