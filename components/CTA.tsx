
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" class="py-72 px-6 text-center max-w-7xl mx-auto relative border-t border-white/5">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px] pointer-events-none opacity-40"></div>
      
      <div class="relative z-10">
        <h2 class="font-display text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter mb-20 leading-[0.85] text-white">
          Ready for a landing page<br />that <span class="italic text-accent bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent underline decoration-accent/10 underline-offset-[12px]">feels right?</span>
        </h2>
        
        <a 
          href="https://www.upwork.com/freelancers/~01yourid" 
          target="_blank"
          class="inline-flex items-center space-x-10 bg-accent text-black px-16 py-10 rounded-full text-xl md:text-3xl font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-[0_50px_100px_rgba(34,211,238,0.3)] group"
        >
          <span>Message me on Upwork</span>
          <svg class="w-12 h-12 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;