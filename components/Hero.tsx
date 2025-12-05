import React, { useState, useEffect } from 'react';
import { X, Check, Plus } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<'exterior' | 'driver' | 'passenger'>('exterior');
  const [showSpecs, setShowSpecs] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnterCar = () => {
    setViewMode('driver');
  };

  const handleExitCar = () => {
    setViewMode('exterior');
  };

  const isInterior = viewMode !== 'exterior';

  const t = {
    SQ: {
      swiss: "SEAT",
      komod: "LEON FR",
      viewInterior: "SHIKO BRENDËSINË",
      backToExterior: "Kthehu jashtë",
      driver: "SHOFERI",
      passenger: "PASAGJERI",
      goPassenger: "PASAGJERI",
      goDriver: "SHOFERI",
      collection: "ZVICERANE • CERTIFIKUAR",
      engineLabel: "SPECIFIKAT",
      engineVal: "2.0 Dizell • 184 PS • Automat",
      statusLabel: "STATUSI",
      statusVal: "178k km • Pa Dogan • Swiss",
      priceLabel: "ÇMIMI",
      priceVal: "ME MARRËVESHJE",
      detailsBtn: "SHIKO DETAJET",
      featuresTitle: "PAJISJET & OPSIONET",
      features: [
        "Fenerë Full LED Matrix",
        "Navigacion me Touchscreen",
        "Ulëse Sportive FR (Lëkurë/Alkantara)",
        "Ambient Lighting (Ndriçim i brendshëm)",
        "Senzorë Parkimi (Para & Mbrapa)",
        "Klimatronic 2-Zona",
        "Tempomat Adaptiv",
        "Sound System SEAT",
        "Fellne Alumini 18-inch",
        "Driving Modes (Eco, Normal, Sport)"
      ]
    },
    EN: {
      swiss: "SEAT",
      komod: "LEON FR",
      viewInterior: "VIEW INTERIOR",
      backToExterior: "Back to Exterior",
      driver: "DRIVER",
      passenger: "PASSENGER",
      goPassenger: "PASSENGER",
      goDriver: "DRIVER",
      collection: "SWISS • CERTIFIED",
      engineLabel: "SPECS",
      engineVal: "2.0L Diesel • 184 PS • Auto",
      statusLabel: "STATUS",
      statusVal: "178k km • Unpaid Customs • Swiss",
      priceLabel: "PRICE",
      priceVal: "BY AGREEMENT",
      detailsBtn: "VIEW DETAILS",
      featuresTitle: "FEATURES & OPTIONS",
      features: [
        "Full LED Matrix Headlights",
        "Touchscreen Navigation",
        "FR Sport Seats (Leather/Alcantara)",
        "Ambient Lighting",
        "Parking Sensors (Front & Rear)",
        "2-Zone Climate Control",
        "Adaptive Cruise Control",
        "SEAT Sound System",
        "18-inch Alloy Wheels",
        "Driving Modes (Eco, Normal, Sport)"
      ]
    },
    BS: {
      swiss: "SEAT",
      komod: "LEON FR",
      viewInterior: "POGLED IZNUTRA",
      backToExterior: "Nazad vani",
      driver: "VOZAČ",
      passenger: "SUVOZAČ",
      goPassenger: "SUVOZAČ",
      goDriver: "VOZAČ",
      collection: "ŠVICARSKA • CERTIFICIRANO",
      engineLabel: "SPECIFIKACIJE",
      engineVal: "2.0 Dizel • 184 KS • Automatik",
      statusLabel: "STATUS",
      statusVal: "178k km • Bez Carine • Švicarac",
      priceLabel: "CIJENA",
      priceVal: "PO DOGOVORU",
      detailsBtn: "DETALJNIJE",
      featuresTitle: "OPREMA & OPCIJE",
      features: [
        "Full LED Matrix Svjetla",
        "Navigacija na dodir",
        "FR Sportska Sjedišta",
        "Ambientalno Osvjetljenje",
        "Parking Senzori (Naprijed & Nazad)",
        "Dvozonska Klima",
        "Adaptivni Tempomat",
        "SEAT Ozvučenje",
        "Alu Felge 18-inča",
        "Modovi Vožnje (Eco, Normal, Sport)"
      ]
    },
    DE: {
      swiss: "SEAT",
      komod: "LEON FR",
      viewInterior: "INNENANSICHT",
      backToExterior: "Zurück nach außen",
      driver: "FAHRER",
      passenger: "BEIFAHRER",
      goPassenger: "BEIFAHRER",
      goDriver: "FAHRER",
      collection: "SCHWEIZER • ZERTIFIZIERT",
      engineLabel: "TECHNISCHE DATEN",
      engineVal: "2.0L Diesel • 184 PS • Automatik",
      statusLabel: "STATUS",
      statusVal: "178k km • Nicht Verzollt • Swiss",
      priceLabel: "PREIS",
      priceVal: "NACH VEREINBARUNG",
      detailsBtn: "DETAILS ANZEIGEN",
      featuresTitle: "AUSSTATTUNG & OPTIONEN",
      features: [
        "Voll-LED Matrix Scheinwerfer",
        "Touchscreen Navigation",
        "FR Sportsitze (Leder/Alcantara)",
        "Ambientebeleuchtung",
        "Einparkhilfe (Vorne & Hinten)",
        "2-Zonen Klimaautomatik",
        "Adaptiver Tempomat",
        "SEAT Soundsystem",
        "18-Zoll Leichtmetallfelgen",
        "Fahrmodi (Eco, Normal, Sport)"
      ]
    }
  };

  const text = t[language];

  // Static transform for the circle to keep it centered
  const circleStyle = isInterior 
    ? { transform: 'translate(-50%, -50%) scale(10)' } 
    : { transform: 'translate(-50%, -50%)' };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white flex flex-col justify-center items-center perspective-[2000px]">
      
      {/* Background Typography - Fades out when inside */}
      <div 
        className={`absolute top-1/2 left-1/2 w-full text-center z-0 select-none pointer-events-none transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 scale-150 blur-xl' : 'opacity-100 scale-100 blur-0'}`}
      >
        <div className="relative w-full h-full transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-[12vw] md:text-[8vw] font-display uppercase text-gray-900 tracking-tighter leading-none opacity-10 absolute -top-20 left-1/2 transform -translate-x-1/2 w-full">
            {text.swiss}
            </h2>
            <h1 className="text-[22vw] font-display uppercase text-gray-100 tracking-tighter leading-none whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2">
            {text.komod}
            </h1>
        </div>
      </div>

      {/* Red Circle Background Graphic - Modern gradient and glow */}
      <div 
        className={`absolute top-1/2 left-1/2 w-[60vh] h-[60vh] md:w-[70vh] md:h-[70vh] rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgb(239,68,68),_rgb(185,28,28))] shadow-[0_0_120px_rgba(220,38,38,0.3)] z-10 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted && !isInterior ? 'opacity-100' : 'opacity-0'}`}
        style={circleStyle}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50"></div>
      </div>
      
      {/* EXTERIOR LAYER */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] z-20 px-4 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-[56%_43%] will-change-transform ${isInterior ? 'scale-[15] opacity-0 pointer-events-none blur-sm' : 'scale-100 opacity-100 blur-0'}`}
      >
        <div className="relative w-full">
            <img 
              src="https://res.cloudinary.com/ddgmnys0o/image/upload/v1764954905/image_2_dsqymy.png" 
              alt="Seat Leon FR 2016" 
              className={`w-full h-auto object-contain drop-shadow-2xl transition-all duration-1000 delay-300 ease-out ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            />

            {/* Door Entry Button */}
            <button 
                onClick={handleEnterCar}
                className="absolute top-[43%] left-[65%] w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white transition-all duration-300 animate-pulse group z-30 ring-1 ring-white/50"
                aria-label="Enter Car"
            >
                <img 
                    src="https://icons.veryicon.com/png/o/miscellaneous/icheyong/steering-wheel-14.png" 
                    alt="Enter" 
                    className="w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-1/2 left-full ml-3 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
                   <div className="bg-black text-white text-[10px] py-1 px-3 rounded font-bold uppercase tracking-wider shadow-lg">
                    {text.viewInterior}
                   </div>
                </div>
            </button>
        </div>
      </div>

      {/* INTERIOR LAYER */}
      <div className={`absolute inset-0 z-50 bg-black transition-opacity duration-[2000ms] delay-100 ease-in-out flex items-center justify-center ${isInterior ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          
          {/* Driver View */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${viewMode === 'driver' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-md pointer-events-none'}`}>
             <img 
               src="https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953145/10737406-adaf-42fd-98aa-cd3522c4045f.png" 
               alt="Driver View" 
               className="max-w-full max-h-[90vh] w-auto h-auto object-contain shadow-2xl rounded-lg border border-white/10"
             />
             
             {/* Nav to Passenger */}
             <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-50" onClick={() => setViewMode('passenger')}>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 bg-black">
                    <img 
                        src="https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953389/f187de06-f7df-4494-be9d-df4ed4ae6c9a.png" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                        alt="Go to Passenger" 
                    />
                </div>
                <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                    {text.goPassenger}
                </div>
             </div>
          </div>

          {/* Passenger View */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${viewMode === 'passenger' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-md pointer-events-none'}`}>
             <img 
               src="https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953389/f187de06-f7df-4494-be9d-df4ed4ae6c9a.png" 
               alt="Passenger View" 
               className="max-w-full max-h-[90vh] w-auto h-auto object-contain shadow-2xl rounded-lg border border-white/10"
             />

             {/* Nav to Driver */}
             <div className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-50" onClick={() => setViewMode('driver')}>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 bg-black">
                    <img 
                        src="https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953145/10737406-adaf-42fd-98aa-cd3522c4045f.png" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                        alt="Go to Driver" 
                    />
                </div>
                <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                    {text.goDriver}
                </div>
             </div>
          </div>

          {/* Exit Button */}
          <button 
            onClick={handleExitCar}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-50 bg-black/30 hover:bg-brand-red text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-colors duration-300 border border-white/20 group"
          >
            <span className="sr-only">Exit Interior</span>
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase">
                {text.backToExterior}
            </span>
          </button>
      </div>

      {/* Left Sidebar Text (Hidden when inside) */}
      <div className={`absolute left-8 md:left-12 bottom-32 md:top-1/2 md:-translate-y-1/2 z-30 hidden md:block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'}`}>
         <div className="transform -rotate-90 origin-left translate-y-12">
            <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase whitespace-nowrap">
              {text.collection}
            </span>
         </div>
      </div>

      {/* Bottom Pagination (Hidden when inside) */}
      <div className={`absolute bottom-12 w-full px-12 md:px-24 flex justify-between items-end z-30 text-black transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="text-5xl md:text-7xl font-display font-bold text-gray-300">
          01
        </div>
        
        <div className="text-6xl md:text-8xl font-display font-bold text-black transform -translate-y-4">
          02
        </div>
        
        <div className="text-5xl md:text-7xl font-display font-bold text-gray-300">
          03
        </div>
      </div>

      {/* Decorative lines */}
      <div className={`absolute bottom-16 left-0 w-full h-px bg-gray-100 z-0 transition-opacity duration-1000 ${isInterior ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Badges/Floating Details (Hidden when inside) */}
      <div className={`absolute left-1/4 top-1/3 z-20 hidden lg:block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 -translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
         <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-xl transform -translate-x-12 animate-fade-in-up min-w-[200px]">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">{text.engineLabel}</p>
            <p className="text-lg font-bold text-brand-dark leading-tight">{text.engineVal}</p>
         </div>
         
         <button 
           onClick={() => setShowSpecs(true)}
           className="mt-4 flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase hover:text-brand-red transition-colors group"
         >
           <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-brand-red transition-colors">
              <Plus size={12} />
           </div>
           <span>{text.detailsBtn}</span>
         </button>
      </div>

      {/* Status Badge */}
      <div className={`absolute right-1/4 bottom-1/3 z-20 hidden lg:block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
         <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-xl transform translate-x-12 animate-fade-in-up animation-delay-200 min-w-[200px]">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">{text.statusLabel}</p>
            <p className="text-lg font-bold text-brand-dark leading-tight">{text.statusVal}</p>
         </div>
      </div>
      
      {/* Price Display */}
      <div className={`absolute bottom-[15%] right-[10%] md:bottom-[20%] md:right-[22%] z-20 text-right transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
         <div className="animate-fade-in-up animation-delay-400">
             <p className="text-brand-red font-bold tracking-[0.2em] text-[10px] md:text-xs mb-1 uppercase">{text.priceLabel}</p>
             <p className="text-2xl md:text-3xl font-display font-bold text-black uppercase leading-none drop-shadow-sm">{text.priceVal}</p>
         </div>
      </div>

      {/* SPECS MODAL OVERLAY */}
      {showSpecs && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500"
            onClick={() => setShowSpecs(false)}
          ></div>
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative z-10 animate-fade-in-up">
            <div className="bg-brand-dark p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="font-display text-2xl tracking-wide">{text.komod}</h3>
                <p className="text-xs font-bold tracking-widest opacity-70">{text.swiss}</p>
              </div>
              <button onClick={() => setShowSpecs(false)} className="hover:bg-white/10 p-2 rounded-full transition">
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">{text.featuresTitle}</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {text.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm font-medium text-gray-800">
                    <div className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
               <button 
                 onClick={() => setShowSpecs(false)}
                 className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-black transition-colors"
               >
                 Close
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Hero;