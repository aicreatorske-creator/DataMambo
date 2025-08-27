
import React from 'react';
import { Platform } from '../types';

interface HeaderProps {
    selectedPlatform: Platform;
    onPlatformChange: (platform: Platform) => void;
}

const platformIcons: Record<Platform, string> = {
    [Platform.Instagram]: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65d131d61633538f61286a8b3353597d341d3b38/icons/Instagram.svg',
    [Platform.Twitter]: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65d131d61633538f61286a8b3353597d341d3b38/icons/Twitter.svg',
    [Platform.Facebook]: 'https://raw.githubusercontent.com/tandpfun/skill-icons/65d131d61633538f61286a8b3353597d341d3b38/icons/Facebook.svg',
};

const Header: React.FC<HeaderProps> = ({ selectedPlatform, onPlatformChange }) => {
    return (
        <header className="p-6 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-on-surface">Dashboard</h1>
                <p className="text-on-surface-secondary">Welcome back, here's your social media overview.</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <select
                        value={selectedPlatform}
                        onChange={(e) => onPlatformChange(e.target.value as Platform)}
                        className="appearance-none bg-surface border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        {Object.values(Platform).map(p => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                    <img
                        src={platformIcons[selectedPlatform]}
                        alt={`${selectedPlatform} icon`}
                        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
