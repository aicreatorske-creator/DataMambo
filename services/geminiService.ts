
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getAIContentSuggestions = async (topic: string): Promise<string> => {
    try {
        const prompt = `You are a social media expert. Based on the successful post topic "${topic}", generate 3 new, creative content ideas for a social media campaign. Format the response as a numbered list with a title and a brief description for each idea.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error generating content with Gemini API:", error);
        throw new Error("Failed to get AI suggestions. Please check your API key and network connection.");
    }
};
