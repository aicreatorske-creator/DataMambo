
import React, { useState, useEffect, useRef } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const SelectedPlatformIcon = selectedPlatform ? platformIcons[selectedPlatform] : null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handlePlatformSelect = (platform: Platform) => {
        if (onPlatformChange) {
            onPlatformChange(platform);
        }
        setIsOpen(false);
    };

    return (
        <header className="p-6 flex justify-between items-center -m-6 mb-0">
            <div>
                <h1 className="text-3xl font-bold text-on-surface">{title}</h1>
                <p className="text-on-surface-secondary mt-1">{description || `Here's the latest data for your ${selectedPlatform} account.`}</p>
            </div>
            {showPlatformSelector && selectedPlatform && onPlatformChange && SelectedPlatformIcon && (
                 <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-2 bg-surface border border-white/10 rounded-lg py-2 px-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors duration-200 hover:bg-white/5"
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                    >
                        <SelectedPlatformIcon className="w-5 h-5" />
                        <span className="font-medium">{selectedPlatform}</span>
                        <ChevronDownIcon className={`w-5 h-5 text-on-surface-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                        className={`absolute right-0 mt-2 w-56 origin-top-right bg-surface rounded-lg shadow-2xl ring-1 ring-white/5 focus:outline-none z-10 transition-all duration-150 ease-out ${
                            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                        role="listbox"
                        aria-label="Select social media platform"
                    >
                        <div className="p-1">
                            {Object.values(Platform).map(p => {
                                const PlatformIcon = platformIcons[p];
                                const isSelected = p === selectedPlatform;
                                return (
                                    <button
                                        key={p}
                                        onClick={() => handlePlatformSelect(p)}
                                        className={`w-full text-left flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                                            isSelected
                                                ? 'bg-primary text-white'
                                                : 'text-on-surface-secondary hover:bg-white/10 hover:text-on-surface'
                                        }`}
                                        role="option"
                                        aria-selected={isSelected}
                                    >
                                        <PlatformIcon className="w-5 h-5" />
                                        <span>{p}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                 </div>
            )}
        </header>
    );
};

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);


export default Header;
