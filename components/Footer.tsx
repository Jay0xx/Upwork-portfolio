
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] tracking-[0.3em] uppercase font-bold">
        <div className="mb-8 md:mb-0">
          © 2026 JOHN • VIBE CODER • MADE WITH INTENTION
        </div>
        
        <div className="flex space-x-12">
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
