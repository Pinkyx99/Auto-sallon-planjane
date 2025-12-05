import React from 'react';
import { Menu, ArrowUpRight, Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  onInquire: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInquire, language, setLanguage }) => {
  
  const translations = {
    SQ: { inquire: "PYET" },
    EN: { inquire: "INQUIRE" },
    BS: { inquire: "UPIT" },
    DE: { inquire: "ANFRAGE" }
  };

  const languages: Language[] = ['SQ', 'EN', 'BS', 'DE'];

  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 md:px-16 absolute top-0 z-50 bg-transparent text-black">
      <div className="flex flex-col items-start group cursor-default">
        <h1 className="text-xl md:text-3xl font-display font-black tracking-tighter uppercase leading-none">
          AUTO SALLON PLANJANE
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[2px] w-6 bg-brand-red transition-all duration-300 group-hover:w-12"></div>
          <p className="text-[9px] md:text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
            PRONAR: SALMIN BEGI
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-white/50 backdrop-blur-md rounded-full p-1 border border-gray-100 shadow-sm">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-300 ${
              language === lang 
                ? 'bg-black text-white shadow-md' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <button 
          onClick={onInquire}
          className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest hover:text-brand-red transition-colors cursor-pointer group"
        >
          <span>{translations[language].inquire}</span>
          <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;