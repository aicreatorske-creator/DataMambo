

import React from 'react';
// FIX: Import the 'Metric' type to resolve the 'Cannot find name' error.
import { Platform, PlatformData, Theme, Metric } from '../types';
import { Page } from '../App';
import Header from '../components/Header';
import MetricCard from '../components/MetricCard';
import { platformIcons } from '../constants';

interface OverviewProps {
    allPlatformData: Record<Platform, PlatformData>;
    onNavigate: (page: Page) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ShortcutCard: React.FC<{ icon: JSX.Element, title: string, description: string, onClick: () => void }> = ({ icon, title, description, onClick }) => (
    <button onClick={onClick} className="bg-surface p-6 rounded-xl shadow-lg h-full text-left transition-all duration-300 hover:scale-105 hover:bg-primary/20 border border-transparent hover:border-primary">
        <div className="text-primary mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-on-surface mb-2">{title}</h3>
        <p className="text-on-surface-secondary">{description}</p>
    </button>
);

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;

const ThemeToggleCard: React.FC<{ theme: Theme, setTheme: (theme: Theme) => void }> = ({ theme, setTheme }) => {
    const isDark = theme !== 'light';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <div className="bg-surface p-6 rounded-xl shadow-lg h-full flex flex-col">
            <div className="text-primary mb-3"><SunIcon /></div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Display Mode</h3>
            <p className="text-on-surface-secondary flex-grow">Switch between light and dark themes.</p>
            <div className="flex items-center justify-between mt-4">
                <label htmlFor="theme-toggle-light" className="text-sm font-medium text-on-surface-secondary cursor-pointer">Light</label>
                <button
                    id="theme-toggle"
                    onClick={toggleTheme}
                    type="button"
                    role="switch"
                    aria-checked={isDark}
                    className={`${
                        isDark ? 'bg-primary' : 'bg-gray-600'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface`}
                >
                    <span className="sr-only">Toggle Dark Mode</span>
                    <span
                        aria-hidden="true"
                        className={`${
                            isDark ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    />
                </button>
                <label htmlFor="theme-toggle-dark" className="text-sm font-medium text-on-surface-secondary cursor-pointer">Dark</label>
            </div>
        </div>
    );
};


const PlatformMetricCard: React.FC<{metric: Metric}> = ({ metric }) => {
    const isIncrease = metric.changeType === 'increase';
    const changeColor = isIncrease ? 'text-success' : 'text-danger';
    const ArrowIcon = isIncrease ? () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> : () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>;

    return (
        <div className="bg-background p-4 rounded-lg">
            <h4 className="text-on-surface-secondary text-sm font-medium truncate">{metric.title}</h4>
            <div className="flex justify-between items-end mt-1">
                <p className="text-2xl font-bold text-on-surface">{metric.value}</p>
                <div className={`flex items-center space-x-1 text-xs font-semibold ${changeColor}`}>
                    <ArrowIcon />
                    <span>{metric.change}</span>
                </div>
            </div>
        </div>
    )
}

const Overview: React.FC<OverviewProps> = ({ allPlatformData, onNavigate, theme, setTheme }) => {
    return (
        <div className="p-6 space-y-8">
            <Header title="Overview" description="A global snapshot of all your social media accounts." showPlatformSelector={false} />
            
            <div>
                 <h2 className="text-2xl font-bold text-on-surface mb-4">Platform Metrics</h2>
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {Object.entries(allPlatformData).map(([platform, data]) => {
                        const PlatformIcon = platformIcons[platform as Platform];
                        return (
                            <div key={platform} className="bg-surface p-6 rounded-xl shadow-lg flex flex-col gap-y-4">
                                <div className="flex items-center space-x-3">
                                    {PlatformIcon && <PlatformIcon className="w-8 h-8 text-on-surface"/>}
                                    <h3 className="text-xl font-bold text-on-surface">{platform}</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {data.metrics.map(metric => (
                                        <PlatformMetricCard key={metric.title} metric={metric} />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-on-surface mb-4">Quick Access</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ShortcutCard 
                        icon={<ChartBarIcon />} 
                        title="Analytics" 
                        description="Dive deep into your growth and engagement charts."
                        onClick={() => onNavigate('Analytics')}
                    />
                    <ShortcutCard 
                        icon={<DocumentTextIcon />} 
                        title="Content"
                        description="Review your top performing posts and content strategy."
                        onClick={() => onNavigate('Content')}
                    />
                    <ShortcutCard 
                        icon={<UsersIcon />}
                        title="Audience"
                        description="Understand who your followers are and where they come from."
                        onClick={() => onNavigate('Audience')}
                    />
                    <ThemeToggleCard theme={theme} setTheme={setTheme} />
                </div>
            </div>
        </div>
    );
};

// Icons for Shortcut Cards
const ChartBarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const DocumentTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 1.803" /></svg>;

export default Overview;