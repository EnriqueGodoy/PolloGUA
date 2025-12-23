
import React from 'react';
import { PRODUCTS, SAUCES, REVIEWS, WHATSAPP_NUMBER } from './constants';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5 px-8 py-5">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#d4af37] flex items-center justify-center font-luxury font-black text-[#d4af37] text-2xl rotate-45 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <span className="-rotate-45">G</span>
        </div>
        <span className="font-luxury font-black text-2xl tracking-widest text-white uppercase">Pollo<span className="text-[#d4af37]">Gua</span></span>
      </div>
      <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-[0.2em] text-white/70">
        <a href="#menu" className="hover:text-[#d4af37] transition-all">MENÚ</a>
        <a href="#beneficios" className="hover:text-[#d4af37] transition-all">EXPERIENCIA</a>
        <a href="#testimonios" className="hover:text-[#d4af37] transition-all">CRÍTICAS</a>
      </div>
      <button 
        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
        className="btn-luxury text-black px-8 py-3 rounded-none font-black text-xs tracking-widest hover:scale-105 active:scale-95 shadow-lg"
      >
        RESERVAR AHORA
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative pt-40 pb-32 px-8 min-h-screen flex items-center overflow-hidden bg-black">
    {/* Fondo decorativo de lujo */}
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#1a1a1a_0%,#000000_100%)] opacity-80" />
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4af37] rounded-full blur-[180px] opacity-10" />
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="space-y-10">
        <div className="inline-flex items-center gap-3 border-l-2 border-[#d4af37] pl-6 py-2">
          <span className="text-[#d4af37] tracking-[0.3em] font-bold text-xs uppercase">Gastronomía de Autor</span>
        </div>
        <h1 className="font-luxury text-7xl md:text-9xl font-black text-white leading-none tracking-tighter italic">
          La Excelencia <br />
          <span className="gold-text">del Pollo.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-lg leading-relaxed font-light italic">
          Descubra el sabor que ha redefinido los fines de semana en Paraguay. Una herencia de fuego, tiempo y los ingredientes más finos de la región.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
            className="btn-luxury text-black px-12 py-6 font-black text-sm tracking-[0.2em] hover:scale-105 transition-transform flex items-center justify-center gap-4"
          >
            SOLICITAR CARTA PREMIUM
          </button>
          <a href="#menu" className="flex items-center justify-center px-12 py-6 border border-white/20 text-white font-bold text-xs tracking-[0.2em] hover:bg-white/5 transition-all">
            EXPLORAR MENÚ
          </a>
        </div>
        <div className="flex items-center gap-8 pt-6">
          <div className="flex -space-x-4">
            {[1,2,3].map(i => (
              <img key={i} className="w-12 h-12 rounded-full border-2 border-black object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
            ))}
          </div>
          <p className="text-xs font-bold text-white/40 tracking-[0.1em] uppercase">
            <span className="text-[#d4af37]">+2,400 paladares</span> exigentes satisfechos.
          </p>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 border border-[#d4af37]/30 scale-95 group-hover:scale-100 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
        <img 
          src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?auto=format&fit=crop&q=90&w=1200" 
          alt="Pollo Gourmet Premium" 
          className="relative z-10 w-full h-[650px] object-cover shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/10"
        />
        <div className="absolute -bottom-10 -left-10 z-30 bg-white p-8 luxury-shadow border-t-4 border-[#d4af37]">
          <div className="text-[#d4af37] font-luxury text-5xl font-black">Gs. 35k</div>
          <div className="text-black font-black text-[10px] uppercase tracking-[0.3em] mt-2">Placer Absoluto</div>
        </div>
      </div>
    </div>
  </header>
);

