
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface HackerTextProps {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";

const HackerText: React.FC<HackerTextProps> = ({ text, className = "", delay = 0, style }) => {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const iterationRef = useRef(0);
  const intervalRef = useRef<number | null>(null);

  const startScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    iterationRef.current = 0;
    
    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterationRef.current) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      if (iterationRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iterationRef.current += 1 / 3; 
    }, 30);
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(startScramble, delay);
      return () => {
        clearTimeout(timer);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isInView, text, delay]);

  return (
    <span 
      ref={containerRef} 
      className={`inline-block ${className}`}
      style={style}
    >
      {displayText || text}
    </span>
  );
};

export default HackerText;
