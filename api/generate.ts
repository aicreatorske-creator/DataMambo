import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, Type } from "@google/genai";
import type { Post, AISuggestion } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { posts, platform } = req.body;

        if (!Array.isArray(posts) || !platform || typeof platform !== 'string') {
            return res.status(400).json({ error: 'Invalid request body: "posts" must be an array and "platform" must be a string.' });
        }

        const postSummaries = (posts as Post[]).map(p => `Caption: "${p.caption}", Likes: ${p.likes}, Comments: ${p.comments}`).join('\n');

        const prompt = `
            As a social media expert for ${platform}, analyze the following top-performing posts to identify trends and patterns in content that resonates with the audience.
            
            Top Posts Data:
            ${postSummaries}

            Based on this analysis, generate 3 creative and distinct new content suggestions. 
            Each suggestion should be tailored for the ${platform} platform.
            Return the response as a JSON array of objects.
        `;

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
        
        res.status(200).json(suggestions);

    } catch (error) {
        console.error("Error in Vercel function:", error);
        res.status(500).json({ error: "Failed to get suggestions from AI. Please try again." });
    }
}
