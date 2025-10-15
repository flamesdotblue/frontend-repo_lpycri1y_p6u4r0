import React, { useState } from 'react';
import EntryPage from './components/EntryPage';
import DeliveryStudent from './components/DeliveryStudent';
import DineoutStudent from './components/DineoutStudent';
import { Home, Utensils, Gift } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState('entry'); // 'entry' | 'delivery' | 'dineout'
  const [studentMode, setStudentMode] = useState(false);

  const toggleStudentMode = () => setStudentMode((s) => !s);

  return (
    <div className="min-h-screen font-inter">
      {/* Top app switcher for previewing the three requested screens */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-md px-4 py-2 flex items-center justify-between">
          <div className="text-sm font-semibold">Swiggy – Student Mode</div>
          <div className="flex items-center gap-2 text-xs">
            <button onClick={() => setScreen('entry')} className={`flex items-center gap-1 px-3 py-1 rounded-full border ${screen==='entry'?'bg-gray-900 text-white border-gray-900':'bg-white'} `}><Home size={14}/> Entry</button>
            <button onClick={() => setScreen('delivery')} className={`flex items-center gap-1 px-3 py-1 rounded-full border ${screen==='delivery'?'bg-[#FC8019] text-white border-[#FC8019]':'bg-white'}`}><Utensils size={14}/> Delivery</button>
            <button onClick={() => setScreen('dineout')} className={`flex items-center gap-1 px-3 py-1 rounded-full border ${screen==='dineout'?'bg-[#3B009D] text-white border-[#3B009D]':'bg-white'}`}><Gift size={14}/> Dineout</button>
          </div>
        </div>
      </div>

      {screen === 'entry' && (
        <EntryPage
          studentMode={studentMode}
          onToggleStudentMode={() => {
            if (!studentMode) setStudentMode(true);
          }}
          goToDelivery={() => setScreen('delivery')}
        />
      )}

      {screen === 'delivery' && (
        <DeliveryStudent studentMode={studentMode} onToggleStudentMode={toggleStudentMode} />
      )}

      {screen === 'dineout' && (
        <DineoutStudent studentMode={studentMode} onToggleStudentMode={toggleStudentMode} />
      )}
    </div>
  );
}
