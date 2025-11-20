import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="mb-6">
                <span className="text-2xl font-serif font-bold text-white tracking-widest">
                    LORD <span className="text-gold-500">MOTORS</span>
                </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Transformando sonhos em realidade. A Lord Motors é sinônimo de qualidade e procedência no mercado automotivo de luxo.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                </a>
                 <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-300">
                    <Facebook className="w-4 h-4" />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-8 text-xs">Menu</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300">Início</a></li>
              <li><a href="#inventory" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300">Estoque</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300">Serviços</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors hover:pl-2 duration-300">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-8 text-xs">Localização</h4>
            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span>
                Rua Abias Batista Filho, 211<br/>
                Portal Itayara<br/>
                Campo Grande - MS
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-8 text-xs">Sistema</h4>
            <p className="text-gray-500 text-sm mb-4">
              Acesso restrito para equipe administrativa.
            </p>
            <a 
              href="https://app.lordmotors.com.br"
              className="inline-block px-6 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300"
            >
              Login Administrativo
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-gray-600 text-[0.65rem] uppercase tracking-wider">
            <p className="mb-1">&copy; {new Date().getFullYear()} Lord Motors. Todos os direitos reservados.</p>
            <p>Arantes Automóveis Multimarcas Ltda - CNPJ: 48.234.972/0001-77</p>
          </div>
          <p className="text-gray-700 text-[0.65rem] uppercase tracking-wider">
             Developed by AI Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;