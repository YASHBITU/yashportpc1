
'use client';

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import AboutMe from '../components/AboutMe';
import BentoGrid from '../components/BentoGrid';
import Marquee from '../components/Marquee';
import ProjectTerminal from '../components/ProjectTerminal';
import Preloader from '../components/Preloader';
import HackerText from '../components/HackerText';
import ThemeToggle from '../components/ThemeToggle';
import ServerLogs from '../components/ServerLogs';

export default function Home() {
  useEffect(() => {
    // Reset scroll on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-blue-600 selection:text-white" style={{ position: 'relative', width: '100%' }}>
      <Preloader />
      
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center pointer-events-none">
        <div className="font-black text-xl tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference text-white">YASH RATHOD.</div>
        <div className="flex gap-4 md:gap-10 items-center pointer-events-auto">
          <div className="hidden lg:flex gap-10 items-center">
            <a href="#about" className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#work" className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors">Work</a>
            <a href="#logs" className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white transition-colors">Logs</a>
            <a href="#contact" className="text-xs uppercase tracking-[0.2em] font-black px-6 py-3 bg-white text-black rounded-sm hover:bg-blue-600 hover:text-white transition-all">Audit My Site</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main className="relative z-10">
        <section id="hero"><Hero /></section>
        <section id="problem-solution"><ProblemSolution /></section>
        <section id="about"><AboutMe /></section>
        <section id="work" className="py-32 px-4 md:px-12 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
              <HackerText text="DOMINANCE" /> <br/>
              <HackerText text="VECTORS." delay={400} />
            </h2>
            <BentoGrid />
          </div>
        </section>
        <section className="bg-zinc-950 py-20 border-y border-zinc-900"><Marquee /></section>
        <section id="logs" className="bg-black"><ServerLogs /></section>
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-black px-4"><ProjectTerminal /></section>
      </main>
      
      <footer className="py-12 border-t border-zinc-900 bg-black text-center text-zinc-600">
        <p className="text-sm uppercase tracking-widest font-bold">© {new Date().getFullYear()} Yash Rathod.</p>
      </footer>
    </div>
  );
}
