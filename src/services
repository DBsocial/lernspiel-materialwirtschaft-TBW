
import { Scene, Feedback } from '../types.ts';

/**
 * A helper function to call our secure backend API proxy.
 * @param action The specific action the backend should perform.
 * @param payload The data required for the action.
 * @returns The JSON response from the backend.
 */
async function callApi<T>(action: string, payload?: unknown): Promise<T> {
  try {
    const response = await fetch('/api/proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action, payload }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error Response:', errorData);
      throw new Error(errorData.error || `Fehler von der API erhalten: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error(`Fehler beim Aufrufen der API-Aktion "${action}":`, error);
    // Re-throw a more user-friendly error
    throw new Error('Die Kommunikation mit dem Server ist fehlgeschlagen. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.');
  }
}

export async function generateImage(prompt: string): Promise<string> {
    const { imageUrl } = await callApi<{ imageUrl: string }>('generateImage', { prompt });
    return imageUrl;
}

export const getInitialSceneData = async (): Promise<Scene> => {
    return callApi<Scene>('getInitialScene');
};

export const getFeedbackAndNextSceneData = async (previousScene: Scene, userAnswerIndex: number): Promise<{ feedback: Feedback; nextScene: Scene; }> => {
    const payload = { 
      previousScene, 
      userAnswerIndex,
    };
    const result = await callApi<{ feedback: { isCorrect: boolean; explanation: string; }; nextScene: Scene; }>('getFeedbackAndNextScene', payload);
    
    // The backend only returns the core feedback, we add the userSelectedIndex here.
    const feedback: Feedback = {
      ...result.feedback,
      userSelectedIndex: userAnswerIndex,
    };
    
    return { feedback, nextScene: result.nextScene };
};
