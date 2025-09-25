import React, { useState } from 'react';
import { generateContentSuggestions } from '../services/geminiService';
import { Post, Platform, AISuggestion } from '../types';

interface AISuggestionsProps {
    posts: Post[];
    platform: Platform;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ posts, platform }) => {
    const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetSuggestions = async () => {
        setIsLoading(true);
        setError(null);
        setSuggestions([]);
        try {
            const result = await generateContentSuggestions(posts, platform);
            setSuggestions(result);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const SuggestionCard: React.FC<{ suggestion: AISuggestion }> = ({ suggestion }) => (
        <div className="bg-background p-4 rounded-lg border border-white/10">
            <div className="flex items-center space-x-3 mb-2">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-on-surface flex items-center justify-center font-bold">
                    <SparklesIcon className="w-5 h-5"/>
                </span>
                <div>
                    <h4 className="font-bold text-on-surface">{suggestion.ideaTitle}</h4>
                    <span className="text-xs bg-primary/20 text-primary font-semibold px-2 py-0.5 rounded-full">{suggestion.contentType}</span>
                </div>
            </div>
            <p className="text-sm text-on-surface-secondary">{suggestion.caption}</p>
        </div>
    );

    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-on-surface">AI Content Suggestions</h3>
                    <p className="text-on-surface-secondary text-sm">Get new ideas based on your top posts.</p>
                </div>
                <button
                    onClick={handleGetSuggestions}
                    disabled={isLoading}
                    className="flex items-center space-x-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    {isLoading ? <SpinnerIcon /> : <SparklesIcon className="w-5 h-5"/>}
                    <span>{isLoading ? 'Generating...' : 'Get Ideas'}</span>
                </button>
            </div>
            
            {error && <div className="text-center text-danger bg-danger/10 p-3 rounded-lg">{error}</div>}

            <div className="space-y-4">
                {isLoading && (
                    <div className="text-center text-on-surface-secondary py-8">
                        <SpinnerIcon className="w-8 h-8 mx-auto mb-2" />
                        <p>Our AI is brainstorming... please wait.</p>
                    </div>
                )}
                {!isLoading && suggestions.length === 0 && !error && (
                     <div className="text-center text-on-surface-secondary py-8 border-2 border-dashed border-gray-600 rounded-lg">
                        <p>Click "Get Ideas" to generate content suggestions.</p>
                    </div>
                )}
                {suggestions.map((suggestion, index) => (
                    <SuggestionCard key={index} suggestion={suggestion} />
                ))}
            </div>
        </div>
    );
};

// Icons
const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.125 18.5l1.188-.648a2.25 2.25 0 011.423-1.423L16.875 15.25l.648 1.188a2.25 2.25 0 011.423 1.423l1.188.648-.648.648a2.25 2.25 0 01-1.423 1.423z" />
    </svg>
);
const SpinnerIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 animate-spin" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


export default AISuggestions;
