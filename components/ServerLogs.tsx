
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, HardDrive, Share2 } from 'lucide-react';

interface LogEntry {
  id: string;
  user: string;
  message: string;
  timestamp: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { id: '1', user: 'SYSTEM_ADMIN', message: 'Monitoring active. Behave.', timestamp: '00:01' },
  { id: '2', user: 'ELON_MUSK', message: 'Can you fix my printer?', timestamp: '09:15' },
  { id: '3', user: 'UNKNOWN_IP', message: 'Yash owes me 20 rupees.', timestamp: '14:42' },
];

const ServerLogs: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [inputValue, setInputValue] = useState('');
  const [isInjecting, setIsInjecting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs, isInjecting]);

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleInject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isInjecting) return;

    setIsInjecting(true);
    
    // Simulate "Hacker" injection sequence
    await new Promise(resolve => setTimeout(resolve, 1200));

    const newLog: LogEntry = {
      id: Date.now().toString(),
      user: `GUEST_${Math.floor(Math.random() * 9999)}`,
      message: inputValue.trim(),
      timestamp: getCurrentTime()
    };

    setLogs(prev => [...prev, newLog]);
    setInputValue('');
    setIsInjecting(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic text-green-500">
          SERVER_LOGS.EXE
        </h2>
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
          Public Transmission Protocol // Leave your mark
        </p>
      </div>

      <div className="relative group">
        {/* Terminal Header */}
        <div className="bg-zinc-900 border-x border-t border-green-500/30 rounded-t-lg px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-950 border border-green-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-900/30 border border-green-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-900/10 border border-green-500/10" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-green-500/50 uppercase tracking-widest">
            <Terminal size={12} />
            GUESTBOOK_CORE_V1.0
          </div>
          <div className="flex gap-4 opacity-50">
            <Cpu size={12} className="text-green-500" />
            <HardDrive size={12} className="text-green-500" />
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={scrollRef}
          className="bg-black border border-green-500/30 h-[400px] overflow-y-auto p-6 font-mono text-sm space-y-3 custom-scrollbar"
        >
          <div className="text-green-900/40 text-[10px] uppercase mb-4 tracking-widest border-b border-green-900/20 pb-2">
            --- ESTABLISHING ENCRYPTED CONNECTION ---
          </div>
          
          {logs.map((log) => (
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              key={log.id} 
              className="flex gap-3 group/entry"
            >
              <span className="text-green-900 select-none">[{log.timestamp}]</span>
              <span className="text-green-500 font-bold shrink-0">{log.user}:</span>
              <span className="text-green-400/80 break-words">"{log.message}"</span>
            </motion.div>
          ))}

          {isInjecting && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-1 text-blue-500 text-[10px] uppercase font-bold"
            >
              <div>&gt; BYPASSING FIREWALL... [OK]</div>
              <div>&gt; ENCRYPTING PACKET... [OK]</div>
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                &gt; INJECTING DATA_STREAM...
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <form 
          onSubmit={handleInject}
          className="bg-zinc-950 border-x border-b border-green-500/30 rounded-b-lg p-4 flex flex-col md:flex-row gap-4 items-center"
        >
          <div className="flex-grow flex items-center gap-2 w-full">
            <span className="text-green-500 font-bold">$</span>
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter transmission..."
              disabled={isInjecting}
              className="bg-transparent border-none outline-none text-green-400 placeholder:text-green-900/50 w-full font-mono text-sm py-1"
            />
            {!isInjecting && (
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-green-500 shrink-0"
              />
            )}
          </div>
          
          <button 
            type="submit"
            disabled={isInjecting || !inputValue.trim()}
            className="w-full md:w-auto px-6 py-2 bg-green-900/20 hover:bg-green-500/20 border border-green-500/40 text-green-500 font-mono text-xs font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center gap-2 group/btn"
          >
            <Share2 size={14} className="group-hover/btn:rotate-12 transition-transform" />
            INJECT_MSG
          </button>
        </form>

        {/* Glitch Overlay for Hover */}
        <div className="absolute inset-0 pointer-events-none border border-green-500/0 group-hover:border-green-500/10 transition-colors duration-500 rounded-lg" />
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #052e16;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #14532d;
        }
      `}</style>
    </div>
  );
};

export default ServerLogs;
