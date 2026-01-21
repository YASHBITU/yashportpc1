
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, TrendingUp, Zap, Target, BarChart3, ShieldAlert } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  metric: string;
  icon: React.ReactNode;
  span: string;
  img: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Titan",
    category: "Direct Response Shop",
    metric: "+142% Revenue",
    icon: <TrendingUp className="text-green-500" />,
    span: "md:col-span-2 md:row-span-2",
    img: "https://picsum.photos/seed/ecom/1200/800"
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Lead Gen Engine",
    metric: "2.4x CVR",
    icon: <Zap className="text-yellow-500" />,
    span: "md:col-span-2 md:row-span-1",
    img: "https://picsum.photos/seed/saas/800/400"
  },
  {
    id: 3,
    title: "Venture Capital",
    category: "Authority Platform",
    metric: "High Ticket Leads",
    icon: <Target className="text-red-500" />,
    span: "md:col-span-1 md:row-span-1",
    img: "https://picsum.photos/seed/vc/600/600"
  },
  {
    id: 4,
    title: "Growth Funnel",
    category: "Scaling Systems",
    metric: "-40% CPA",
    icon: <BarChart3 className="text-blue-500" />,
    span: "md:col-span-1 md:row-span-1",
    img: "https://picsum.photos/seed/growth/600/600"
  }
];

const BentoGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[900px]">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className={`${project.span} relative group overflow-hidden rounded-3xl glass cursor-not-allowed border border-zinc-800 transition-all duration-500 ${
            hoveredId !== null && hoveredId !== project.id ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
          }`}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Background Image/Video Placeholder */}
          <div className="absolute inset-0 z-0">
            <img 
              src={project.img} 
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-20 blur-[2px] transition-all duration-700"
            />
            
            {/* Maintenance Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px] z-10 flex flex-col items-center justify-center border-2 border-transparent group-hover:border-blue-500/20 transition-all">
               <motion.div
                 animate={{ opacity: [0.4, 1, 0.4] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                 className="flex flex-col items-center gap-3"
               >
                 <ShieldAlert className="text-blue-500 w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                 <div className="text-center">
                    <p className="text-blue-500 font-mono text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                      PREVIEW SOON //
                    </p>
                    <p className="text-white/40 font-mono text-[8px] md:text-[10px] uppercase tracking-widest mt-1">
                      DEPLOYING_ASSET_V4.2...
                    </p>
                 </div>
               </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
          </div>

          <div className="relative z-30 p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-blue-500/60 py-1 px-3 bg-blue-500/5 rounded-full border border-blue-500/20">
                  {project.category}
                </span>
                <Lock className="text-zinc-700 group-hover:text-blue-500/40 transition-all" size={20} />
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white/80 group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/5 transition-colors">
              <div className="p-2 bg-black/50 rounded-lg opacity-50">
                {project.icon}
              </div>
              <div>
                <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest leading-none mb-1">Status</p>
                <p className="text-sm font-mono font-black text-blue-500/60 uppercase tracking-tighter italic">INITIALIZING...</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
