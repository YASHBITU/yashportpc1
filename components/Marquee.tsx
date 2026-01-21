
import React from 'react';

const techs = [
  "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "GSAP", "STRIPE", "SHOPIFY", 
  "REACT", "THREE.JS", "FRAMER MOTION", "SUPABASE", "NODE.JS"
];

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap py-10">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      
      <div className="inline-block animate-marquee">
        {techs.concat(techs).map((tech, i) => (
          <span key={i} className="text-5xl md:text-8xl font-black mx-12 text-zinc-800 hover:text-blue-600 transition-colors cursor-default tracking-tighter uppercase italic">
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
