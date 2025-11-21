import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Showroom" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pt-20 pb-40">
        <div className="max-w-5xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold-500"></div>
            <span className="text-gold-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Excelência Automotiva
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
            A Conquista do <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">
              Extraordinário
            </span>
          </h1>
          
          <p className="text-gray-200 text-base md:text-xl max-w-2xl font-light leading-relaxed mb-12 border-l-4 border-white/20 pl-6">
            Compra, venda e consignação de veículos de todas as categorias, dos utilitários aos esportivos exclusivos. Transparência e garantia Lord Motors em cada negociação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <a 
                href="#inventory" 
                className="px-10 py-4 bg-gold-500 text-navy-950 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 text-center shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
                Ver Estoque
            </a>
            <a 
                href="#contact" 
                className="px-10 py-4 border border-white text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-navy-950 transition-all duration-300 text-center"
            >
                Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;