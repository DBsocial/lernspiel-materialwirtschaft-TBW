
import React from 'react';
import { Scene, Feedback } from '../types.ts';
import LoadingSpinner from './LoadingSpinner.tsx';

interface GameScreenProps {
  scene: Scene;
  image: string | null;
  gameState: 'playing' | 'evaluating' | 'feedback';
  feedback: Feedback | null;
  onSelectAnswer: (selectedIndex: number) => void;
  onNextQuestion: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ scene, image, gameState, feedback, onSelectAnswer, onNextQuestion }) => {
  const isAnswered = gameState === 'feedback';

  const getButtonClass = (index: number) => {
    let baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed";
    
    if (!isAnswered) {
      return `${baseClass} bg-gray-700 border-gray-600 hover:bg-gray-600 hover:border-blue-400`;
    }

    if (index === scene.correctAnswerIndex) {
      return `${baseClass} bg-green-800/80 border-green-500`;
    }
    
    if(feedback && !feedback.isCorrect && feedback.userSelectedIndex === index) {
       return `${baseClass} bg-red-800/80 border-red-500`;
    }

    return `${baseClass} bg-gray-800 border-gray-700 opacity-60`;
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 md:p-8 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: Image and Scenario */}
        <div className="flex flex-col gap-6">
          <div className="w-full aspect-video bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
            {image ? (
              <img src={image} alt={scene.imagePrompt} className="w-full h-full object-cover" />
            ) : (
              <LoadingSpinner />
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-3">Szenario</h3>
            <p className="text-gray-300 leading-relaxed">{scene.scenarioText}</p>
          </div>
        </div>

        {/* Right side: Question and Options */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-3">Frage</h3>
            <p className="text-gray-200 text-xl mb-6 font-semibold">{scene.question}</p>
            <div className="space-y-4">
              {scene.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onSelectAnswer(index)}
                  disabled={gameState !== 'playing'}
                  className={getButtonClass(index)}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span> {option}
                </button>
              ))}
            </div>
          </div>
          
          {gameState === 'evaluating' && (
            <div className="mt-6 flex items-center justify-center text-lg text-gray-400">
                <LoadingSpinner />
                <span className="ml-3">Bewerte deine Antwort...</span>
            </div>
          )}

          {isAnswered && feedback && (
            <div className={`mt-6 p-4 rounded-lg animate-fade-in ${feedback.isCorrect ? 'bg-green-900/50 border-green-700' : 'bg-red-900/50 border-red-700'} border`}>
                <h4 className="font-bold text-xl mb-2">{feedback.isCorrect ? 'Richtig!' : 'Leider Falsch'}</h4>
                <p className="text-gray-200">{feedback.explanation}</p>
                <button onClick={onNextQuestion} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Nächste Frage
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
