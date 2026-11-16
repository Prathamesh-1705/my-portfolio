import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function VideoModal({ isOpen, onClose, project }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop with hand-drawn subtle noise */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060504]/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="relative w-full max-w-4xl bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-5 sm:p-7 z-10 flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#060504]">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#7d766f]">
                  PROJECT DEMO • {project.year || '2026'}
                </span>
                <h3 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504]">
                  {project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 bg-[#f7f6f4] sketch-border hover:bg-[#ffe500] transition-colors text-[#060504]"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="relative w-full aspect-video bg-[#060504] sketch-border overflow-hidden">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-white font-mono text-sm gap-2">
                  <Play className="w-12 h-12 text-[#ffe500]" />
                  <span>Interactive Preview</span>
                </div>
              )}
            </div>

            {/* Description & Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="font-sans text-sm text-[#474747] max-w-xl leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#ffe500] sketch-border font-caveat text-xl font-bold text-[#060504] no-underline hover:sketch-shadow-sm transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#e2e2e2]">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 bg-[#f7f6f4] border border-[#060504] rounded-sm font-semibold text-[#060504]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
