
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import HackerText from './HackerText';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-zinc-900">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: THE ENGINEER (Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-full max-w-2xl mx-auto lg:mx-0"
          >
            {/* Geometric Data Frame */}
            <div className="relative z-10 p-2 md:p-4">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500 z-30" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500 z-30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500 z-30" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500 z-30" />
              
              {/* Image Container with Geometric Clip - Scaled Up */}
              <div 
                className="relative overflow-hidden bg-zinc-900 aspect-[4/5] md:aspect-[3/4] shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)' }}
              >
                <img 
                  src="https://i.postimg.cc/2SRdP819/image-2026-01-21-161747403-birefnet.png" 
                  alt="Yash Rathod - The Web Dev" 
                  className="w-full h-full object-cover object-center grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                
                {/* Scanline Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,2px_100%] z-10" />
                
                {/* Blue Light Leak */}
                <div className="absolute -inset-10 bg-blue-600/15 blur-[80px] rounded-full mix-blend-screen animate-pulse pointer-events-none z-20" />
              </div>

              {/* Technical Labels */}
              <div className="absolute -right-8 top-1/3 rotate-90 origin-right text-[10px] font-mono text-blue-500/60 uppercase tracking-[1em] z-30 hidden md:block">
                BIO_SCAN_ACTIVE
              </div>
            </div>

            {/* Decorative Grid Behind */}
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-zinc-800/50 -z-10 translate-x-4 translate-y-4" />
          </motion.div>

          {/* RIGHT COLUMN: THE OPERATOR (Bio & Data) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-block text-blue-500 font-mono text-xs md:text-sm uppercase tracking-[0.5em] mb-6">
              WHO AM I // ARCHITECT_LOG
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.85]">
              <HackerText text="YASH" /> <br className="hidden lg:block" /> <HackerText text="RATHOD." delay={400} />
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl">
              <span className="text-white">The Web Dev.</span> I don't just code; I architect digital systems designed to capture market share and drive engagement. My mission is to turn your traffic into a powerful digital experience.
            </p>

            {/* SYSTEM METRICS */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12 w-full mb-12 py-10 border-y border-zinc-900">
              <div className="flex flex-col items-center lg:items-start">
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-mono font-black text-blue-500 mb-2"
                  style={{ textShadow: '0 0 25px rgba(59,130,246,0.4)' }}
                >
                  10+
                </div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.3em]">
                  WEBSITES DEPLOYED.
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-mono font-black text-blue-500 mb-2"
                  style={{ textShadow: '0 0 25px rgba(59,130,246,0.4)' }}
                >
                  100%
                </div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.3em]">
                  CLIENT SATISFACTION.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="group flex items-center gap-6 text-zinc-400 hover:text-white transition-colors uppercase font-mono text-xs md:text-sm tracking-widest">
                <span className="px-8 py-4 border border-zinc-800 group-hover:border-blue-500 transition-all group-hover:bg-blue-600/10 group-hover:text-white shadow-xl">
                  View My Mission //
                </span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-blue-500 hidden md:block"
                >
                  →
                </motion.div>
              </button>

              <a 
                href="https://www.instagram.com/yashbitu.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 border border-zinc-800 hover:border-blue-500 transition-all hover:bg-blue-600/10 text-zinc-400 hover:text-white shadow-xl uppercase font-mono text-xs tracking-widest"
              >
                <Instagram size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
