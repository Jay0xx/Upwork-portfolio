
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[95vh] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden pt-20">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-4xl relative z-10">
        <h1 className="font-display text-[14vw] md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] mb-12 text-white">
          John. <br />
          <span className="bg-gradient-to-r from-accent via-cyan-200 to-purple-400 bg-clip-text text-transparent">Vibe Coder.</span>
        </h1>
        <p className="font-sans text-lg md:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-16 leading-relaxed tracking-tight">
          Beginner-to-intermediate at vibe coding — I craft prompts that make AI deliver clean, premium e-commerce pages that convert. No syntax battles, just good taste + good results.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
          <a href="#work" className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-black transition-all duration-500 transform hover:-translate-y-1 shadow-lg">
            See my drops
          </a>
          <a href="https://www.upwork.com/freelancers/~youridhere" className="group flex items-center space-x-2 text-white/70 hover:text-white transition-colors py-4 px-6 border border-white/5 hover:border-white/20 rounded-full">
            <span>Let's vibe on Upwork</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
