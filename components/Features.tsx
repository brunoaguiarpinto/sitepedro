import React from 'react';
import { ShieldCheck, Key, RefreshCw, Gem } from 'lucide-react';

const Features: React.FC = () => {
  const services = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Consignação Segura",
      description: "Intermediação e agenciamento de veículos com total transparência e segurança jurídica."
    },
    {
      icon: <Key className="w-10 h-10" />,
      title: "Veículos Novos",
      description: "Acesso às melhores opções de automóveis, camionetas e utilitários zero km do mercado."
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Seminovos Premium",
      description: "Veículos usados rigorosamente inspecionados e com procedência garantida."
    },
    {
      icon: <Gem className="w-10 h-10" />,
      title: "Atendimento VIP",
      description: "Consultoria personalizada para encontrar o veículo que se adapta ao seu estilo de vida."
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy-950 text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Por que escolher a <span className="text-gold-500">Lord Motors</span>?
            </h2>
            <p className="text-gray-400 text-lg font-light">
                Mais que uma loja de carros, somos consultores de sonhos. Oferecemos uma experiência completa e segura para você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all duration-500 rounded-sm hover:-translate-y-2"
            >
              <div className="mb-6 text-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-navy-950 mb-3 transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;