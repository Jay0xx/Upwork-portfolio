
import React from 'react';

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  highlight: string;
  category: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Pause Coffee",
    url: "https://pause-coffee.vercel.app/",
    category: "Coffee / Lifestyle",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "Text-heavy serenity — prompted for intentional spacing, spaced-out typography (\"P a u s e .\"), and honest storytelling about presence over flash. Pure calm ritual.",
    highlight: "Quiet moments, honest coffee — presence over noise"
  },
  {
    id: 2,
    name: "Lumen Wear",
    url: "https://lumen-wear.vercel.app/",
    category: "Fashion / Eco-Conscious",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "Prompted AI for neutral elegance, premium natural fabrics story, clean product grid, strong sustainability messaging, and high-trust testimonials.",
    highlight: "Substance and silence — sustainable luxury without shouting"
  },
  {
    id: 3,
    name: "Lumina Shoes",
    url: "https://lumina-shoes.vercel.app/",
    category: "Footwear / Quiet Luxury",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800&h=1000",
    description: "Guided AI to prestige media badges (Vogue/GQ), elegant product showcase, timeless typography, and a heavy focus on comfort + craftsmanship.",
    highlight: "Timeless design that ages beautifully — prestige feel, everyday wear"
  }
];

const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-48 px-6 max-w-7xl mx-auto">
      <div className="mb-28 text-center md:text-left">
        <h2 className="font-display text-[10px] uppercase tracking-[0.5em] text-accent/80 font-bold mb-6">Prompted Into Existence</h2>
        <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">Recent Drops.</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col h-full">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 mb-10 shadow-2xl">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-8 left-8">
                <span className="px-5 py-2 bg-black/60 backdrop-blur-xl rounded-full text-[9px] uppercase tracking-widest font-bold text-accent border border-white/5">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/60">Vibe-coded with Gemini • Tailwind output</span>
              </div>
            </a>
            
            <div className="flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h4 className="font-display text-3xl font-bold text-white tracking-tight">{project.name}</h4>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-accent transition-colors pt-1">
                    <svg className="w-7 h-7 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
              </div>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 font-light italic">
                {project.description}
              </p>
              <div className="border-t border-white/5 pt-8 mt-auto">
                <p className="text-sm font-display text-white/90 tracking-tight leading-relaxed font-medium">
                  "{project.highlight}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
