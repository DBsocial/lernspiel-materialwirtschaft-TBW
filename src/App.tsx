
import React, { useState, useCallback } from 'react';
import { Scene, Feedback } from './types.ts';
import { getInitialSceneData, getFeedbackAndNextSceneData, generateImage } from './services/geminiService.ts';
import Header from './components/Header.tsx';
import StartScreen from './components/StartScreen.tsx';
import GameScreen from './components/GameScreen.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';

type GameState = 'start' | 'loading_initial' | 'playing' | 'evaluating' | 'feedback';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentFeedback, setCurrentFeedback] = useState<Feedback | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [nextSceneData, setNextSceneData] = useState<{ scene: Scene; imageUrl: string | null } | null>(null);

  const handleStartGame = useCallback(async () => {
    setGameState('loading_initial');
    setError(null);
    setCurrentImage(null);
    setNextSceneData(null);
    try {
      // 1. Fetch only the text data first
      const scene = await getInitialSceneData();
      setCurrentScene(scene);
      setScore(0);
      setTotalQuestions(0);
      setGameState('playing');

      // 2. Fetch the image in the background
      generateImage(scene.imagePrompt)
        .then(imageUrl => {
            // Only update if we are still on the same scene
            setCurrentScene(prevScene => {
                if (prevScene?.scenarioText === scene.scenarioText) {
                    setCurrentImage(imageUrl);
                }
                return prevScene;
            });
        })
        .catch(err => {
            console.error("Image generation failed for initial scene:", err);
            // The game can continue without the image
        });

    } catch (err) {
      console.error(err);
      setError('Fehler beim Starten des Spiels. Bitte versuchen Sie es später erneut.');
      setGameState('start');
    }
  }, []);

  const handleSelectAnswer = useCallback(async (selectedIndex: number) => {
    if (!currentScene) return;

    setGameState('evaluating');
    setError(null);
    setTotalQuestions(prev => prev + 1);

    try {
      // 1. Get feedback and NEXT scene text data
      const { feedback, nextScene } = await getFeedbackAndNextSceneData(currentScene, selectedIndex);
      
      setCurrentFeedback(feedback);
      if (feedback.isCorrect) {
        setScore(prev => prev + 1);
      }
      
      // Store the upcoming scene data (without image)
      setNextSceneData({ scene: nextScene, imageUrl: null });
      setGameState('feedback');

      // 2. Fetch the NEXT image in the background while user reads feedback
      generateImage(nextScene.imagePrompt)
        .then(nextImageUrl => {
            setNextSceneData({ scene: nextScene, imageUrl: nextImageUrl });
        })
        .catch(err => {
            console.error("Image generation failed for next scene:", err);
            // The next question can be displayed without an image
        });

    } catch (err) {
      console.error(err);
      setError('Fehler beim Abrufen der nächsten Frage. Bitte versuchen Sie es erneut.');
      setGameState('playing');
    }
  }, [currentScene]);

  const handleNextQuestion = () => {
    if (!nextSceneData) {
        setError('Fehler: Die nächste Frage konnte nicht geladen werden. Das Spiel wird neu gestartet.');
        setGameState('start');
        return;
    }
    
    setCurrentScene(nextSceneData.scene);
    setCurrentImage(nextSceneData.imageUrl);

    setCurrentFeedback(null);
    setNextSceneData(null);
    setGameState('playing');
  };

  const renderContent = () => {
    if (error) {
        return (
            <div className="text-center p-8 bg-red-900/50 rounded-lg">
                <p className="text-xl text-red-300">{error}</p>
                <button
                    onClick={handleStartGame}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Neu starten
                </button>
            </div>
        );
    }
    
    switch (gameState) {
      case 'start':
        return <StartScreen onStart={handleStartGame} />;
      case 'loading_initial':
        return <div className="text-center p-8"><LoadingSpinner /> <p className="mt-4 text-lg">Bereite dein Lernabenteuer vor...</p></div>;
      case 'playing':
      case 'evaluating':
      case 'feedback':
        if (currentScene) {
          return <GameScreen 
            scene={currentScene} 
            image={currentImage}
            gameState={gameState}
            feedback={currentFeedback}
            onSelectAnswer={handleSelectAnswer}
            onNextQuestion={handleNextQuestion}
          />;
        }
        return null; // Should not happen
      default:
        return <StartScreen onStart={handleStartGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header score={score} totalQuestions={totalQuestions} />
      <main className="w-full max-w-4xl mx-auto mt-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
