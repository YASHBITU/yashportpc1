
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  "SYSTEM_BOOT_INIT... [OK]",
  "LOADING_CORE_REVENUE_LOGIC... [OK]",
  "INITIALIZING_CONVERSION_ENGINE_V4.2... [OK]",
  "MAPPING_MARKET_DOMINANCE_VECTORS... [OK]",
  "BYPASSING_COMPETITION_FIREWALLS... [OK]",
  "OPTIMIZING_DOM_INTEGRITY... [OK]",
  "ESTABLISHING_AUTHORITY_PROTOCOLS... [OK]",
  "INJECTING_PRECISION_SCRIPTS... [OK]",
  "SYSTEM_READY. [ACCESS_GRANTED]"
];

const Preloader: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let lineInterval: number;
    
    const startSequence = () => {
      lineInterval = window.setInterval(() => {
        setVisibleLines(prev => {
          if (prev >= BOOT_LINES.length) {
            clearInterval(lineInterval);
            setTimeout(() => {
              setIsVisible(false);
              document.body.style.overflow = 'auto';
            }, 500);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
    };

    // Safety check: wait for window load but don't hang forever
    if (document.readyState === 'complete') {
      startSequence();
    } else {
      window.addEventListener('load', startSequence);
      // Fallback: Start anyway after 3 seconds if load event is missed
      const fallback = setTimeout(startSequence, 3000);
      return () => {
        window.removeEventListener('load', startSequence);
        clearTimeout(fallback);
        clearInterval(lineInterval);
      };
    }

    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => setShouldRender(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="terminal-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-lg">
            <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="font-black text-xl tracking-tighter text-white">YASH RATHOD.</div>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">Live_Terminal</span>
              </div>
            </div>
            <div className="font-mono text-[11px] md:text-xs text-zinc-400 space-y-2 min-h-[200px]">
              {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={line.includes('[ACCESS_GRANTED]') ? "text-blue-500 font-bold" : ""}
                >
                  <span className="text-zinc-600 mr-2">$</span>{line}
                </motion.div>
              ))}
              {visibleLines < BOOT_LINES.length && (
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-blue-500 ml-2" />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
