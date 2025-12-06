import React from 'react';
import { Language, Theme } from '../types';
import { MessageCircle, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, theme, toggleTheme }) => {
  
  const languages: Language[] = ['SQ', 'EN', 'BS', 'DE'];

  const handleWhatsApp = () => {
    window.open('https://wa.me/38344560507', '_blank');
  };

  return (
    <nav className="w-full flex justify-between items-start py-6 px-6 md:px-12 absolute top-0 z-50 pointer-events-none">
      {/* Logo Section - Pointer events auto to allow interaction */}
      <div className="flex flex-col items-start group cursor-default pointer-events-auto">
        <h1 className="text-lg md:text-xl font-display font-bold tracking-tight uppercase leading-none text-black dark:text-white drop-shadow-sm transition-colors">
          AUTO SALLON PLANJANE
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[1px] w-8 bg-brand-red transition-all duration-300"></div>
          <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase font-body transition-colors">
            PRONAR: SALMIN BEGI
          </p>
        </div>
      </div>

      {/* Right Section: Theme + Language + Contact */}
      <div className="flex items-center gap-3 pointer-events-auto">
        
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full p-2 shadow-sm border border-gray-100 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300"
          title={theme === 'light' ? "Dark Mode" : "Light Mode"}
        >
          {theme === 'light' ? <Moon size={20} strokeWidth={2} /> : <Sun size={20} strokeWidth={2} />}
        </button>

        {/* Navbar Contact Shortcut */}
        <button 
          onClick={handleWhatsApp}
          className="bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full p-2 shadow-sm border border-gray-100 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-[#25D366] transition-all duration-300"
          title="WhatsApp"
        >
          <MessageCircle size={20} strokeWidth={2} />
        </button>

        {/* Language Switcher */}
        <div className="flex items-center bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full p-1 shadow-sm border border-gray-100 dark:border-white/10 transition-colors">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1.5 text-[10px] font-bold rounded-full transition-all duration-300 font-body ${
                language === lang 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm' 
                  : 'text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white'
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