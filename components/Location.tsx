import React from 'react';
import { MapPin, Navigation, ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface LocationProps {
  language: Language;
}

const Location: React.FC<LocationProps> = ({ language }) => {
  const t = {
    SQ: {
      title: "LOKACIONI",
      subtitle: "EJANI NË SALLON",
      address: "Planjane, 20530",
      city: "Prizren, Kosovë",
      navigate: "HAP HARTËN",
      contact: "NA KONTAKTONI",
      whatsapp: "WHATSAPP",
      desc: "Vizitoni sallonin tonë në Planjane për të parë veturën nga afër. Ne ofrojmë mundësi testimi dhe kontrolli të plotë."
    },
    EN: {
      title: "LOCATION",
      subtitle: "VISIT OUR SHOWROOM",
      address: "Planjane, 20530",
      city: "Prizren, Kosovo",
      navigate: "GET DIRECTIONS",
      contact: "CONTACT US",
      whatsapp: "WHATSAPP",
      desc: "Visit our showroom in Planjane to see the car in person. We offer test drives and full inspection opportunities."
    },
    BS: {
      title: "LOKACIJA",
      subtitle: "POSJETITE NAS",
      address: "Planjane, 20530",
      city: "Prizren, Kosovo",
      navigate: "POKRENI NAVIGACIJU",
      contact: "KONTAKTIRAJTE NAS",
      whatsapp: "WHATSAPP",
      desc: "Posjetite naš salon u Planjanima da vidite automobil uživo. Nudimo probne vožnje i mogućnost potpunog pregleda."
    },
    DE: {
      title: "STANDORT",
      subtitle: "BESUCHEN SIE UNS",
      address: "Planjane, 20530",
      city: "Prizren, Kosovo",
      navigate: "ROUTE STARTEN",
      contact: "KONTAKT",
      whatsapp: "WHATSAPP",
      desc: "Besuchen Sie unseren Ausstellungsraum in Planjane, um das Auto persönlich zu sehen. Wir bieten Probefahrten und vollständige Inspektionsmöglichkeiten."
    }
  };

  const text = t[language];

  // Coordinates for display/fallback
  const lat = "42.178575";
  const lng = "20.8342784";

  const handleNavigate = () => {
    // Updated to the specific Planjane link provided
    window.open('https://maps.app.goo.gl/6HLiqfjXRcTspESR7', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/38344560507', '_blank');
  };

  return (
    <section className="relative w-full bg-white text-black py-20 md:py-32 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-brand-red"></div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 font-body">{text.title}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display uppercase font-semibold tracking-tight leading-none max-w-3xl">
            {text.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <p className="text-lg md:text-xl text-gray-600 font-body font-light leading-relaxed mb-8 max-w-md">
                {text.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl uppercase tracking-tight font-display">AUTO SALLON PLANJANE</h4>
                    <p className="text-gray-500 font-body">{text.address}</p>
                    <p className="text-gray-500 font-body">{text.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleNavigate}
                className="group flex items-center justify-center gap-4 bg-black text-white px-8 py-4 rounded-full hover:bg-brand-red transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Navigation size={20} className="group-hover:rotate-45 transition-transform duration-300" strokeWidth={1.5} />
                <span className="font-bold tracking-widest uppercase text-sm font-body">{text.navigate}</span>
              </button>
              
              <button 
                onClick={handleWhatsApp}
                className="group flex items-center justify-center gap-4 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
                <span className="font-bold tracking-widest uppercase text-sm font-body">{text.whatsapp}</span>
              </button>
            </div>
          </div>

          {/* Map Column */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
             {/* Map Iframe updated to point to Planjane 20530 */}
             <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=Planjane+20530&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            ></iframe>
            
            {/* Custom Overlay Label */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 pointer-events-none md:pointer-events-auto">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 font-body">COORDINATES</p>
              <p className="font-mono text-sm font-bold text-brand-dark font-body">{lat}, {lng}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;