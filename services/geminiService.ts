import { Post, AISuggestion } from '../types';

export const generateContentSuggestions = async (posts: Post[], platform: string): Promise<AISuggestion[]> => {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ posts, platform }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Request failed with status ${response.status}`);
        }

        const suggestions: AISuggestion[] = await response.json();
        return suggestions;

    } catch (error) {
        console.error("Error generating content suggestions:", error);
        if (error instanceof Error) {
             throw new Error(error.message || "Failed to get suggestions from AI. Please try again.");
        }
        throw new Error("An unknown error occurred while fetching suggestions.");
    }
};
