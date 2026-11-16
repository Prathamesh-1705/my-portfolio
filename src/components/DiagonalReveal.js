import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DiagonalReveal({ children, className = "", delay = 0 }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Target Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.6, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      {/* 45-degree Angled Brush Reveal Overlay */}
      {!isVisible && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-full bg-[#f7f6f4]" />
        </div>
      )}

      {isVisible && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* Staggered skew bands sweeping out */}
          {[
            { top: '-2%', height: '24%', dir: -1, delay: 0.05 },
            { top: '19%', height: '24%', dir: 1, delay: 0.18 },
            { top: '38%', height: '24%', dir: -1, delay: 0.3 },
            { top: '57%', height: '24%', dir: 1, delay: 0.42 },
            { top: '76%', height: '28%', dir: -1, delay: 0.54 },
          ].map((band, idx) => (
            <motion.div
              key={idx}
              className="absolute left-[-20%] w-[140%] bg-[#060504]"
              style={{
                top: band.top,
                height: band.height,
                transformOrigin: 'center center',
              }}
              initial={{
                x: '0%',
                skewX: '-45deg',
                opacity: 1,
              }}
              animate={{
                x: band.dir === -1 ? '-140%' : '140%',
                skewX: '-45deg',
                opacity: 0,
              }}
              transition={{
                duration: 0.65,
                delay: delay + band.delay,
                ease: [0.25, 1, 0.5, 1],
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

