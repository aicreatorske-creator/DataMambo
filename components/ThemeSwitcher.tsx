import React from 'react';
import { Theme } from '../types';

interface ThemeSwitcherProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
    const themeOptions: { name: Theme, label: string }[] = [
        { name: 'light', label: 'Light' },
        { name: 'dark', label: 'Dark' },
        { name: 'bw', label: 'B & W' }
    ];

    return (
        <div className="flex items-center space-x-2 bg-background p-1 rounded-full">
            {themeOptions.map((option) => (
                <button
                    key={option.name}
                    onClick={() => setTheme(option.name)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                        theme === option.name
                            ? 'bg-primary text-white shadow-md'
                            : 'text-on-surface-secondary hover:text-on-surface'
                    }`}
                    aria-pressed={theme === option.name}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
