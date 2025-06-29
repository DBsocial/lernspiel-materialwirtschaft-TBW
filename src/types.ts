
export interface Scene {
  scenarioText: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  imagePrompt: string;
}

export interface Feedback {
  isCorrect: boolean;
  explanation: string;
  userSelectedIndex: number;
}
