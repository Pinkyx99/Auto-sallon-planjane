import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarAssistant from './components/CarAssistant';
import { Language } from './types';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('SQ');

  return (
    <div className="relative min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* Red border frame effect similar to the original design, but subtle */}
      <div className="fixed inset-0 border-[8px] border-transparent md:border-white z-40 pointer-events-none"></div>
      <div className="fixed inset-2 border-[1px] border-gray-100 z-40 pointer-events-none rounded-[2rem] hidden md:block"></div>

      <Navbar 
        onInquire={() => setIsChatOpen(true)} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        <Hero language={language} />
      </main>

      <CarAssistant 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        language={language}
      />

    </div>
  );
};

export default App;
