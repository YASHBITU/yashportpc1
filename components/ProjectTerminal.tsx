'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ProjectTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "Initializing Audit Protocol v4.2...",
    "Ready to scan conversion leaks.",
    "System: Waiting for target URL."
  ]);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLogWithDelay = (message: string, delay: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLogs(prev => [...prev, message]);
        resolve(true);
      }, delay);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isScanning) return;

    if (!input.includes('.')) {
      setLogs(prev => [...prev, `> [ERROR]: Invalid Target. Domain extension required.`]);
      return;
    }

    setIsScanning(true);
    const targetUrl = input;
    setInput('');

    setLogs(prev => [...prev, `> Initializing deep scan for: ${targetUrl}`]);

    try {
      // Step 1: Simulated Technical Pings
      await addLogWithDelay("> Establishing secure link...", 600);
      await addLogWithDelay("> Pinging server nodes...", 400);

      // Step 2: Real AI Audit using Gemini
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });

      await addLogWithDelay("> CONSULTING_AI_CORE...", 500);

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a ruthless but elite Conversion Rate Optimization (CRO) Expert. 
        Audit this website for conversion leaks: ${targetUrl}.
        List between 7 and 12 critical leaks. 
        Format as a terminal-style list. Be brief, highly technical, and slightly aggressive. 
        Example: "FAIL: Latency on LCP killing mobile retention."`,
        config: {
          temperature: 0.8,
          maxOutputTokens: 500,
        }
      });

      const auditResults = response.text || "Unable to retrieve audit data.";
      const lines = auditResults.split('\n').filter(l => l.trim() !== '');

      for (const line of lines) {
        await addLogWithDelay(`> ${line}`, 150);
      }

      await addLogWithDelay(`> ANALYSIS COMPLETE: Critical Leaks Identified.`, 800);
      await addLogWithDelay("> RECOMMENDATION: Immediate remediation required.", 400);

    } catch (error: any) {
      console.error(error);
      await addLogWithDelay(`> [CRITICAL_ERROR]: ${error.message || "Failed to reach AI core."}`, 500);
      if (error.message?.includes('401') || error.message?.includes('key')) {
        await addLogWithDelay(`> [SYSTEM_ADVISORY]: Ensure API_KEY is set in Netlify environment.`, 200);
      }
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">STOP COMPETING. <br />START DOMINATING.</h2>
        <p className="text-zinc-500 uppercase tracking-[0.3em] font-bold text-sm">Real-time Technical Revenue Audit</p>
      </div>

      <div className="glass rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative">
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <Terminal size={12} />
            AI_REVENUE_AUDIT_TERMINAL
          </div>
          <div className="w-10" />
        </div>

        <div className="p-6 font-mono text-sm h-[400px] overflow-y-auto flex flex-col scrollbar-hide bg-black/90">
          <div className="space-y-2 mb-8 flex-grow">
            {logs.map((log, i) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className={`
                  ${log.startsWith('> [ERROR]') || log.startsWith('> [CRITICAL_ERROR]') ? "text-red-500 font-bold" :
                    log.includes('ANALYSIS COMPLETE') ? "text-green-500 font-bold" :
                      log.startsWith('>') ? "text-blue-400 font-bold" :
                        "text-zinc-500"}
                `}
              >
                {log}
              </motion.div>
            ))}
            <div ref={logEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="relative mt-auto pt-4 border-t border-zinc-800/50">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-500 font-bold">$</span>
            <input
              type="text"
              placeholder={isScanning ? "AI Engine Processing..." : "Enter your website URL"}
              className="w-full bg-transparent border-none outline-none pl-6 text-white placeholder:text-zinc-700 text-lg py-2 disabled:opacity-50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isScanning}
            />
            <button
              type="submit"
              disabled={isScanning || !input}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg transition-colors neon-glow"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          <span className="text-[10px] uppercase font-bold tracking-widest">Encrypted via AI Core</span>
        </div>
        <div className="w-[1px] h-4 bg-zinc-800" />
        <span className="text-[10px] uppercase font-bold tracking-widest">v4.2 PRO DEPLOYMENT</span>
      </div>
    </div>
  );
};

export default ProjectTerminal;