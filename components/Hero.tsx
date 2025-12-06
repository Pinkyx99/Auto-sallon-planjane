import React, { useState, useEffect, useRef } from 'react';
import { X, Plus, ChevronLeft, ChevronRight, MessageCircle, Camera, Image as ImageIcon, ZoomIn, Maximize2 } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

interface CarData {
  id: number;
  brand: string;
  model: string;
  year: string;
  images: {
    exterior: string;
    interiorDriver: string;
    interiorPassenger: string | null;
  };
  gallery: string[]; // New property for extra images
  themeColor: 'red' | 'black';
  stats: {
    engineVal: string;
    engineSub: string;
    statusVal: string;
    statusSub: string;
    priceVal: string;
  };
  features: string[];
  topPosition: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<'exterior' | 'driver' | 'passenger'>('exterior');
  const [showSpecs, setShowSpecs] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  
  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
  // Parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Touch state for swipe gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Reset view mode when switching cars
  useEffect(() => {
    setViewMode('exterior');
    setLightboxImage(null);
    setIsZoomed(false);
  }, [currentCarIndex]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnterCar = () => {
    setViewMode('driver');
  };

  const handleExitCar = () => {
    setViewMode('exterior');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (viewMode !== 'exterior') return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Mild parallax effect - optimized for subtle luxury feel (approx 3-5px shift)
    const x = (clientX - innerWidth / 2) / 280;
    const y = (clientY - innerHeight / 2) / 280;
    setMousePos({ x, y });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/38344560507', '_blank');
  };

  const openLightbox = (imgSrc: string) => {
    setLightboxImage(imgSrc);
    setIsZoomed(false);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const isInterior = viewMode !== 'exterior';

  // Define translations
  const t = {
    SQ: {
      viewInterior: "BRENDËSIA",
      backToExterior: "Kthehu",
      engineLabel: "PERFORMANCA",
      statusLabel: "STATUSI",
      priceLabel: "ÇMIMI",
      detailsBtn: "SPECIFIKAT",
      galleryBtn: "GALERIA",
      featuresTitle: "PAJISJET",
      features: "Specifikat",
      chatBtn: "BISEDO ME PRONARIN",
      galleryTitle: "FOTO GALERIA",
      tapToZoom: "Kliko për Zoom"
    },
    EN: {
      viewInterior: "INTERIOR",
      backToExterior: "Back",
      engineLabel: "PERFORMANCE",
      statusLabel: "STATUS",
      priceLabel: "PRICE",
      detailsBtn: "SPECS",
      galleryBtn: "GALLERY",
      featuresTitle: "FEATURES",
      features: "Features",
      chatBtn: "CHAT WITH OWNER",
      galleryTitle: "PHOTO GALLERY",
      tapToZoom: "Tap to Zoom"
    },
    BS: {
      viewInterior: "UNUTRAŠNJOST",
      backToExterior: "Nazad",
      engineLabel: "PERFORMANSE",
      statusLabel: "STATUS",
      priceLabel: "CIJENA",
      detailsBtn: "DETALJI",
      galleryBtn: "GALERIJA",
      featuresTitle: "OPREMA",
      features: "Specifikacije",
      chatBtn: "KONTAKTIRAJ VLASNIKA",
      galleryTitle: "GALERIJA SLIKA",
      tapToZoom: "Klikni za Zoom"
    },
    DE: {
      viewInterior: "INNENRAUM",
      backToExterior: "Zurück",
      engineLabel: "LEISTUNG",
      statusLabel: "STATUS",
      priceLabel: "PREIS",
      detailsBtn: "DETAILS",
      galleryBtn: "GALERIE",
      featuresTitle: "AUSSTATTUNG",
      features: "Eigenschaften",
      chatBtn: "KONTAKT MIT HÄNDLER",
      galleryTitle: "FOTOGALERIE",
      tapToZoom: "Tippen zum Zoomen"
    }
  };

  const labels = t[language];

  // Car Data Configuration
  const cars: CarData[] = [
    {
      id: 1,
      brand: "SEAT",
      model: "LEON FR",
      year: "2016",
      themeColor: 'red',
      topPosition: "top-1/2 md:top-[52%]",
      images: {
        exterior: "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764954905/image_2_dsqymy.png",
        interiorDriver: "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953145/10737406-adaf-42fd-98aa-cd3522c4045f.png",
        interiorPassenger: "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953389/f187de06-f7df-4494-be9d-df4ed4ae6c9a.png"
      },
      gallery: [
        // Removed Main Exterior Image to avoid duplication
        "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953145/10737406-adaf-42fd-98aa-cd3522c4045f.png", // Int Driver
        "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764953389/f187de06-f7df-4494-be9d-df4ed4ae6c9a.png", // Int Pass
        "https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/589609155_25456741063920812_6179393577182403704_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=BZZH9GXsJ9IQ7kNvwF_ExAJ&_nc_oc=Adk8RJhbsmvJMTa6qsWOtSbA-R67yCQ2R8y5jf2KNMvluB4TjWuKWfgkATGRzL3Re6I&_nc_zt=23&_nc_ht=scontent.fprn12-1.fna&_nc_gid=hbUy_3BnAkEvrVM1uQpnBA&oh=00_AfmkhMT6Wl89dvVP19i8DYaR-Kx36JFskWPvgJsd6pJnpQ&oe=6938B24D",
        "https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/591999989_25456741060587479_7178455268042144607_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=yiF6LIZFJY0Q7kNvwG0mv1o&_nc_oc=Adl6CbmfAdLNiMQ4ldaZvs_oBD7FQkjqSL0_G7thf1R8EoKaAVp3JPahNXu-LooExz0&_nc_zt=23&_nc_ht=scontent.fprn12-1.fna&_nc_gid=hbUy_3BnAkEvrVM1uQpnBA&oh=00_AfmlcEacPBQgzio1k3haF6auP6Ar2zdku9SAFBzkvbBHXQ&oe=6938C93F"
      ],
      stats: {
        engineVal: language === 'EN' ? "2.0 Diesel" : (language === 'BS' ? "2.0 Dizel" : "2.0 Dizell"),
        engineSub: language === 'EN' ? "184 PS • Automatic" : (language === 'DE' ? "184 PS • Automatik" : (language === 'BS' ? "184 KS • Automatik" : "184 PS • Automat")),
        statusVal: "178,000 km",
        statusSub: language === 'EN' ? "Customs Unpaid" : (language === 'DE' ? "Nicht Verzollt" : (language === 'BS' ? "Bez Carine" : "Pa Dogan")),
        priceVal: language === 'EN' ? "By Agreement" : (language === 'DE' ? "Nach Vereinbarung" : (language === 'BS' ? "Po Dogovoru" : "Me Marrëveshje")),
      },
      features: [
        "Odometer: 178,000 km",
        "Motor 2.0 Dizell, 184 KS, 380 Nm — kombinuar me DSG automatik – ekonomik dhe i fuqishëm për autostrada dhe qytet.",
        "Konsum mesatar: ~ 4.5–4.6 l/100 km (nëse shfrytëzohet në mënyrë të kujdesshme) — i dobishëm për udhëtime të shpeshta.",
        "Emetime: Euro 6 — pa probleme për regjistrim/import.",
        "Karroceri: Heçbek 5‑dyer, me 5 ulëse + bagazh prej ~ 380 L.",
        "Origjina: Vetura nga Zvicra — pa dogan, dokumentacion i rregullt.",
        "Mirëmbajtje: Servise të rregullta, automjeti i mirëmbajtur, nuk ka probleme kryesore."
      ]
    },
    {
      id: 2,
      brand: "SEAT",
      model: "ATECA FR",
      year: "2021",
      themeColor: 'black',
      topPosition: "top-[42%] md:top-[46%]",
      images: {
        exterior: "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764965533/image_1_1_xsk5po.png",
        interiorDriver: "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764965625/591297448_25456716263923292_8535888767367941698_n_xikhd2.jpg",
        interiorPassenger: null 
      },
      gallery: [
         // Removed Main Exterior Image to avoid duplication
         "https://res.cloudinary.com/ddgmnys0o/image/upload/v1764965625/591297448_25456716263923292_8535888767367941698_n_xikhd2.jpg", // Int Driver
         "https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/593358392_25456716270589958_4551948152987395149_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=HGOkdW62PoYQ7kNvwFjX4Mr&_nc_oc=Adns1SjEjgExY3oGf0Pd8aiEL6QocNDpGyMNlvtt3s8z1qyK22gBWdvrGzUyfJpOxuo&_nc_zt=23&_nc_ht=scontent.fprn12-1.fna&_nc_gid=IQl0oSyzSH47PbZtjwdDEQ&oh=00_AfmKgTLJ0m6R_FXWw3HxL_UFP-OxP2H_x63P-FsV8h_Aig&oe=6938A7D8",
         "https://scontent.fprn12-1.fna.fbcdn.net/v/t39.30808-6/591155509_25456716267256625_8069863407900063623_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=rnBL_BMogJIQ7kNvwGtl2N8&_nc_oc=AdlKdvLLRzKd1g1u20k5HB5Ms2v4Py5w71Ira1SUn2ufODndBkFTgej2fTIX2aQFzmo&_nc_zt=23&_nc_ht=scontent.fprn12-1.fna&_nc_gid=IQl0oSyzSH47PbZtjwdDEQ&oh=00_AfkMnCVtiW4CPAUDkON62s47JZw3qEZuV08qxHrHlpwp5Q&oe=6938CB74"
      ],
      stats: {
        engineVal: "1.5 TSI Benzin",
        engineSub: language === 'EN' ? "150 PS • Automatic" : (language === 'DE' ? "150 PS • Automatik" : (language === 'BS' ? "150 KS • Automatik" : "150 PS • Automat")),
        statusVal: "200,000 km",
        statusSub: language === 'EN' ? "Customs Unpaid" : (language === 'DE' ? "Nicht Verzollt" : (language === 'BS' ? "Bez Carine" : "Pa Dogan")),
        priceVal: language === 'EN' ? "By Agreement" : (language === 'DE' ? "Nach Vereinbarung" : (language === 'BS' ? "Po Dogovoru" : "Me Marrëveshje")),
      },
      features: [
        "Kilometrazhi: 200,000 km",
        "Motor benzine 1.5 TSI, 150 KS, 250 Nm — kombinon fuqinë me ekonominë për përdorim në qytet dhe autostradë.",
        "Automatik (DSG) + përparësi e FR: paketë sport + dizajn + stil, me komoditet e klasë SUV.",
        "Bagazh i madh: ~ 510 L — ideal për familje, punë, udhëtime.",
        "Konsum mesatar: ~ 6.2 – 6.8 l/100 km (varion sipas përdorimit).",
        "SUV me 5 ulëse + 5 dyer — praktik dhe i përshtatshëm për qytet dhe rrugë.",
        "Origjina: veturë nga Zvicra, pa dogan, dokumentacion i rregullt.",
        "Mirëmbajtje e plotë — servise periodike kryer, gjendje e mirë teknike; mund të diskutojmë historikun e dokumentuar.",
        "Paketë FR (sportive) — vetura duket më sportive dhe tërheqëse, për ata që duan kombinimin e komoditetit dhe stilit."
      ]
    }
  ];

  const activeCar = cars[currentCarIndex];
  
  // Navigation Logic
  const handlePrevCar = () => {
    setDirection('prev');
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };
  
  const handleNextCar = () => {
    setDirection('next');
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  // Swipe Logic
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) handleNextCar();
    if (isRightSwipe) handlePrevCar();
  };

  // Dynamic Styles
  const circleGradient = activeCar.themeColor === 'red' 
    ? 'bg-[radial-gradient(circle_at_center,_rgb(239,68,68,0.35),_transparent_70%)]'
    : 'bg-[radial-gradient(circle_at_center,_rgb(100,100,100,0.25),_transparent_70%)]';

  // Optimized circle style: Fade opacity instead of massive scale
  const circleStyle = isInterior 
    ? { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 0 } 
    : { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center perspective-[2000px]"
      onMouseMove={handleMouseMove}
    >
      
      {/* Background Circle - Performance Optimized */}
      <div 
        className={`absolute top-1/2 left-1/2 w-[100vw] h-[100vw] md:w-[80vh] md:h-[80vh] rounded-full z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] blur-3xl ${circleGradient} will-change-transform`}
        style={circleStyle}
      ></div>
      
      {/* EXTERIOR LAYER */}
      {/* Optimized: Reduced max scale from 15 to 3. Removed blur transition. Reduced duration to 1000ms. */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] z-20 px-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-[56%_43%] will-change-transform ${activeCar.topPosition} ${isInterior ? 'scale-[3] opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        style={{
           transform: isInterior 
             ? undefined 
             : `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-full flex justify-center items-center">
            {/* CAR IMAGE CONTAINER */}
            <div 
              key={activeCar.id} // Re-triggers animation on change
              className={`relative w-[160%] max-w-[none] -ml-[30%] md:ml-0 md:w-full md:max-w-full h-auto flex justify-center items-center ${direction === 'next' ? 'animate-car-enter-next' : 'animate-car-enter-prev'}`}
            >
              {/* Soft Red Glow Reflection under car */}
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-red-500/10 blur-[50px] rounded-full pointer-events-none z-0"></div>

              {/* Realistic Floor Shadow */}
              <div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-[90%] h-[20%] bg-black opacity-30 blur-[60px] rounded-[100%] pointer-events-none z-0"></div>
              
              <img 
                src={activeCar.images.exterior}
                alt={`${activeCar.brand} ${activeCar.model}`} 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing will-change-transform"
                draggable="false"
              />

              {/* Simplified Door Entry Button */}
              <button 
                  onClick={handleEnterCar}
                  className="absolute top-[38%] left-[67%] md:top-[49%] md:left-[64%] w-8 h-8 md:w-10 md:h-10 bg-white/40 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-30 shadow-sm hover:scale-110 group"
                  aria-label="Enter Car"
              >
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    <div className="bg-black text-white text-[10px] py-1 px-2 rounded font-medium shadow-md font-body">
                      {labels.viewInterior}
                    </div>
                  </div>
              </button>
            </div>
        </div>
      </div>

      {/* INTERIOR LAYER (Zoomable) */}
      <div className={`absolute inset-0 z-50 bg-black transition-opacity duration-1000 delay-100 ease-in-out flex items-center justify-center ${isInterior ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Driver View */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${viewMode === 'driver' ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
             <div className="relative group cursor-zoom-in" onClick={() => openLightbox(activeCar.images.interiorDriver)}>
                <img 
                  src={activeCar.images.interiorDriver}
                  alt="Driver View" 
                  className="max-w-full max-h-[85vh] md:max-h-[90vh] w-auto h-auto object-contain shadow-2xl rounded-lg border border-white/10"
                />
                {/* Zoom Hint */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm pointer-events-none">
                  <Maximize2 size={20} />
                </div>
             </div>
             
             {activeCar.images.interiorPassenger && (
               <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-50" onClick={() => setViewMode('passenger')}>
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 bg-black relative">
                      <img src={activeCar.images.interiorPassenger} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" alt="Go to Passenger" />
                  </div>
               </div>
             )}
          </div>

          {/* Passenger View */}
          {activeCar.images.interiorPassenger && (
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${viewMode === 'passenger' ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
               <div className="relative group cursor-zoom-in" onClick={() => openLightbox(activeCar.images.interiorPassenger!)}>
                 <img src={activeCar.images.interiorPassenger} alt="Passenger View" className="max-w-full max-h-[85vh] md:max-h-[90vh] w-auto h-auto object-contain shadow-2xl rounded-lg border border-white/10" />
                 {/* Zoom Hint */}
                 <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm pointer-events-none">
                    <Maximize2 size={20} />
                 </div>
               </div>
               <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-50" onClick={() => setViewMode('driver')}>
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 bg-black">
                      <img src={activeCar.images.interiorDriver} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" alt="Go to Driver" />
                  </div>
               </div>
            </div>
          )}

          {/* Exit Button */}
          <button 
            onClick={handleExitCar}
            className="absolute top-6 right-6 z-50 bg-black/50 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
          >
            <X size={20} />
          </button>
      </div>

      {/* --- STATS UI --- */}
      
      {/* TOP LEFT: Engine Specs */}
      <div className={`absolute top-24 left-8 md:top-32 md:left-16 z-20 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
         <div key={activeCar.id} className="animate-fade-in-left delay-100">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-3 font-body">{labels.engineLabel}</p>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-black leading-none">{activeCar.stats.engineVal}</h3>
            <p className="text-xs md:text-sm font-body text-gray-500 mt-2 font-medium">{activeCar.stats.engineSub}</p>
         </div>
      </div>

      {/* TOP RIGHT: Status Stats */}
      <div className={`absolute top-24 right-8 md:top-32 md:right-16 z-20 text-right transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
         <div key={activeCar.id} className="animate-fade-in-right delay-200">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-3 font-body">{labels.statusLabel}</p>
            <h3 className="text-2xl md:text-[2.75rem] font-display font-semibold text-black leading-none tracking-tight">{activeCar.stats.statusVal}</h3>
            <p className="text-xs md:text-sm font-body text-gray-500 mt-2 md:-mt-1">{activeCar.stats.statusSub}</p>
         </div>
      </div>
      
      {/* BOTTOM LEFT: Action Buttons */}
      <div className={`absolute bottom-8 left-6 md:bottom-10 md:left-10 z-20 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="flex flex-col md:flex-row gap-4">
          <button onClick={() => setShowSpecs(true)} className="group flex items-center gap-3 bg-transparent py-2 pr-6 pl-0 rounded-full transition-all duration-300">
             <div className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-sm">
                <Plus size={16} />
             </div>
             <div className="overflow-hidden">
               <span className="text-xs font-body font-bold uppercase tracking-widest text-gray-800 group-hover:tracking-[0.25em] transition-all duration-300 inline-block transform translate-x-0">{labels.detailsBtn}</span>
               <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-500 mt-1"></div>
             </div>
           </button>

           <button onClick={() => setShowGallery(true)} className="group flex items-center gap-3 bg-transparent py-2 pr-6 pl-0 rounded-full transition-all duration-300">
             <div className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                <ImageIcon size={16} />
             </div>
             <div className="overflow-hidden">
               <span className="text-xs font-body font-bold uppercase tracking-widest text-gray-800 group-hover:tracking-[0.25em] transition-all duration-300 inline-block transform translate-x-0">{labels.galleryBtn}</span>
               <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-500 mt-1"></div>
             </div>
           </button>
        </div>
      </div>

      {/* BOTTOM CENTER: Pagination */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs font-bold tracking-[0.3em] text-gray-300 transition-opacity duration-300 ${isInterior ? 'opacity-0' : 'opacity-100'}`}>
         <span className="text-black">0{currentCarIndex + 1}</span> / 0{cars.length}
      </div>

      {/* BOTTOM RIGHT: Price & WhatsApp */}
      <div className={`absolute bottom-10 right-8 md:bottom-24 md:right-16 z-20 text-right transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInterior ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
         <div key={activeCar.id} className="animate-fade-in-up animation-delay-200 flex flex-col items-end group cursor-default">
             <p className="text-gray-400 font-bold tracking-[0.2em] text-[9px] mb-2 uppercase font-body">{labels.priceLabel}</p>
             <div className="relative inline-block mb-3">
               <p className="text-xl md:text-3xl font-display font-medium text-black">{activeCar.stats.priceVal}</p>
               <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-500"></div>
             </div>
             <button onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group/whatsapp mt-1">
               <MessageCircle size={18} className="group-hover/whatsapp:scale-110 transition-transform" />
               <span className="font-bold text-xs tracking-widest uppercase">{labels.chatBtn}</span>
             </button>
         </div>
      </div>

      {/* SIDE NAVIGATION ARROWS */}
      <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-2 md:px-8 pointer-events-none ${isInterior ? 'opacity-0' : 'opacity-100'}`}>
         <button onClick={handlePrevCar} className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-gray-800 transition-all pointer-events-auto cursor-pointer group hover:scale-[1.07] active:scale-95 opacity-60 hover:opacity-100 duration-300 ease-out">
           <div className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
           <ChevronLeft size={28} strokeWidth={1.5} className="relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
         </button>
         <button onClick={handleNextCar} className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-gray-800 transition-all pointer-events-auto cursor-pointer group hover:scale-[1.07] active:scale-95 opacity-60 hover:opacity-100 duration-300 ease-out">
           <div className="absolute inset-0 bg-gray-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-75 group-hover:scale-100"></div>
           <ChevronRight size={28} strokeWidth={1.5} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
         </button>
      </div>

      {/* SPECS MODAL */}
      {showSpecs && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500" onClick={() => setShowSpecs(false)}></div>
          <div className="bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-3xl shadow-2xl overflow-hidden relative z-10 animate-fade-in-up max-h-[85vh] flex flex-col border border-gray-100">
            <div className="bg-white p-6 flex justify-between items-center shrink-0 border-b border-gray-100 sticky top-0 z-20">
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight">{activeCar.model}</h3>
                <p className="text-[10px] font-body font-bold tracking-widest text-gray-400 uppercase">{activeCar.brand}</p>
              </div>
              <button onClick={() => setShowSpecs(false)} className="hover:bg-gray-100 p-2 rounded-full transition text-gray-500 hover:text-black">
                <X size={20} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 font-body">{labels.featuresTitle}</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {activeCar.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm font-medium text-gray-700 font-body group">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-green-500 shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{labels.priceLabel}</span>
                    <span className="font-display font-bold text-lg">{activeCar.stats.priceVal}</span>
                 </div>
                 <button onClick={() => { setShowSpecs(false); handleEnterCar(); }} className="w-full py-4 bg-black text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-brand-red transition-colors duration-300">
                   {labels.viewInterior}
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY MODAL */}
      {showGallery && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-0">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500" onClick={() => setShowGallery(false)}></div>
          <div className="relative w-full h-full flex flex-col z-20">
             <div className="flex justify-between items-center p-6 md:p-8 shrink-0">
                <div>
                   <h2 className="text-white font-display font-bold text-2xl">{activeCar.model}</h2>
                   <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{labels.galleryTitle}</p>
                </div>
                <button onClick={() => setShowGallery(false)} className="bg-white/10 hover:bg-white text-white hover:text-black rounded-full p-3 transition-colors duration-300">
                  <X size={24} />
                </button>
             </div>
             <div className="flex-1 overflow-y-auto p-4 md:p-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto pb-12">
                 {activeCar.gallery.map((imgSrc, idx) => (
                   <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer shadow-2xl border border-white/5" onClick={() => openLightbox(imgSrc)}>
                     <img src={imgSrc} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                       <Maximize2 className="text-white opacity-80" size={20} />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX ZOOM VIEWER */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center animate-fade-in-up">
          {/* Controls */}
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-[210] bg-black/50 hover:bg-white text-white hover:text-black p-3 rounded-full backdrop-blur-md transition-all border border-white/20"
          >
            <X size={24} />
          </button>

          {/* Image Container with native scrolling for panning */}
          <div 
            className={`w-full h-full overflow-auto transition-all duration-300 flex ${isZoomed ? 'items-start justify-start cursor-zoom-out' : 'items-center justify-center cursor-zoom-in'}`}
            onClick={toggleZoom}
          >
            <img 
              src={lightboxImage} 
              alt="Zoom View" 
              className={`transition-all duration-300 ease-out select-none ${isZoomed ? 'min-w-[150vw] md:min-w-[120vw] object-cover' : 'max-w-full max-h-screen object-contain p-4'}`}
              draggable={false}
            />
          </div>

          {/* Hint Overlay (Only when not zoomed) */}
          {!isZoomed && (
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase pointer-events-none border border-white/10 flex items-center gap-2">
               <ZoomIn size={14} />
               {labels.tapToZoom}
             </div>
          )}
        </div>
      )}

    </div>
  );
};

export default Hero;