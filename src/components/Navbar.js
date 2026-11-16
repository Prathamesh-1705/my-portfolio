import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'works', href: '#works' },
    { name: 'skills', href: '#skills' },
    { name: 'experience', href: '#experience' },
    { name: 'certifications', href: '#certifications' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a 
            href="#top" 
            className="group flex items-center gap-2 text-[#060504] no-underline"
          >
            <span className="font-caveat font-bold text-3xl sm:text-4xl tracking-tight transition-transform duration-200 group-hover:scale-105">
              Prathamesh
            </span>
            <span className="w-2 h-2 rounded-full bg-[#ffe500] border border-[#060504]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 bg-[#fff9f5]/80 backdrop-blur-md px-6 py-2.5 sketch-border sketch-shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-caveat text-xl font-bold text-[#060504] hover:text-black relative group transition-colors no-underline"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#060504] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-5 py-2 bg-[#fff9f5] sketch-border-double font-caveat text-xl font-bold text-[#060504] sketch-shadow-sm hover:sketch-shadow transition-all duration-200 hover:-translate-y-0.5 no-underline"
            >
              <span>Contact with me!</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 bg-[#fff9f5] sketch-border sketch-shadow-sm text-[#060504] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-caveat text-2xl font-bold text-[#060504] py-1 border-b border-[#e2e2e2] no-underline flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-[#7d766f]">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center py-2.5 bg-[#ffe500] sketch-border font-caveat text-2xl font-bold text-[#060504] no-underline shadow-sm"
            >
              Contact with me!
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
