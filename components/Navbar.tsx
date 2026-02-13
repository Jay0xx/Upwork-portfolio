
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-baseline space-x-2 group cursor-pointer">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">john</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-accent/80 font-semibold">Vibe Coder</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-white/50 hover:text-accent transition-colors">About</a>
          <a href="#work" className="text-sm font-medium text-white/50 hover:text-accent transition-colors">Work</a>
          <a href="#contact" className="text-sm font-medium text-white/50 hover:text-accent transition-colors">Contact</a>
          <a href="https://www.upwork.com/freelancers/~youridhere" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-accent text-dark font-bold text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Hire on Upwork
          </a>
        </div>

        <div className="md:hidden flex flex-col space-y-1.5 cursor-pointer">
            <div className="w-6 h-0.5 bg-white/70"></div>
            <div className="w-4 h-0.5 bg-white/70 self-end"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
