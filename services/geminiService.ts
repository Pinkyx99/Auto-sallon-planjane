import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key is available to avoid errors during static analysis if env is missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCarResponse = async (
  userMessage: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the AI service at the moment. Please check your API key.";
  }

  try {
    const model = ai.models.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are an expert car sales assistant for Autocar. 
      You are currently showcasing the 'Seat Leon FR 2016'.
      
      Vehicle Statistics & Details:
      - Model: Seat Leon FR
      - Year: 2016
      - Mileage: 178,000 km
      - Price: Me marrëveshje (Negotiable)
      - Condition: Komod (Comfortable), Mirëmbajtje e rregullt (Regularly Maintained), Certifikim (Certified)
      - Import Status: Pa dogan (Customs not paid), Swiss vetura (Swiss origin)
      - Engine: 2.0L Diesel (2.0 Dizell)
      - Power: 184 PS
      - Transmission: Automat (Automatic)
      - Theme: White Edition
      
      Your tone should be professional, reassuring, and helpful. 
      The website supports Albanian, English, Bosnian, and German.
      Respond in the language the user writes in. If the user asks in Albanian, reply in Albanian.
      
      Crucial Details to Mention:
      1. Always confirm it is "Automat" (Automatic).
      2. Mention it is "Pa dogan" (Customs not paid) but emphasize it is a "Swiss vetura" (High quality).
      3. Highlight the power: 184 PS from the 2.0 Diesel engine.
      4. Mention "Certifikim" (Certified) and regular maintenance history.`,
    });

    const chat = model.startChat({
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
    });

    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm having trouble fetching that information right now. Please try again later.";
  }
};