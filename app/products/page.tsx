'use client';

import { useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const whatsappNumber = "221774868415"; // Numéro principal MGS

  const handleOrder = (category, name, price) => {
    const message = encodeURIComponent(`Bonjour MGS, je souhaite commander dans la section *${category}* : *${name}* au prix de *${price}*. Je suis à Grand Mbour.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f3f4f6]">
      <div className="transition-opacity duration-1000 opacity-100">
        
        {/* En-tête */}
        <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-4 border-b border-zinc-800 sticky top-0 bg-[#0b0b0b]/90 backdrop-blur z-40 gap-2">
          <div>
            <h2 className="text-xl font-bold tracking-widest text-[#d4af37]">MGS STORE</h2>
            <p className="text-[10px] text-zinc-400">Grand Mbour, en face clinique Emmaüs</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider text-zinc-400">
            <a href="#iphones" className="hover:text-[#d4af37] transition">iPhone</a>
            <a href="#android" className="hover:text-[#d4af37] transition">Android</a>
            <a href="#accessoires" className="hover:text-[#d4af37] transition">Accessoires</a>
            <a href="#vetements" className="hover:text-[#d4af37] transition">Prêt-à-porter</a>
            <a href="#chaussures" className="hover:text-[#d4af37] transition">Chaussures</a>
            <a href="#sport" className="hover:text-[#d4af37] transition">Sport</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            MBOUR GAYDEL <span className="text-[#d4af37]">SERVICE</span>
          </h1>
          <p className="text-xl text-[#d4af37] italic tracking-wide mb-6">
            "Soyez connecté, soyez stylé"
          </p>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm mb-4">
            Dispo à Grand Mbour (en face clinique Emmaüs). Commandez directement via nos contacts : <br />
            <strong className="text-white">77 486 84 15 / 76 396 73 28</strong>
          </p>
        </section>

        {/* --- SECTION 1 : IPHONE --- */}
        <section id="iphones" className="py-12 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
          <h2 className="text-2xl font-bold text-[#d4af37] uppercase tracking-wider mb-8">Rayon iPhone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "iPhone 17 Pro Max", price: "800 000 FCFA", desc: "Le summum de la technologie." },
              { name: "iPhone 16 Pro Max", price: "750 000 FCFA", desc: "Design titane, puce A18 Pro." },
              { name: "iPhone 15 Pro Max", price: "580 000 FCFA", desc: "Performance et élégance." },
              { name: "iPhone 14 Pro Max", price: "450 000 FCFA", desc: "Dynamic Island, excellent choix." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-[#d4af37] transition">
                <div>
                  <div className="h-36 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 text-xs">[Photo iPhone]</div>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{item.desc}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-[#d4af37] block mb-3">{item.price}</span>
                  <button onClick={() => handleOrder("iPhone", item.name, item.price)} className="w-full bg-[#d4af37] text-black py-2 rounded font-bold text-xs uppercase hover:bg-yellow-600 transition">
                    Commander WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 2 : ANDROID --- */}
        <section id="android" className="py-12 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
          <h2 className="text-2xl font-bold text-[#d4af37] uppercase tracking-wider mb-8">Rayon Android</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Samsung Galaxy S24 Ultra", price: "650 000 FCFA", desc: "Écran géant, zoom pro, S-Pen." },
              { name: "Samsung Galaxy A55", price: "220 000 FCFA", desc: "Autonomie et fluidité au meilleur prix." },
              { name: "Redmi Note 13 Pro", price: "175 000 FCFA", desc: "Appareil photo 200MP, charge ultra-rapide." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-[#d4af37] transition">
                <div>
                  <div className="h-36 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 text-xs">[Photo Android]</div>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{item.desc}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-[#d4af37] block mb-3">{item.price}</span>
                  <button onClick={() => handleOrder("Android", item.name, item.price)} className="w-full bg-[#d4af37] text-black py-2 rounded font-bold text-xs uppercase hover:bg-yellow-600 transition">
                    Commander WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3 : ACCESSOIRES --- */}
        <section id="accessoires" className="py-12 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
          <h2 className="text-2xl font-bold text-[#d4af37] uppercase tracking-wider mb-8">Accessoires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Écouteurs Bluetooth Pro", price: "15 000 FCFA", desc: "Son immersif, autonomie 24h." },
              { name: "Chargeur Rapide 30W", price: "10 000 FCFA", desc: "Sécurisé et ultra-rapide." },
              { name: "Coque de Protection Luxe", price: "7 500 FCFA", desc: "Résistante et design épuré." },
              { name: "Montre Connectée Smart", price: "25 000 FCFA", desc: "Suivi sportif et notifications." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-[#d4af37] transition">
                <div>
                  <div className="h-36 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 text-xs">[Photo Accessoire]</div>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{item.desc}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-[#d4af37] block mb-3">{item.price}</span>
                  <button onClick={() => handleOrder("Accessoires", item.name, item.price)} className="w-full bg-[#d4af37] text-black py-2 rounded font-bold text-xs uppercase hover:bg-yellow-600 transition">
                    Commander WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4 : PRÊT-À-PORTER --- */}
        <section id="vetements" className="py-12 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
          <h2 className="text-2xl font-bold text-[#d4af37] uppercase tracking-wider mb-8">Prêt-à-porter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Survêtement Chic MGS", price: "25 000 FCFA", desc: "Coton premium, style urbain." },
              { name: "Ensemble Polo & Jean", price: "28 000 FCFA", desc: "Idéal pour un look élégant." },
              { name: "Sweat à capuche tendance", price: "18 000 FCFA", desc: "Confortable et moderne." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-[#d4af37] transition">
                <div>
                  <div className="h-36 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 text-xs">[Photo Vêtement]</div>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{item.desc}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-[#d4af37] block mb-3">{item.price}</span>
                  <button onClick={() => handleOrder("Prêt-à-porter", item.name, item.price)} className="w-full bg-[#d4af37] text-black py-2 rounded font-bold text-xs uppercase hover:bg-yellow-600 transition">
                    Commander WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5 : CHAUSSURES --- */}
        <section id="chaussures" className="py-12 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
          <h2 className="text-2xl font-bold text-[#d4af37] uppercase tracking-wider mb-8">Chaussures (Nike, Adidas, New Balance...)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sneakers Nike Air Max", price: "35 000 FCFA", desc: "Confort et style streetwear." },
              { name: "Adidas Ultraboost", price: "38 000 FCFA", desc: "Amorti dynamique pour la marche et le sport." },
              { name: "New Balance Classic", price: "32 000 FCFA", desc: "Design rétro tendance." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-[#d4af37] transition">
                <div>
                  <div className="h-36 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 text-xs">[Photo Chaussure]</div>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{item.desc}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-[#d4af37] block mb-3">{item.price}</span>
                  <button onClick={() => handleOrder("Chaussures", item.name, item.price)} className="w-full bg-[#d4af37] text-black py-2 rounded font-bold text-xs uppercase hover:bg-yellow-600 transition">
                    Commander WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 6 : SPORT --- */}
        <section id="sport" className="py-12 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
          <h2 className="text-2xl font-bold text-[#d4af37] uppercase tracking-wider mb-8">Sport (Maillots, Crampons, Ballons)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Maillot FC Barcelona (Domicile)", price: "12 000 FCFA", desc: "Saison officielle, flocage au choix." },
              { name: "Crampons de Football Pro", price: "30 000 FCFA", desc: "Excellente adhérence sur pelouse." },
              { name: "Ballon de Match Officiel", price: "15 000 FCFA", desc: "Résistant et haute performance." }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex flex-col justify-between hover:border-[#d4af37] transition">
                <div>
                  <div className="h-36 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-500 text-xs">[Photo Article Sport]</div>
                  <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{item.desc}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-[#d4af37] block mb-3">{item.price}</span>
                  <button onClick={() => handleOrder("Sport", item.name, item.price)} className="w-full bg-[#d4af37] text-black py-2 rounded font-bold text-xs uppercase hover:bg-yellow-600 transition">
                    Commander WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pied de page */}
        <footer className="border-t border-zinc-800 py-8 text-center text-zinc-400 text-xs mt-16 space-y-2">
          <p className="text-white font-semibold">Mbour Gaydel Service (MGS)</p>
          <p>📍 Grand Mbour, en face clinique Emmaüs | 📞 77 486 84 15 / 76 396 73 28</p>
          <p className="text-zinc-600">&copy; 2026. Tous droits réservés.</p>
        </footer>

      </div>
    </main>
  );
}