const ProductSection = () => {
  const handleOrder = (product: string) => {
    const text = encodeURIComponent(`Deseo realizar una reserva para la experiencia: ${product}. Por favor, confírmenme disponibilidad.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-[#d4af37] font-bold text-xs tracking-[0.4em] uppercase mb-6">Nuestra Selección Privada</div>
          <h2 className="font-luxury text-5xl md:text-7xl font-black text-white italic">Maestría en <span className="gold-text">cada bocado.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group bg-[#111] border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#d4af37]/30 flex flex-col relative">
              <div className="relative h-[450px] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute top-8 left-8 bg-[#d4af37] px-6 py-2 text-[10px] font-black text-black tracking-[0.2em] uppercase z-30">
                  {p.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-20" />
              </div>
              <div className="p-12 flex-1 flex flex-col space-y-8 relative z-30 -mt-20">
                <div className="space-y-2">
                  <div className="text-[#d4af37] font-bold text-xs uppercase tracking-widest opacity-80">{p.subtitle}</div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-luxury text-4xl font-black text-white italic leading-tight">{p.name}</h3>
                    <div className="text-2xl font-light text-[#d4af37] ml-4 italic">Gs. {p.price.toLocaleString()}</div>
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed font-light text-lg">{p.description}</p>
                
                <div className="grid grid-cols-1 gap-4 pt-4">
                   {p.features.map((f, i) => (
                     <div key={i} className="flex items-center gap-4 text-white/70 text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45"></div>
                        {f}
                     </div>
                   ))}
                </div>

                <div className="pt-8 mt-auto">
                  <button 
                    onClick={() => handleOrder(p.name)}
                    className="w-full py-6 bg-white text-black font-black text-xs tracking-[0.3em] uppercase hover:bg-[#d4af37] transition-all duration-500 shadow-2xl"
                  >
                    RESERVAR ESTA EXPERIENCIA
                  </button>
                  <div className="text-[10px] font-bold text-white/30 mt-6 text-center uppercase tracking-[0.2em]">
                    * Unidades Limitadas por Jornada
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SauceSection = () => (
  <section className="py-32 px-8 bg-black">
    <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]" />
      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="font-luxury text-5xl md:text-7xl font-black leading-none text-white italic">
            El Acompañante <br /><span className="gold-text">Perfecto.</span>
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Nuestras creaciones artesanales han sido diseñadas para maridar perfectamente con el perfil de sabor de nuestra leña.
          </p>
          <div className="inline-block px-6 py-2 border border-[#d4af37] text-[#d4af37] font-black text-[10px] tracking-[0.3em] uppercase">
            Degustación: 2 Salsas de Cortesía
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SAUCES.map((s, i) => (
            <div key={i} className="bg-[#111] p-8 border border-white/5 hover:border-[#d4af37]/40 transition-all duration-500 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform filter grayscale group-hover:grayscale-0">{s.emoji}</div>
              <div className="text-white font-bold text-lg mb-2 tracking-tight">{s.name}</div>
              <div className="text-[10px] text-[#d4af37] font-black uppercase tracking-widest">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="min-h-screen bg-black selection:bg-[#d4af37] selection:text-black">
    <Navbar />
    <Hero />
    <ProductSection />
    <SauceSection />
    
    {/* Floating Contact - Premium Style */}
    <div className="fixed bottom-10 right-10 z-50">
      <button 
        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
        className="w-20 h-20 bg-[#d4af37] text-black rounded-full flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform active:scale-95 group"
      >
        <span className="group-hover:rotate-12 transition-transform">💬</span>
      </button>
    </div>

    <footer className="py-32 px-8 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="font-luxury text-4xl text-white font-black uppercase tracking-[0.4em]">Pollo<span className="text-[#d4af37]">Gua</span></div>
        <div className="flex justify-center gap-12 text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Ubicación</a>
        </div>
        <p className="text-white/20 text-xs font-medium tracking-widest">© 2025 POLLOGUA PARAGUAY. EXPERIENCIA CULINARIA DE ALTA GAMA.</p>
      </div>
    </footer>
  </div>
);

export default App;
