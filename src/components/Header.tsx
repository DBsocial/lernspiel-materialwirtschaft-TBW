
import React from 'react';

interface HeaderProps {
    score: number;
    totalQuestions: number;
}

const Header: React.FC<HeaderProps> = ({ score, totalQuestions }) => {
  return (
    <header className="w-full max-w-4xl mx-auto flex justify-between items-center bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-300">
        Lernspiel: Materialwirtschaft
      </h1>
      <div className="text-lg font-semibold bg-gray-700 px-4 py-2 rounded-lg">
        <span className="text-white">Punkte: </span>
        <span className="text-green-400">{score}</span>
        <span className="text-gray-400"> / {totalQuestions}</span>
      </div>
    </header>
  );
};

export default Header;
