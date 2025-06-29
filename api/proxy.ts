
/**
 * WICHTIGER HINWEIS:
 * Diese Datei ist für die Ausführung auf einem SERVER (z.B. als Serverless Function bei Vercel) vorgesehen.
 * Sie empfängt Anfragen vom Frontend, verarbeitet sie sicher und kommuniziert mit der Google-API.
 * Der API-Schlüssel wird hier sicher über Umgebungsvariablen (`process.env.API_KEY`) verwendet
 * und ist niemals für den Client (Browser) sichtbar.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";
import { OCR_TEXT } from '../src/constants.ts';
import { Scene } from '../src/types.ts';

// --- SERVER-SIDE IMPLEMENTATION OF GEMINI LOGIC ---

if (!process.env.API_KEY) {
    // This error will be logged on the server, not shown to the user.
    throw new Error("API_KEY environment variable not set on the server");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function parseJsonResponse<T>(text: string): T {
    let jsonStr = text.trim();
    const fenceRegex = /^```(?:json)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[1]) {
        jsonStr = match[1].trim();
    }
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to parse JSON response on server:", text);
        throw new Error("Invalid JSON response from the API received.");
    }
}

async function generateImageServer(prompt: string): Promise<string> {
    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: `Clean, professional, vector art illustration of: ${prompt}. Minimalist, educational style, white background.`,
        config: { numberOfImages: 1, outputMimeType: 'image/jpeg' },
    });
    const base64ImageBytes = response.generatedImages?.[0]?.image?.imageBytes;
    if (base64ImageBytes) {
        return `data:image/jpeg;base64,${base64ImageBytes}`;
    }
    throw new Error('Image could not be generated on server.');
}

async function getInitialSceneDataServer(): Promise<Scene> {
    const prompt = `
      Du bist ein Gamemaster für ein Lernspiel für angehende Technische Betriebswirte in Deutschland.
      Dein Wissen basiert ausschließlich auf den folgenden Unterlagen über Materialwirtschaft & Logistik.
      Deine Aufgabe ist es, eine einzelne, neue und einzigartige Frage für ein textbasiertes Abenteuerspiel zu erstellen.

      Regeln:
      1.  **Szenario erstellen:** Formuliere ein kurzes, praxisnahes Szenario (2-4 Sätze) aus dem Bereich Materialwirtschaft oder Logistik, das auf den bereitgestellten Unterlagen basiert.
      2.  **Frage formulieren:** Stelle eine klare Multiple-Choice-Frage, die sich direkt auf das Szenario bezieht und mit den Daten aus den Unterlagen lösbar ist.
      3.  **Antwortoptionen:** Gib genau vier Antwortoptionen (A, B, C, D). Nur eine davon darf korrekt sein. Die falschen Antworten sollten plausibel, aber nachweislich falsch sein.
      4.  **Bild-Prompt:** Erstelle einen kurzen, prägnanten Prompt (3-7 Wörter) für eine KI-Bildgenerierung, der das Szenario visuell darstellt. Beispiel: "Gabelstapler im Hochregallager".
      5.  **JSON-Format:** Gib deine Antwort AUSSCHLIESSLICH als ein einzelnes JSON-Objekt zurück. Verwende keine Markdown-Formatierung wie \`\`\`json. Das JSON-Objekt muss genau dieser Struktur folgen:
          {
            "scenarioText": "...",
            "question": "...",
            "options": ["...", "...", "...", "..."],
            "correctAnswerIndex": N,
            "imagePrompt": "..."
          }

      Hier sind deine Unterlagen, aus denen du die Informationen beziehen musst:
      ---
      ${OCR_TEXT}
      ---
    `;
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: prompt,
        config: { responseMimeType: "application/json", temperature: 0.9 },
    });
    if (!response.text) {
        throw new Error("Received an empty text response from the API.");
    }
    return parseJsonResponse<Scene>(response.text);
};

async function getFeedbackAndNextSceneDataServer(previousScene: Scene, userAnswerIndex: number): Promise<{ feedback: { isCorrect: boolean; explanation: string; }; nextScene: Scene; }> {
    const userAnswer = previousScene.options[userAnswerIndex];
    const correctAnswer = previousScene.options[previousScene.correctAnswerIndex];
    const prompt = `
        Du bist ein Gamemaster für ein Lernspiel für angehende Technische Betriebswirte in Deutschland.
        Deine Unterlagen über Materialwirtschaft & Logistik sind unten angeführt.

        Die letzte Runde des Spiels war wie folgt:
        - Szenario: "${previousScene.scenarioText}"
        - Frage: "${previousScene.question}"
        - Benutzerantwort: "${userAnswer}"
        - Korrekte Antwort wäre gewesen: "${correctAnswer}"

        Deine Aufgabe ist es, zwei Dinge zu tun:
        1.  **Feedback geben:**
            *   Bewerte, ob die Benutzerantwort richtig oder falsch war.
            *   Gib eine kurze, prägnante Erklärung (1-2 Sätze), warum die Antwort richtig oder falsch ist. Beziehe dich dabei auf die Daten in deinen Unterlagen.
        2.  **Neue Frage erstellen:**
            *   Generiere ein komplett NEUES, anderes Szenario mit einer neuen Frage und neuen Optionen, basierend auf einem ANDEREN Teil deiner Unterlagen. Es darf keine Wiederholung der vorherigen Frage sein.

        Regeln für die Antwort:
        -   Gib deine Antwort AUSSCHLIESSLICH als ein einzelnes JSON-Objekt zurück.
        -   Verwende keine Markdown-Formatierung wie \`\`\`json.
        -   Das JSON-Objekt muss genau dieser Struktur entsprechen:
            {
              "feedback": {
                "isCorrect": true/false,
                "explanation": "..."
              },
              "nextScene": {
                "scenarioText": "...",
                "question": "...",
                "options": ["...", "...", "...", "..."],
                "correctAnswerIndex": N,
                "imagePrompt": "..."
              }
            }

        Hier sind deine Unterlagen, aus denen du die Informationen beziehen musst:
        ---
        ${OCR_TEXT}
        ---
    `;
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: prompt,
        config: { responseMimeType: "application/json", temperature: 0.9 },
    });
    if (!response.text) {
        throw new Error("Received an empty text response from the API.");
    }
    return parseJsonResponse<{ feedback: { isCorrect: boolean; explanation: string; }; nextScene: Scene; }>(response.text);
};


// --- GENERIC API ACTION HANDLER ---
async function handleApiRequest(requestBody: any) {
    const { action, payload } = requestBody;

    switch (action) {
        case 'getInitialScene':
            return await getInitialSceneDataServer();

        case 'getFeedbackAndNextScene':
            if (!payload || !payload.previousScene || payload.userAnswerIndex === undefined) {
                throw new Error("Invalid payload for getFeedbackAndNextScene");
            }
            return await getFeedbackAndNextSceneDataServer(payload.previousScene, payload.userAnswerIndex);

        case 'generateImage':
             if (!payload || !payload.prompt) {
                throw new Error("Invalid payload for generateImage");
            }
            const imageUrl = await generateImageServer(payload.prompt);
            return { imageUrl };
            
        default:
            throw new Error(`Unknown action: ${action}`);
    }
}

// --- VERCEL SERVERLESS FUNCTION HANDLER ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Nur POST-Anfragen erlauben
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = await handleApiRequest(req.body);
    // Erfolgreiche Antwort zurücksenden
    return res.status(200).json(data);
  } catch (error) {
    // Fehler auf dem Server loggen für Debugging
    console.error('[API_ERROR]', error);
    
    // Allgemeine Fehlermeldung an den Client senden
    const message = error instanceof Error ? error.message : 'Ein unbekannter Serverfehler ist aufgetreten.';
    return res.status(500).json({ error: message });
  }
}
