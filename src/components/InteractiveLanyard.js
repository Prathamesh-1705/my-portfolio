import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profilePic from '../my portrait.png';

export default function InteractiveLanyard() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const [activeGrab, setActiveGrab] = useState(false);

  // Raw interactive displacement values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth pendulum physics with natural harmonic inertia and realistic damping
  const springConfig = { damping: 20, stiffness: 160, mass: 1.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // 1. Strap physics (Level 1: anchored at ceiling)
  // Swings left/right around top anchor, with dynamic skew to simulate ribbon flex
  const strapRotateZ = useTransform(smoothX, [-180, 180], [-24, 24]);
  const strapSkewX = useTransform(smoothX, [-180, 180], [-7, 7]);
  const strapScaleY = useTransform(smoothY, [-80, 180], [0.93, 1.16]);

  // 2. Metal clasp physics (Level 2: hinged at bottom of strap)
  // Swivels on the strap crimp loop with secondary lag
  const claspRotateZ = useTransform(smoothX, [-180, 180], [-13, 13]);

  // 3. ID Card 3D physics (Level 3: hooked into clasp ring)
  // Rotates right around the punch hole center (50% 14px) so it stays physically fastened
  const badgeRotateZ = useTransform(smoothX, [-180, 180], [-10, 10]);
  const rotateY = useTransform(smoothX, [-180, 180], [-22, 22]);
  const rotateX = useTransform(smoothY, [-120, 160], [18, -18]);

  // Pointer drag and hover handlers
  const handlePointerDown = (e) => {
    isDragging.current = true;
    setActiveGrab(true);
    dragStartPos.current = {
      x: e.clientX - x.get(),
      y: e.clientY - y.get(),
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (isDragging.current) {
      // Actively dragging the card: move card and pull string along
      const rawX = e.clientX - dragStartPos.current.x;
      const rawY = e.clientY - dragStartPos.current.y;
      // Realistic tether boundary constraints
      const clampedX = Math.max(-180, Math.min(180, rawX));
      const clampedY = Math.max(-50, Math.min(160, rawY));
      x.set(clampedX);
      y.set(clampedY);
    } else {
      // Subtle cursor tracking on hover
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = Math.max(-140, Math.min(140, (e.clientX - centerX) * 0.42));
      const deltaY = Math.max(-80, Math.min(80, (e.clientY - centerY) * 0.42));
      x.set(deltaX);
      y.set(deltaY);
    }
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    setActiveGrab(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
    // Release back to natural resting equilibrium with spring overshoot
    x.set(0);
    y.set(0);
  };

  const handlePointerLeave = () => {
    if (!isDragging.current) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center justify-start select-none touch-none py-2"
      style={{ perspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* 
        PHYSICS CHAIN HIERARCHY:
        - Level 1: Ceiling Anchor Point (x=0, y=0)
        - Level 2: Strap Ribbon (rotates from ceiling, flexes & stretches)
        - Level 3: Metal Clasp (hangs at bottom of strap)
        - Level 4: ID Card (hangs through clasp hook at punch hole center)
      */}
      <motion.div
        style={{
          rotateZ: strapRotateZ,
          skewX: strapSkewX,
          scaleY: strapScaleY,
          transformOrigin: 'top center',
        }}
        className="flex flex-col items-center origin-top"
      >
        {/* The Red Lanyard Strap Ribbon */}
        <div className="relative w-9 sm:w-11 h-28 sm:h-36 pointer-events-none drop-shadow-md">
          <img 
            src="/wireframe_assets/strap.png" 
            alt="Lanyard strap"
            className="w-full h-full object-cover object-bottom select-none"
          />
          {/* Subtle woven texture highlights */}
          <div className="absolute inset-y-0 left-0.5 w-[1px] bg-white/20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0.5 w-[1px] bg-black/20 pointer-events-none" />
        </div>

        {/* Metal Clasp (Hinged at bottom of strap) */}
        <motion.div
          style={{
            rotateZ: claspRotateZ,
            transformOrigin: 'top center',
          }}
          className="relative -mt-3.5 z-20 flex flex-col items-center pointer-events-none origin-top"
        >
          <img 
            src="/wireframe_assets/clasp.png" 
            alt="Badge clasp"
            className="w-7 sm:w-8 h-12 sm:h-14 object-contain drop-shadow select-none"
          />

          {/* Hanging ID Card — Scaled up for optimal legibility & presence */}
          <motion.div
            ref={cardRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            style={{
              rotateX,
              rotateY,
              rotateZ: badgeRotateZ,
              transformOrigin: '50% 14px', // Matches the punch hole center
              transformStyle: 'preserve-3d',
            }}
            className={`relative -mt-4 w-[320px] sm:w-[380px] bg-[#fff9f5] sketch-border-thick p-6 sm:p-7 z-30 pointer-events-auto transition-shadow duration-200 select-none ${
              activeGrab ? 'cursor-grabbing sketch-shadow-lg scale-[1.02]' : 'cursor-grab sketch-shadow hover:sketch-shadow-lg'
            }`}
          >
            {/* Slot Cutout Hole at top where clasp hook connects */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#060504] rounded-full border border-[#f7f6f4]" />

            {/* Card Header & Brand */}
            <div className="mt-3 flex items-center justify-between border-b-2 border-[#060504] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse border border-[#060504]" />
                <span className="font-mono text-xs sm:text-sm tracking-wider uppercase font-bold text-[#060504]">
                  ACCESS PASS • 2026
                </span>
              </div>
              <span className="font-caveat font-bold text-base sm:text-lg bg-[#ffe500] px-2.5 py-0.5 rounded border border-[#060504]">
                AI ENGINEER
              </span>
            </div>

            {/* Portrait & Profile Information Section */}
            <div className="mt-5 flex gap-4 sm:gap-5 items-start">
              {/* Enlarged Photo Frame */}
              <div className="relative w-28 h-36 sm:w-36 sm:h-44 shrink-0 sketch-border overflow-hidden bg-[#e2e2e2]">
                <img 
                  src={profilePic} 
                  alt="Prathamesh Tirmare" 
                  className="w-full h-full object-cover transition-all duration-300 pointer-events-none"
                />
                {/* Hand-drawn scotch tape overlay on photo */}
                <div className="absolute -top-1 -right-4 w-14 h-4 bg-white/70 border border-[#060504] rotate-45 pointer-events-none" />
              </div>

              {/* Text Information Block */}
              <div className="flex-1 flex flex-col justify-between h-36 sm:h-44 py-0.5">
                <div>
                  <p className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#7d766f]">
                    NAME
                  </p>
                  <h3 className="font-caveat text-2xl sm:text-3xl font-bold leading-tight text-[#060504] mt-0.5">
                    Prathamesh Tirmare
                  </h3>
                </div>

                <div>
                  <p className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#7d766f]">
                    ROLE
                  </p>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#060504] leading-snug mt-0.5">
                    AI & Data Science Engineer
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#7d766f]">
                    LOCATION
                  </p>
                  <p className="font-mono text-xs sm:text-sm font-medium text-[#060504] mt-0.5">
                    Worli, Mumbai, IN
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Barcode & Microprint */}
            <div className="mt-6 pt-3 border-t-2 border-[#060504] flex items-center justify-between">
              {/* Simulated barcode */}
              <div className="flex items-center gap-[2.5px] h-8 sm:h-9">
                {[2, 1, 3, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 2].map((w, i) => (
                  <div 
                    key={i} 
                    className="bg-[#060504] h-full" 
                    style={{ width: `${w * 1.3}px` }} 
                  />
                ))}
              </div>
              <span className="font-mono text-xs font-bold tracking-widest text-[#7d766f]">
                ID: PT-2026-AI
              </span>
            </div>

            {/* Decorative corner hand-drawn stamp */}
            <div className="absolute -bottom-2.5 -right-2.5 font-marker text-xs sm:text-sm text-red-600 border-2 border-red-600 rounded px-2 py-0.5 rotate-[-12deg] bg-white/95 shadow-sm pointer-events-none">
              VERIFIED
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive Drag & Hover Hint */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        className="font-caveat text-base text-[#7d766f] mt-4 select-none flex items-center gap-1"
      >
        <span>↳ drag or swing the lanyard!</span>
      </motion.p>
    </div>
  );
}