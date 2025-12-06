import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Location from './components/Location';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('SQ');

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 text-black font-sans selection:bg-brand-red selection:text-white overflow-x-hidden overflow-y-auto">
      
      {/* Cinematic Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-multiply" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
      </div>

      <Navbar 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        <Hero language={language} />
        <Location language={language} />
      </main>

    </div>
  );
};

export default App;