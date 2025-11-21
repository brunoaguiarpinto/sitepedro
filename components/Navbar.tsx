import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-500 z-50 ${isScrolled ? 'bg-navy-950 shadow-2xl border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent'
        } py-0`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo Image */}
        <div className="relative w-48 h-full flex items-center">
          <a href="#home" className="block">
            {logoFailed ? (
              <div className="flex items-center gap-3">
                <div className="border-l-4 border-gold-500 pl-3 py-1">
                  <h1 className="text-2xl md:text-3xl font-serif font-black text-white tracking-widest leading-none">
                    LORD
                  </h1>
                  <span className="text-xs md:text-sm text-gold-500 tracking-[0.4em] uppercase font-sans font-bold block mt-1">
                    MOTORS
                  </span>
                </div>
              </div>
            ) : (
              <img
                src="https://minioapi.instabots.com.br/videos/logolord-removebg-preview.png"
                alt="Lord Motors"
                className="absolute top-1/2 -translate-y-1/2 h-32 md:h-40 w-auto object-contain drop-shadow-lg max-w-none"
                onError={() => setLogoFailed(true)}
              />
            )}
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-xs font-bold text-white hover:text-gold-400 transition-colors tracking-[0.2em] uppercase">Início</a>
          <a href="#inventory" className="text-xs font-bold text-white hover:text-gold-400 transition-colors tracking-[0.2em] uppercase">Estoque</a>
          <a href="#services" className="text-xs font-bold text-white hover:text-gold-400 transition-colors tracking-[0.2em] uppercase">Serviços</a>
          <a href="#contact" className="bg-gold-500 text-navy-950 px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors rounded-sm">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white hover:text-gold-500 transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-950 border-t border-white/10 p-8 flex flex-col gap-6 shadow-2xl h-screen">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">Início</a>
          <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">Estoque</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">Serviços</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-gold-500 uppercase tracking-widest">Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;