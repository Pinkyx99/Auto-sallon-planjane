
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
    const model = ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage, // Note: For simple text generation without full chat history management in this simplified function, we'll just pass the user message. Ideally, use startChat for conversation.
      config: {
        systemInstruction: `You are an expert car sales assistant for Auto Sallon Planjane.
        
        Current Inventory:
        
        1. SEAT LEON FR (2016)
           - Engine: 2.0L Diesel (184 PS)
           - Transmission: Automatic
           - Mileage: 178,000 km
           - Origin: Swiss Import (Pa dogan/Customs Unpaid)
           - Color: White
        
        2. SEAT ATECA FR (2021)
           - Engine: 1.5 TSI Petrol (150 PS)
           - Transmission: Automatic
           - Mileage: 200,000 km
           - Origin: Swiss Import (Pa dogan/Customs Unpaid)
           - Color: Black
           - Features: FR Performance, Sport Package, Full LED, Virtual Cockpit.
        
        General Info:
        - All cars are Certified with Regular Maintenance.
        - Prices are "Me marrëveshje" (By Agreement/Negotiable).
        - Contact Owner: Salmin Begi via WhatsApp button on site.
        
        Your tone should be professional and helpful. Support Albanian, English, Bosnian, and German.`,
      }
    });

    // Re-implementing correctly with chat if needed, but for now using single turn generation as per previous simplified implementation pattern or adapting to use chat if history is provided.
    // However, the original file used startChat. Let's stick to that pattern for consistency if we were fully upgrading the chat service.
    // Since the Chat UI was removed, this service file is currently dormant in the UI, but we keep it updated just in case.
    
    // Quick fix to match previous structure exactly but with updated content:
     const chatModel = ai.models.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are an expert car sales assistant for Auto Sallon Planjane.
        
      Current Inventory:
      
      1. SEAT LEON FR (2016)
         - Engine: 2.0L Diesel (184 PS)
         - Transmission: Automatic
         - Mileage: 178,000 km
         - Origin: Swiss Import (Pa dogan/Customs Unpaid)
         - Color: White
      
      2. SEAT ATECA FR (2021)
         - Engine: 1.5 TSI Petrol (150 PS)
         - Transmission: Automatic
         - Mileage: 200,000 km
         - Origin: Swiss Import (Pa dogan/Customs Unpaid)
         - Color: Black
         - Features: FR Performance, Sport Package, Full LED, Virtual Cockpit.
      
      General Info:
      - All cars are Certified with Regular Maintenance.
      - Prices are "Me marrëveshje" (By Agreement/Negotiable).
      
      Respond in the user's language.`,
    });

    const chat = chatModel.startChat({
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
