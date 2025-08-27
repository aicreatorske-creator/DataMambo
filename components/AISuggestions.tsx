import React, { useState, useEffect, useCallback } from 'react';
import { getAIContentSuggestions } from '../services/geminiService';

interface AISuggestionsProps {
    topic: string;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ topic }) => {
    const [suggestions, setSuggestions] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSuggestions = useCallback(async () => {
        if (!topic) return;
        setLoading(true);
        setError(null);
        try {
            const result = await getAIContentSuggestions(topic);
            setSuggestions(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [topic]);

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchSuggestions();
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [fetchSuggestions]);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="ml-2 text-on-surface-secondary">Generating ideas...</p>
                </div>
            );
        }
        if (error) {
            return (
                <div className="text-danger p-4 bg-danger/10 rounded-lg">
                    <p className="font-semibold">Error:</p>
                    <p>{error}</p>
                </div>
            );
        }
        if (suggestions) {
            // Using a simple parser for the numbered list format from Gemini
            const suggestionItems = suggestions.split('\n').filter(line => line.trim().match(/^\*|\d+\./));
            
            return (
                <ul className="space-y-4">
                    {suggestionItems.map((item, index) => {
                        const cleanItem = item.replace(/^\*|\d+\.\s*/, '');
                        const parts = cleanItem.split(/:\s*|\s+-\s+/, 2);
                        const title = parts[0].replace(/\"|\*/g, '').trim();
                        const description = parts[1];
                        return (
                            <li key={index} className="text-on-surface-secondary text-sm">
                                <strong className="text-on-surface block">{title}</strong>
                                {description}
                            </li>
                        );
                    })}
                </ul>
            );
        }
        return <p className="text-on-surface-secondary">No suggestions available.</p>;
    };

    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg h-full flex flex-col">
            <h3 className="text-xl font-bold text-on-surface mb-4 flex items-center">
                <SparklesIcon />
                <span className="ml-2">AI Content Suggestions</span>
            </h3>
            <p className="text-sm text-on-surface-secondary mb-4">Based on: <em className="italic">"{topic}"</em></p>
            <div className="min-h-[150px] flex-1">
                {renderContent()}
            </div>
            <button
                onClick={fetchSuggestions}
                disabled={loading}
                className="w-full mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Generating...' : 'Regenerate Ideas'}
            </button>
        </div>
    );
};

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2.166a2.25 2.25 0 012.25-2.25h5.5A2.25 2.25 0 0115 2.166v2.5A2.25 2.25 0 0112.75 7h-5.5A2.25 2.25 0 015 4.666v-2.5zM12.75 8.5a2.25 2.25 0 012.25-2.25h2.5a2.25 2.25 0 012.25 2.25v5.5A2.25 2.25 0 0117.5 17h-2.5a2.25 2.25 0 01-2.25-2.25v-5.5zM2.5 8.5A2.25 2.25 0 014.75 6.25h2.5A2.25 2.25 0 019.5 8.5v5.5A2.25 2.25 0 017.25 17h-2.5A2.25 2.25 0 012.5 14.666v-5.5z" clipRule="evenodd" />
    </svg>
);


export default AISuggestions;
