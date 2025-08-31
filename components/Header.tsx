import React from 'react';
import { Platform } from '../types';
import { platformIcons } from '../constants';

interface HeaderProps {
    title: string;
    description?: string;
    selectedPlatform?: Platform;
    onPlatformChange?: (platform: Platform) => void;
    showPlatformSelector?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, description, selectedPlatform, onPlatformChange, showPlatformSelector = true }) => {
    const PlatformIcon = selectedPlatform ? platformIcons[selectedPlatform] : null;

    return (
        <header className="p-6 flex justify-between items-center -m-6 mb-0">
            <div>
                <h1 className="text-3xl font-bold text-on-surface">{title}</h1>
                <p className="text-on-surface-secondary mt-1">{description || `Here's the latest data for your ${selectedPlatform} account.`}</p>
            </div>
            {showPlatformSelector && selectedPlatform && onPlatformChange && PlatformIcon && (
                 <div className="flex items-center space-x-4">
                    <div className="relative">
                        <select
                            value={selectedPlatform}
                            onChange={(e) => onPlatformChange(e.target.value as Platform)}
                            className="appearance-none bg-surface border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Select social media platform"
                        >
                            {Object.values(Platform).map(p => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                        <PlatformIcon
                            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-secondary"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;