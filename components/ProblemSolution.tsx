
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProblemSolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.to(text1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(text1Ref.current, { opacity: 0, y: -50, duration: 1, delay: 0.5 })
        .to(containerRef.current, { backgroundColor: "#450a0a", duration: 1 }, "-=1")
        .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 1, delay: 0.5 })
        .to(containerRef.current, { backgroundColor: "#020617", duration: 1 }, "-=1")
        .to(text3Ref.current, { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.7)" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 bg-black px-8">
      <div className="max-w-6xl w-full h-full relative">
        
        {/* Text 1 Wrapper */}
        <div 
          ref={text1Ref} 
          className="opacity-0 translate-y-20 absolute inset-0 flex items-center justify-center text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Most websites are just <br className="hidden md:block" /> digital business cards.
          </h2>
        </div>

        {/* Text 2 Wrapper */}
        <div 
          ref={text2Ref} 
          className="opacity-0 translate-y-20 absolute inset-0 flex items-center justify-center text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-red-500">
            They look nice, <br/> but they surrender market share <br className="hidden md:block" /> to your competition.
          </h2>
        </div>

        {/* Text 3 Wrapper */}
        <div 
          ref={text3Ref} 
          className="opacity-0 scale-90 absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <p className="text-blue-500 uppercase tracking-widest font-bold mb-6 text-sm md:text-base">The Solution</p>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            I BUILD AUTHORITY <br className="hidden md:block" /> PROTOCOLS.
          </h2>
          <p className="text-lg md:text-2xl mt-10 text-zinc-400 font-medium max-w-2xl">
            Digital assets engineered to force growth and command your market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
