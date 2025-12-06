import React from 'react';
import { Language } from '../types';
import { MessageCircle } from 'lucide-react';

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
    <nav className="w-full flex justify-between items-start py-6 px-6 md:px-12 absolute top-0 z-50 pointer-events-none">
      {/* Logo Section - Pointer events auto to allow interaction */}
      <div className="flex flex-col items-start group cursor-default pointer-events-auto">
        <h1 className="text-lg md:text-xl font-display font-bold tracking-tight uppercase leading-none text-black drop-shadow-sm">
          AUTO SALLON PLANJANE
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[1px] w-8 bg-brand-red transition-all duration-300"></div>
          <p className="text-[10px] font-medium text-gray-500 tracking-[0.2em] uppercase font-body">
            PRONAR: SALMIN BEGI
          </p>
        </div>
      </div>

      {/* Right Section: Language + Contact */}
      <div className="flex items-center gap-3 pointer-events-auto">
        
        {/* Navbar Contact Shortcut */}
        <button 
          onClick={handleWhatsApp}
          className="bg-white/80 backdrop-blur-md rounded-full p-2 shadow-sm border border-gray-100 text-gray-600 hover:text-[#25D366] transition-colors duration-300"
          title="WhatsApp"
        >
          <MessageCircle size={20} strokeWidth={2} />
        </button>

        {/* Language Switcher */}
        <div className="flex items-center bg-white/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-gray-100">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-full transition-all duration-300 font-body ${
                language === lang 
                  ? 'bg-black text-white shadow-sm' 
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;