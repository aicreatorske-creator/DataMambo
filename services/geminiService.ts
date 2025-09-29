import { GoogleGenAI, Type } from "@google/genai";
import { Post, AISuggestion } from '../types';

// In a Vite-based project, environment variables must be prefixed with VITE_
// and accessed via import.meta.env. This is a security measure to prevent
// accidental exposure of server-side keys on the client.
const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
    console.warn("VITE_API_KEY environment variable is not set. AI features will not be available.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const model = "gemini-2.5-flash";

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        ideaTitle: {
          type: Type.STRING,
          description: "A short, catchy title for the content idea.",
        },
        caption: {
          type: Type.STRING,
          description: "A compelling caption for the social media post.",
        },
        contentType: {
            type: Type.STRING,
            description: "The suggested format for the content (e.g., 'Image Post', 'Short Video', 'Carousel', 'Thread').",
        }
      },
      required: ["ideaTitle", "caption", "contentType"],
    },
};

export const generateContentSuggestions = async (posts: Post[], platform: string): Promise<AISuggestion[]> => {
    if (!API_KEY) {
        throw new Error("API Key not configured. Please set the API_KEY environment variable.");
    }

    const postSummaries = posts.map(p => `Caption: "${p.caption}", Likes: ${p.likes}, Comments: ${p.comments}`).join('\n');

    const prompt = `
        As a social media expert for ${platform}, analyze the following top-performing posts to identify trends and patterns in content that resonates with the audience.
        
        Top Posts Data:
        ${postSummaries}

        Based on this analysis, generate 3 creative and distinct new content suggestions. 
        Each suggestion should be tailored for the ${platform} platform.
        Return the response as a JSON array of objects.
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.8,
            }
        });
        
        const jsonText = response.text.trim();
        const suggestions: AISuggestion[] = JSON.parse(jsonText);
        return suggestions;

    } catch (error) {
        console.error("Error generating content suggestions:", error);
        throw new Error("Failed to get suggestions from AI. Please try again.");
    }
};
