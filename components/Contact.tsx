import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Fale Conosco</h2>
            <p className="text-gray-400">Estamos à disposição para realizar o seu sonho.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-gold-500/50 transition-colors group">
                <MapPin className="w-8 h-8 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold uppercase tracking-wider mb-4">Showroom</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Rua Abias Batista Filho, 211<br/>
                    Portal Itayara, Campo Grande - MS<br/>
                    CEP: 79.032-274
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-gold-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    Ver no mapa <ArrowUpRight className="w-3 h-3" />
                </a>
            </div>

            {/* Card 2 */}
             <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-gold-500/50 transition-colors group">
                <Phone className="w-8 h-8 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold uppercase tracking-wider mb-4">Atendimento</h3>
                <div className="space-y-2">
                    <a href="tel:6791949194" className="block text-gray-400 hover:text-white transition-colors text-sm">(67) 9194-9194</a>
                    <a href="tel:6793080996" className="block text-gray-400 hover:text-white transition-colors text-sm">(67) 9308-0996</a>
                    <a href="mailto:lordmotors7@gmail.com" className="block text-gray-400 hover:text-white transition-colors text-sm pt-2">lordmotors7@gmail.com</a>
                </div>
            </div>

            {/* Card 3 */}
             <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-gold-500/50 transition-colors group">
                <Clock className="w-8 h-8 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold uppercase tracking-wider mb-4">Horário</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="block text-white mb-1">Segunda a Sexta</span>
                    08:00 às 18:00
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">
                    <span className="block text-white mb-1">Sábado</span>
                    08:00 às 12:00
                </p>
            </div>
        </div>

        <div className="rounded-xl overflow-hidden h-96 border border-white/10 shadow-2xl">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.9798670174745!2d-54.5899!3d-20.4645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzUyLjIiUyA1NMKwMzUnMjMuNiJX!5e0!3m2!1sen!2sbr!4v1625680000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps"
            ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
