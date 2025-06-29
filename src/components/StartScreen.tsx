
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in">
      <h2 className="text-4xl font-bold text-white mb-4">Willkommen!</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Teste dein Wissen in Materialwirtschaft & Logistik für den Technischen Betriebswirt. Beantworte KI-generierte Fragen in einem interaktiven Abenteuer.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Lernabenteuer starten
      </button>
    </div>
  );
};

export default StartScreen;
