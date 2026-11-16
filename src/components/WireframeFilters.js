import React, { useEffect, useState } from 'react';

export default function WireframeFilters() {
  const [seed, setSeed] = useState(2);

  useEffect(() => {
    // Subtle living ink wobble animation
    const interval = setInterval(() => {
      setSeed(s => (s % 100) + 1);
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg 
      className="absolute w-0 h-0 pointer-events-none select-none opacity-0 overflow-hidden" 
      aria-hidden="true"
    >
      <defs>
        {/* Hand-drawn ink edge filter */}
        <filter id="sketch-rough-filter">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.015" 
            numOctaves="2" 
            seed={seed} 
            result="turbulence" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="turbulence" 
            scale="3.5" 
            xChannelSelector="R" 
            yChannelSelector="B" 
          />
        </filter>

        {/* Dynamic Image / Video Distortion filter */}
        <filter id="image-distort-filter">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.01" 
            numOctaves="2" 
            seed={seed} 
            result="turbulence" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="turbulence" 
            scale="6" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </defs>
    </svg>
  );
}

