import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-black border-b border-white/10 py-2 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex gap-6 text-[0.65rem] text-gray-400 tracking-[0.2em] font-medium uppercase">
          <span>Exclusividade</span>
          <span>•</span>
          <span>Performance</span>
          <span>•</span>
          <span>Tradição</span>
        </div>
        
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <a 
            href="https://app.lordmotors.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold-400 hover:text-white transition-colors duration-300"
          >
            <Lock className="w-3 h-3" />
            Acesso Administrativo
            <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;