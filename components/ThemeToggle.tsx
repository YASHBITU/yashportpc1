
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ShieldAlert } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleLightModeClick = () => {
    // 1. The Flashbang
    setIsFlashing(true);
    
    // Lock scroll immediately
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setIsFlashing(false);
      // 2. The Lock / Snap back to Dark Mode logic (happens visually)
      setShowOverlay(true);

      // 3. The Auto-Exit after 3 seconds
      setTimeout(() => {
        setShowOverlay(false);
        document.body.style.overflow = 'auto';
      }, 3000);
    }, 100); // 0.1s flash
  };

  return (
    <div className="relative pointer-events-auto">
      {/* The Switch UI */}
      <div className="flex items-center gap-4 bg-zinc-900/80 border border-zinc-800 p-1.5 rounded-full backdrop-blur-md">
        <button 
          onClick={handleLightModeClick}
          className="p-2 rounded-full text-zinc-600 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 group"
          title="Switch to Light Mode"
        >
          <Sun size={18} className="group-hover:rotate-45 transition-transform duration-500" />
        </button>
        <div className="p-2 rounded-full bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <Moon size={18} />
        </div>
      </div>

      {/* 0.1s Pure White Flashbang */}
      <AnimatePresence>
        {isFlashing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Access Denied Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Red Pulsing Aura */}
            <div className="absolute inset-0 bg-red-900/10 animate-pulse pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10"
            >
              <ShieldAlert size={80} className="text-red-600 mb-8 mx-auto drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
              
              <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-tighter uppercase mb-4 animate-pulse">
                ACCESS DENIED
              </h1>
              
              <div className="space-y-4 font-mono">
                <p className="text-zinc-400 text-lg md:text-xl tracking-tight">
                  System Override: <span className="text-white font-bold italic">Yash hates light mode.</span>
                </p>
                
                <div className="pt-8 flex flex-col items-center gap-2">
                   <div className="w-48 h-1 bg-zinc-900 relative overflow-hidden">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="absolute inset-0 bg-red-600"
                      />
                   </div>
                   <p className="text-[10px] text-red-600/60 uppercase tracking-[0.5em]">Forcing Dark Protocol...</p>
                </div>
              </div>
            </motion.div>

            {/* Scanning Line */}
            <motion.div 
              animate={{ y: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 top-0 w-full h-[2px] bg-red-600/20 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
