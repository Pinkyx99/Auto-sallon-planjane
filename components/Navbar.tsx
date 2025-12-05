import React from 'react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  
  const languages: Language[] = ['SQ', 'EN', 'BS', 'DE'];

  const handleWhatsApp = () => {
    window.open('https://wa.me/38344560507', '_blank');
  };

  return (
    <nav className="w-full flex justify-between items-center py-4 px-4 md:py-6 md:px-16 absolute top-0 z-50 bg-transparent text-black pointer-events-auto">
      {/* Logo Section */}
      <div className="flex flex-col items-start group cursor-default relative z-50">
        <h1 className="text-xl md:text-3xl font-display font-black tracking-tighter uppercase leading-none text-black drop-shadow-sm">
          AUTO SALLON PLANJANE
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[2px] w-6 bg-brand-red transition-all duration-300 group-hover:w-12"></div>
          <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
            PRONAR: SALMIN BEGI
          </p>
        </div>
      </div>

      {/* Language Switcher - Centered absolute */}
      <div className="flex absolute left-1/2 -translate-x-1/2 top-20 md:top-auto md:items-center bg-white/40 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-sm z-40 origin-center transition-all">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-300 ${
              language === lang 
                ? 'bg-black text-white shadow-md' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Contact Button - WhatsApp Logo */}
      <div className="flex items-center z-50">
        <button 
          onClick={handleWhatsApp}
          className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-all duration-300 shadow-lg border border-white/50 group"
          title="Contact on WhatsApp"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
            alt="WhatsApp" 
            className="w-6 h-6 md:w-7 md:h-7 object-contain"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;