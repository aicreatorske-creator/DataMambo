import React from 'react';
import { Platform, PlatformData } from '../types';
import Header from '../components/Header';
import TopPosts from '../components/TopPosts';
import AISuggestions from '../components/AISuggestions';

interface ContentProps {
    platformData: PlatformData;
    selectedPlatform: Platform;
    onPlatformChange: (platform: Platform) => void;
}

const Content: React.FC<ContentProps> = ({ platformData, selectedPlatform, onPlatformChange }) => {
    return (
        <div className="p-6">
            <Header title="Content Performance" selectedPlatform={selectedPlatform} onPlatformChange={onPlatformChange} />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                 <div className="lg:col-span-1">
                    <TopPosts posts={platformData.topPosts} />
                </div>
                 <div className="lg:col-span-1">
                    <AISuggestions posts={platformData.topPosts} platform={selectedPlatform} />
                </div>
            </div>
        </div>
    );
};

export default Content;
