import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';

export default function FlipbookContact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);

  // If user navigates or clicks directly to #contact, open the book completely
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact') {
        setManualOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Smooth spring physics for book flip rotation
  // When scrolling in: opens between 8% and 45% scroll progress
  // Once the sticky section locks in view (~52%), it is guaranteed 100% fully open (-115deg)
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 120,
    mass: 0.8,
  });

  const scrollRotateY = useTransform(smoothProgress, [0.08, 0.45], [0, -115]);

  // Combine scroll rotation with manual click toggle or #contact anchor
  const currentRotateY = manualOpen ? -115 : scrollRotateY;

  // Dynamic shadow as cover lifts
  const coverShadow = useTransform(
    smoothProgress,
    [0.08, 0.25, 0.45],
    [
      '0px 4px 12px rgba(6,5,4,0.1)',
      '-20px 25px 40px rgba(6,5,4,0.3)',
      '-35px 20px 30px rgba(6,5,4,0.2)'
    ]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // Send note directly to prathameshtirmare246@gmail.com via FormSubmit
      const res = await fetch('https://formsubmit.co/ajax/prathameshtirmare246@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (res.ok) {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffe500', '#060504', '#ffffff', '#e2e2e2'],
        });
      }
    } catch (err) {
      console.warn('Network issue sending form:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="contact" 
      className="relative min-h-[190vh] bg-[#f7f6f4]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
        
        {/* Top Header Row matching wireframe */}
        <div className="flex items-center justify-between border-b-2 border-[#060504] pb-3 shrink-0">
          <h2 className="font-caveat font-bold text-5xl sm:text-7xl text-[#060504] tracking-tight leading-tight py-1">
            Let's make something
          </h2>

          <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setManualOpen(!manualOpen)}>
            <span className="font-caveat text-2xl sm:text-3xl font-bold text-[#060504]">
              i'm prathamesh
            </span>
            <span className="text-2xl text-[#060504] select-none">↘</span>
          </div>
        </div>

        {/* Center 3D Flipbook Stage */}
        <div 
          className="flex-1 flex items-center justify-center my-auto py-2"
          style={{ perspective: 1800 }}
        >
          {/* Main Book Body */}
          <div className="relative w-full max-w-[860px] h-[480px] sm:h-[540px] flex items-stretch">
            
            {/* Left Edge Spiral Rings Spine */}
            <div className="absolute -left-5 top-0 bottom-0 w-10 flex flex-col justify-around py-4 z-40 pointer-events-none">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <img 
                    src="/wireframe_assets/spiral_clip.png" 
                    alt="Spine clip"
                    className="w-8 sm:w-9 h-auto drop-shadow-sm select-none"
                  />
                </div>
              ))}
            </div>

            {/* Inside Right Page (The Lined Contact Form Paper) */}
            <div className="relative w-full h-full bg-[#fff9f5] sketch-border-thick sketch-shadow-lg pl-8 sm:pl-12 pr-6 sm:pr-10 py-8 sm:py-10 flex flex-col justify-between overflow-hidden">
              
              {/* Ruled Notebook Paper Horizontal Guidelines */}
              <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
                <div className="w-full h-full flex flex-col justify-between py-12 px-6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="w-full border-b border-[#060504]/20" />
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="my-auto text-center z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffe500] sketch-border mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9 text-[#060504]" />
                  </div>
                  <h3 className="font-caveat text-4xl sm:text-5xl font-bold text-[#060504]">
                    Note Dispatched!
                  </h3>
                  <p className="font-caveat text-2xl text-[#474747] max-w-md mx-auto">
                    Thanks, {formData.name}! Your message has been routed to prathameshtirmare246@gmail.com.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:prathameshtirmare246@gmail.com?subject=Note from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                      className="font-caveat text-xl font-bold text-[#060504] bg-[#ffe500] px-4 py-1.5 sketch-border no-underline shadow-xs hover:scale-105 transition-transform"
                    >
                      Open in Email App ↗
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="font-caveat text-xl font-bold text-[#060504] bg-[#f7f6f4] px-4 py-1.5 sketch-border"
                    >
                      Write another note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Name Input on ruled line */}
                  <div className="pt-2">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name..."
                      className="w-full bg-transparent border-b-2 border-[#060504] py-3 px-2 font-caveat text-3xl sm:text-4xl text-[#060504] placeholder-[#7d766f]/60 focus:outline-none focus:border-[#060504]"
                    />
                  </div>

                  {/* Email Input on ruled line */}
                  <div className="pt-2">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email..."
                      className="w-full bg-transparent border-b-2 border-[#060504] py-3 px-2 font-caveat text-3xl sm:text-4xl text-[#060504] placeholder-[#7d766f]/60 focus:outline-none focus:border-[#060504]"
                    />
                  </div>

                  {/* Message Input on ruled line */}
                  <div className="pt-2">
                    <textarea
                      rows={2}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-transparent border-b-2 border-[#060504] py-3 px-2 font-caveat text-2xl sm:text-3xl text-[#060504] placeholder-[#7d766f]/60 focus:outline-none focus:border-[#060504] resize-none"
                    />
                  </div>

                  {/* Bottom Row: Send Button & Social Links */}
                  <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-6 pt-4">
                    
                    {/* Social Links with handwritten underlines */}
                    <div className="flex items-center gap-5 mr-auto">
                      <a
                        href="https://github.com/Prathamesh-1705"
                        target="_blank"
                        rel="noreferrer"
                        className="font-caveat text-2xl font-bold text-[#060504] hover:underline flex items-center gap-1.5 no-underline"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>github</span>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-caveat text-2xl font-bold text-[#060504] hover:underline flex items-center gap-1.5 no-underline"
                      >
                        <FaLinkedin className="w-4 h-4" />
                        <span>linkedin</span>
                      </a>

                      <a
                        href="mailto:prathameshtirmare246@gmail.com"
                        className="font-caveat text-2xl font-bold text-[#060504] hover:underline no-underline"
                      >
                        email
                      </a>
                    </div>

                    {/* "Send it →" Yellow Highlighter Button matching Image 2 */}
                    <div className="relative group/send cursor-pointer shrink-0">
                      {/* Yellow highlighter brush oval backdrop */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="relative z-10 flex items-center gap-2 px-6 py-2.5 font-caveat text-3xl sm:text-4xl font-bold text-[#060504] focus:outline-none cursor-pointer disabled:opacity-60"
                      >
                        <span>{loading ? 'Sending...' : 'Send it'}</span>
                        <ArrowRight className={`w-6 h-6 stroke-[2.5] transition-transform ${loading ? 'animate-pulse' : 'group-hover/send:translate-x-1.5'}`} />
                      </button>

                      {/* Hand-drawn yellow highlight oval wrapper */}
                      <div className="absolute inset-0 bg-[#ffe500] border-2 border-[#060504] rounded-[50%_45%_55%_48%/45%_55%_48%_52%] transform -rotate-1 group-hover/send:scale-105 transition-transform" />
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* 3D Rotatable Yellow Notebook Cover */}
            <motion.div
              style={{
                rotateY: currentRotateY,
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d',
                boxShadow: coverShadow,
              }}
              onClick={() => setManualOpen(!manualOpen)}
              className="absolute inset-0 w-full h-full bg-[#ffe500] sketch-border-thick rounded-r-md cursor-pointer z-30 flex flex-col items-center justify-center p-6 sm:p-10 select-none overflow-hidden"
            >
              {/* Cover Front Side Content */}
              <div className="relative flex flex-col items-center justify-center text-center">
                
                {/* Hand-drawn SVG doodle circle enclosing the text */}
                <div className="relative p-6 sm:p-10">
                  <svg 
                    viewBox="0 0 670 266" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="absolute inset-0 w-full h-full pointer-events-none scale-125 sm:scale-110"
                  >
                    <path 
                      stroke="#060504" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M556.231 39.577c0-.484-17.501-8.269-65.976-21.571-30.382-8.338-74.889-9.537-112.151-9.966s-66.541 2.597-97.659 8.44c-31.118 5.842-63.188 14.41-87.597 21.814s-40.184 13.386-59.871 22.573-42.811 21.399-61.883 33.789c-19.07 12.39-33.39 24.59-44.027 36.766-19.39 22.193-23.483 41.649-21.68 52.864 1.887 11.752 11.633 22.406 23.735 33.033 25 21 80 40 180 50 120 12 240-5 310-35 50-22 80-55 75-85s-40-60-120-75"
                    />
                  </svg>

                  {/* Big Headline inside circle: LET'S MAKE SOMETHING */}
                  <h3 className="font-marker text-4xl sm:text-6xl md:text-7xl text-[#060504] tracking-wider leading-[1.05] uppercase">
                    LET'S<br />
                    MAKE<br />
                    SOMETHING
                  </h3>
                </div>

                {/* Subtitle / Click hint */}
                <p className="font-caveat text-xl sm:text-2xl text-[#060504] mt-4 font-bold">
                  {manualOpen ? "↳ click to close" : "↳ scroll or click to flip open ✦"}
                </p>
              </div>

              {/* Decorative notebook cover binder edge strip */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#060504]/10 border-r border-[#060504]/20" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#060504]/20 pt-3 text-center sm:text-left shrink-0">
          <p className="font-caveat text-xl text-[#060504]">
            © {new Date().getFullYear()} Prathamesh Tirmare. Built with React & Tailwind.
          </p>

          <p className="font-mono text-xs text-[#7d766f]">
            Scroll to open & close notebook ✦ Worli, Mumbai
          </p>
        </div>
      </div>
    </section>
  );
}
