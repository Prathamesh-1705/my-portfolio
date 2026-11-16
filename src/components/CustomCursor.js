import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.dataset.cursorHover
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small ink pen tip dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#060504] rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing sketchy wireframe circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 border-2 border-[#060504]"
        style={{
          borderRadius: '55% 45% 60% 40% / 40% 60% 45% 55%',
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(255, 229, 0, 0.35)' : 'transparent',
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 220, mass: 0.2 }}
      />
    </>
  );
}

