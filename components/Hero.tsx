
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { EtherealShadow } from './ui/etheral-shadow';
import HackerText from './HackerText';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest);
  });

  return (
    <div className="relative h-[120vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background 3D Layer */}
        <ThreeScene scrollProgress={scrollValue} />
        
        {/* Ethereal Shadow Overlay */}
        <div className="absolute inset-0 z-[1] opacity-60 mix-blend-plus-lighter pointer-events-none">
          <EtherealShadow 
            color="rgba(30, 64, 175, 0.4)"
            animation={{ scale: 40, speed: 20 }}
            noise={{ opacity: 0.1, scale: 0.5 }}
          />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-[2]" />

        {/* Volumetric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-[3]" />

        {/* Main Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Engineering Tag */}
            <div className="mb-8">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                PRECISION ENGINEERING V4.2
              </span>
            </div>

            {/* Massive Typography - Resized for better fit */}
            <h1 className="text-[11vw] md:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-10 uppercase select-none flex flex-col items-center">
              <HackerText text="STOP LOSING" className="text-white" />
              <HackerText 
                text="CUSTOMERS." 
                delay={500}
                className="text-blue-500"
                style={{ 
                  filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.3))'
                }}
              />
            </h1>
            
            {/* Sub-headline - Exact Image Phrasing */}
            <p className="text-lg md:text-2xl text-zinc-400 font-medium tracking-tight max-w-2xl mb-14 leading-relaxed">
              I am <span className="text-white font-black">Yash Rathod</span>. I engineer high-performance digital assets for founders who are tired of high-traffic sites that don't print revenue.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pointer-events-auto">
              <a 
                href="#contact" 
                className="px-10 py-4 border border-blue-500/50 bg-blue-500/10 text-white font-black uppercase tracking-tighter text-lg transition-all hover:bg-blue-600 hover:text-white rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                Start Your Audit
              </a>
              <a 
                href="#work" 
                className="px-10 py-4 border border-white/10 text-zinc-500 font-black uppercase tracking-tighter text-lg transition-all hover:text-white hover:border-white rounded-sm"
              >
                View My Process
              </a>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Data Overlays */}
        <div className="absolute bottom-10 left-0 w-full px-12 hidden md:flex justify-between items-end text-zinc-700 font-mono text-[8px] uppercase tracking-[0.6em] pointer-events-none">
          <div>CORE_METRIC: CONVERSION_RATE</div>
          <div>BUILD_VERSION: 01.2025</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
