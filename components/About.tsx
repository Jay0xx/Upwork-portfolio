
import React from 'react';

const About: React.FC = () => {
  const tags = [
    "Prompt Engineering", 
    "AI Workflows (Gemini / Claude)", 
    "Conversion-Focused Design", 
    "Quiet Luxury Vibes", 
    "Sustainable Aesthetics", 
    "Mobile-First Mindset", 
    "Still Learning & Iterating"
  ];

  return (
    <section id="about" className="py-48 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8">
          <h2 className="font-display text-[10px] uppercase tracking-[0.5em] text-accent/80 font-bold mb-12">The Perspective</h2>
          <p className="font-display text-3xl md:text-5xl leading-[1.05] font-medium text-white/95 mb-12 tracking-tighter">
            I’m John from Nigeria. I got into vibe coding because I love beautiful, intentional design but didn’t want years of traditional coding grind.
          </p>
          <p className="text-white/40 leading-relaxed text-lg md:text-xl font-light max-w-3xl">
            Now I guide AI with detailed prompts to build landing pages that feel like high-end agencies — fast, mobile-first, conversion-focused. My pages emphasize calm vibes, clean hierarchy, trust signals, and real storytelling. Still leveling up every day, but the results already speak: quiet luxury, sustainable elegance, slow-morning energy.
          </p>
        </div>
        
        <div className="lg:col-span-4 flex flex-wrap gap-3 pt-4 lg:pt-36">
          {tags.map((tag) => (
            <span key={tag} className="px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.03] text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-accent hover:border-accent/20 transition-all cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
