/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  ChevronRight, 
  Lock, 
  Users, 
  Star,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Marquee = () => {
  const phrases = [
    "No competimos, Lideramos",
    "para repeticiones esta el gym, no tu ex",
    "No pain...No Gain",
    "ENTRENAMIENTO REAL",
    "COMUNIDAD AREA32",
    "SUPERÁ TUS LÍMITES",
    "TU MEJOR VERSIÓN",
    "KM 32 & KM 36",
  ];

  return (
    <div className="bg-brand-orange py-2 overflow-hidden whitespace-nowrap border-y border-black relative z-40">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {phrases.map((phrase, j) => (
              <span key={j} className="text-black font-black uppercase text-sm md:text-base mx-8 tracking-tighter">
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Membresías', href: '#membresias' },
    { name: 'Promos', href: '#promos' },
    { name: 'Tienda', href: 'https://area323.mitiendanube.com', external: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isOpen || scrolled ? 'bg-black py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter flex items-center italic px-2 py-1 rounded-lg">
          <span className="shimmer-text-white">AREA</span>
          <span className="shimmer-text-orange ml-1">32</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all"
          >
            Unite Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black uppercase tracking-tighter hover:text-brand-orange"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-orange text-black py-4 rounded-xl text-center font-black uppercase tracking-tighter"
            >
              Unite Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-4 rounded-2xl mb-8">
            <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 text-3xl md:text-6xl font-black uppercase tracking-tighter italic">
              <span className="shimmer-text-white">¡¡ No competimos</span>
              <span className="shimmer-text-orange">Lideramos !!</span>
            </div>
          </div>
          <p className="text-base md:text-lg font-medium max-w-2xl mx-auto mb-10 text-white/80">
            El espacio donde tu esfuerzo se convierte en resultados reales.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#sedes" 
              className="w-full md:w-auto bg-brand-orange text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter text-base hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Ver Sedes <ArrowRight size={18} />
            </a>
            <a 
              href="#membresias" 
              className="w-full md:w-auto border border-white/20 hover:border-white px-8 py-4 rounded-full font-black uppercase tracking-tighter text-base transition-all"
            >
              Membresías
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LocationCard = ({ title, address, ig, phone, shop, hours, mapUrl }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-sm flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-black uppercase tracking-tighter">{title}</h3>
        <div className="bg-brand-orange/10 p-2 rounded-xl">
          <MapPin className="text-brand-orange" size={20} />
        </div>
      </div>
      
      <div className="space-y-4 flex-grow">
        <div className="flex items-start gap-3">
          <div className="mt-1 text-brand-orange"><MapPin size={16} /></div>
          <p className="text-white/70 text-xs leading-relaxed">{address}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-brand-orange"><Clock size={16} /></div>
          <div className="text-xs">
            <p className="text-white/90 font-bold uppercase tracking-tighter">Horarios</p>
            <p className="text-white/60">{hours.week}</p>
            <p className="text-white/60">{hours.sat}</p>
            <p className="text-white/60">{hours.sun}</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full h-32 rounded-2xl overflow-hidden border border-white/10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="pt-4 border-t border-white/5 space-y-3">
          <a href={`https://instagram.com/${ig}`} target="_blank" className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors">
            <Instagram size={18} />
            <span className="text-xs font-bold">@{ig}</span>
          </a>
          <a href={`https://wa.me/${phone}`} target="_blank" className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors">
            <Phone size={18} />
            <span className="text-xs font-bold">{phone}</span>
          </a>
          {shop && (
            <a href={`https://${shop}`} target="_blank" className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors">
              <ShoppingBag size={18} />
              <span className="text-xs font-bold">Tienda Online</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MembershipCard = ({ title, price, features, highlight = false }: any) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`relative p-6 rounded-3xl border ${highlight ? 'bg-brand-orange border-brand-orange text-black' : 'bg-zinc-900 border-white/5 text-white'}`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          Más Popular
        </div>
      )}
      <h4 className="text-lg font-black uppercase tracking-tighter mb-1">{title}</h4>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl font-black">{price}</span>
        <span className={`text-xs font-bold uppercase ${highlight ? 'text-black/60' : 'text-white/40'}`}>/ mes</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-xs font-medium">
            <ChevronRight size={14} className={highlight ? 'text-black' : 'text-brand-orange'} />
            {f}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => window.open('https://wa.me/541130975487', '_blank')}
        className={`w-full py-3 rounded-xl font-black uppercase tracking-tighter text-sm transition-all ${highlight ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-brand-orange hover:text-white'}`}
      >
        Elegir Plan
      </button>
    </motion.div>
  );
};

const ServiceSection = ({ title, desc, image, reverse = false, children, compact = false }: any) => {
  return (
    <div className={`${compact ? 'py-12' : 'py-20'} overflow-hidden`}>
      <div className={`max-w-7xl mx-auto px-6 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
        {/* Image/Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          {children ? children : (
            <div className="service-image-container">
              <img 
                src={image} 
                alt={title} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 italic">
            <span className={reverse ? "shimmer-text-orange" : "shimmer-text-white"}>{title.split(' ')[0]}</span>{' '}
            <span className={reverse ? "shimmer-text-white" : "shimmer-text-orange"}>{title.split(' ').slice(1).join(' ')}</span>
          </h3>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
            {desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="bg-black pt-16">
      <div className="text-center mb-6 px-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
          <span className="shimmer-text-white">Lo que</span> <span className="shimmer-text-orange">Ofrecemos</span>
        </h2>
        <p className="text-white/40 mt-2 max-w-2xl mx-auto uppercase text-[10px] font-bold tracking-[0.3em]">Excelencia en cada detalle</p>
      </div>

      {/* 1. Salones de Musculación */}
      <ServiceSection 
        title="2 Salones de Musculación"
        desc="Contamos con dos amplios salones diseñados para que entrenes con total comodidad. Espacios ventilados, iluminados y con la mejor energía para tus sesiones de fuerza."
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
        compact={true}
      >
        <div className="flex items-start gap-4">
          <div className="service-image-container flex-1">
            <img 
              src="salon1.png" 
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-110"
              alt="Salón 1"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="service-image-container flex-1 mt-12">
            <img 
              src="salon2.png" 
              className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-110"
              alt="Salón 2"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </ServiceSection>

      {/* 2. Rutina Digital */}
      <ServiceSection 
        title="Rutina Digital"
        desc="Llevá tu progreso en el bolsillo. Con nuestra rutina digital, escaneás tu QR y tenés acceso instantáneo a tus ejercicios, series y repeticiones. Sin papeles, sin vueltas."
        reverse={true}
      >
        <div className="flex justify-center">
          <div className="relative w-64 h-[500px] bg-zinc-950 rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col p-0">
            {/* Phone Screen Background */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-20"
                alt="Gym Background"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-20" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full pt-10 pb-6 px-5">
              {/* QR at Top */}
              <div className="w-32 h-32 bg-white p-2 rounded-2xl mx-auto mb-6 shadow-lg">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Area32Gym" alt="QR Code" className="w-full h-full" />
              </div>

              {/* Routine Example in Middle */}
              <div className="flex-grow space-y-3">
                <p className="text-brand-orange font-black uppercase tracking-tighter text-center text-lg italic mb-4">Tu Rutina Hoy</p>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <p className="text-[10px] text-white/40 uppercase font-black">Pecho / Tríceps</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-bold">Press Banca</span>
                    <span className="text-[10px] bg-brand-orange text-black px-2 py-0.5 rounded-full font-black">4 x 12</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold">Aperturas</span>
                    <span className="text-[10px] bg-brand-orange text-black px-2 py-0.5 rounded-full font-black">3 x 15</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold">Fondos</span>
                    <span className="text-[10px] bg-brand-orange text-black px-2 py-0.5 rounded-full font-black">4 x 10</span>
                  </div>
                </div>
              </div>

              {/* Moving Line at Bottom */}
              <div className="mt-auto">
                <p className="text-[8px] text-white/40 uppercase font-black text-center mb-2 tracking-widest">Escaneando Progreso...</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-brand-orange shadow-[0_0_10px_rgba(255,107,0,0.8)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServiceSection>

      {/* 3. Atención Personalizada */}
      <ServiceSection 
        title="Atención Personalizada"
        desc="No estás solo. Nuestros instructores están presentes durante todo el día para corregir tu técnica, motivarte y asegurar que cada repetición cuente. Calidad humana al servicio de tu entrenamiento."
        image="atencion1.png"
      />

      {/* 4. Máquinas de Calidad */}
      <ServiceSection 
        title="Máquinas de Calidad"
        desc="Trabajamos con equipamiento de primer nivel. Máquinas de biomecánica perfecta que garantizan un estímulo muscular óptimo y minimizan el riesgo de lesiones."
        image="maquina.png"
        reverse={true}
      />

      {/* 5. Masajista */}
      <ServiceSection 
        title="Servicio de Masajista"
        desc="La recuperación es parte del entrenamiento. Ofrecemos servicio de masajista deportivo para descargar tensiones y acelerar tu vuelta al ruedo."
        image="masajista.jpg"
      />

      {/* 6. Nutrición Deportiva */}
      <ServiceSection 
        title="Nutrición Deportiva"
        desc="Potenciá tus resultados con el combustible adecuado. Contamos con asesoramiento en nutrición deportiva para que tu dieta esté a la altura de tus metas."
        image="nutricion2.png"
        reverse={true}
      />
    </section>
  );
};

export default function App() {
  const hours = {
    week: "Lun a Vie: 07:00hs a 23:00hs",
    sat: "Sábados: 08:00hs a 18:00hs",
    sun: "Domingos: 10:00hs a 18:00hs"
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Services />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-white/10 w-full" />
        </div>

        {/* Sedes Section */}
        <section id="sedes" className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-3">Nuestras <span className="text-brand-orange">Sedes</span></h2>
                <p className="text-white/60 max-w-md text-base">Elegí la sede que mejor te quede. Mismo nivel, misma exigencia.</p>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl border border-white/5">
                <Lock className="text-brand-orange" size={20} />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Servicio Extra</p>
                  <p className="text-xs font-bold">Alquiler de Lockers disponible</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <LocationCard 
                title="KM 32"
                address="Dr. Simon Perez 6048, González Catán 1759"
                ig="areacrew.gym"
                phone="1130975487"
                shop="area323.mitiendanube.com"
                hours={hours}
                mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4357!2d-58.6186!3d-34.7571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc43e06f9d3b7%3A0x6a6a6a6a6a6a6a6a!2sDr.%20Sim%C3%B3n%20P%C3%A9rez%206048%2C%20B1759%20Gonz%C3%A1lez%20Cat%C3%A1n!5e0!3m2!1ses!2sar!4v1708990000000!5m2!1ses!2sar"
              />
              <LocationCard 
                title="KM 36"
                address="Cañuelas 3703, Buenos Aires, Argentina 1763"
                ig="neocrew.gym"
                phone="1130539083"
                hours={hours}
                mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.1234!2d-58.6345!3d-34.7890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc43e06f9d3b7%3A0x6a6a6a6a6a6a6a6a!2sCa%C3%B1uelas%203703%2C%20B1763%20Virrey%20del%20Pino!5e0!3m2!1ses!2sar!4v1708990000000!5m2!1ses!2sar"
              />
            </div>
          </div>
        </section>

        {/* Membresias Section */}
        <section id="membresias" className="py-20 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="bg-brand-orange text-black p-4 md:p-6 rounded-3xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border-4 border-white"
            >
              <div className="flex items-center gap-4">
                <div className="bg-black text-white p-4 rounded-2xl animate-pulse">
                  <Star size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">¡Clase de Prueba Gratis!</h3>
                  <p className="font-bold text-sm md:text-base opacity-80">Vení a conocernos sin compromiso. El primer paso es por nuestra cuenta.</p>
                </div>
              </div>
              <button 
                onClick={() => window.open('https://wa.me/541130975487', '_blank')}
                className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform"
              >
                Pedir mi Clase Gratis
              </button>
            </motion.div>

            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-3">Membresías</h2>
              <p className="text-white/60 text-base">Planes diseñados para tu ritmo de vida.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MembershipCard 
                title="Mes Libre"
                price="$35.000"
                features={["Acceso ilimitado", "Todas las sedes", "Asesoramiento", "Sin matrícula"]}
                highlight={true}
              />
              <MembershipCard 
                title="3 Veces x Semana"
                price="$28.000"
                features={["12 clases mensuales", "Acceso a máquinas", "Seguimiento básico", "Flexibilidad horaria"]}
              />
              
              {/* Beneficios Especiales */}
              <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-3xl flex flex-col justify-center">
                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
                  <Star className="text-brand-orange" size={20} /> Beneficios (Full)
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="font-bold text-white/70 text-sm">Jubilados</span>
                    <span className="text-lg font-black text-brand-orange">$20.000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="font-bold text-white/70 text-sm">Beromama</span>
                    <span className="text-lg font-black text-brand-orange">$24.500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white/70 text-sm">UNLAM</span>
                    <span className="text-lg font-black text-brand-orange">$28.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promos Section */}
        <section id="promos" className="py-20 px-6 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 blur-[100px] rounded-full -mr-40 -mt-40" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-grow bg-white/10" />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Promociones</h2>
              <div className="h-px flex-grow bg-white/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[1.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="bg-brand-orange text-black p-4 rounded-2xl">
                  <Users size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Promo 2 Personas</h3>
                  <p className="text-white/60 text-sm mb-3">Entrenar acompañado rinde más. Vení con un amigo y ahorren.</p>
                  <div className="text-3xl font-black text-brand-orange mb-4">$32.000 <span className="text-xs text-white/40 uppercase tracking-widest">c/u</span></div>
                  <button 
                    onClick={() => window.open('https://wa.me/541130975487', '_blank')}
                    className="bg-white text-black px-6 py-2 rounded-xl font-black uppercase tracking-tighter text-xs hover:bg-brand-orange hover:text-white transition-all"
                  >
                    Elegir Promo
                  </button>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[1.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="bg-white text-black p-4 rounded-2xl">
                  <Star size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Promo 2 Meses</h3>
                  <p className="text-white/60 text-sm mb-3">Asegurá tu constancia. Pago adelantado individual con descuento.</p>
                  <div className="text-3xl font-black text-white mb-4">$64.000 <span className="text-xs text-white/40 uppercase tracking-widest">Total</span></div>
                  <button 
                    onClick={() => window.open('https://wa.me/541130975487', '_blank')}
                    className="bg-brand-orange text-black px-6 py-2 rounded-xl font-black uppercase tracking-tighter text-xs hover:bg-white hover:text-black transition-all"
                  >
                    Elegir Promo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-brand-orange text-black text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">¿Listo para liderar?</h2>
            <p className="text-lg md:text-xl font-bold mb-10 opacity-80">No esperes a mañana. El momento es ahora.</p>
            <a 
              href="https://wa.me/541130975487" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-lg hover:scale-105 transition-transform"
            >
              Consultar por WhatsApp <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-black tracking-tighter italic px-2 py-1 rounded-lg">
              <span className="shimmer-text-white">AREA</span>
              <span className="shimmer-text-orange ml-1">32</span>
            </div>
            <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em]">
              No competimos, Lideramos.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 md:mr-auto md:ml-12">
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-x-5">
              <a href="#" className="text-white/20 hover:text-brand-orange transition-colors uppercase text-[8px] font-black tracking-widest">Inicio</a>
              <a href="#sedes" className="text-white/20 hover:text-brand-orange transition-colors uppercase text-[8px] font-black tracking-widest">Sedes</a>
              <a href="#membresias" className="text-white/20 hover:text-brand-orange transition-colors uppercase text-[8px] font-black tracking-widest">Membresías</a>
              <a href="#promos" className="text-white/20 hover:text-brand-orange transition-colors uppercase text-[8px] font-black tracking-widest">Promociones</a>
            </div>

            <div className="text-center md:text-left space-y-1">
              <p className="text-[7px] font-black uppercase tracking-[0.3em] text-white/10">Sede KM 32</p>
              <div className="flex flex-col gap-0.5">
                <a href="https://wa.me/541130975487" target="_blank" className="text-[8px] text-white/20 hover:text-brand-orange transition-colors flex items-center justify-center md:justify-start gap-1.5">
                  <Phone size={8} /> 11 3097-5487
                </a>
                <a href="https://instagram.com/areacrew.gym" target="_blank" className="text-[8px] text-white/20 hover:text-brand-orange transition-colors flex items-center justify-center md:justify-start gap-1.5">
                  <Instagram size={8} /> @areacrew.gym
                </a>
                <p className="text-[8px] text-white/20 flex items-center justify-center md:justify-start gap-1.5">
                  <MapPin size={8} /> Dr. Simon Perez 6048
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col">
            <p className="text-white/10 text-[9px] font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} Area32 Gym.
            </p>
            <p className="text-white/5 text-[8px] font-medium uppercase tracking-widest leading-tight">
              Todos los derechos reservados.
            </p>
            <a 
              href="https://instagram.com/santy.samaniego" 
              target="_blank" 
              className="text-[8px] font-medium uppercase tracking-[0.1em] text-white/10 hover:text-white transition-colors"
            >
              Web By <span className="font-black">@santy.samaniego</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
