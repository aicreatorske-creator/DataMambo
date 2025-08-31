// FIX: Correctly import `useState` from 'react' to resolve multiple 'Cannot find name' errors.
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import { Platform, Theme } from './types';
import { MOCK_DATA } from './constants';

import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Content from './pages/Content';
import Audience from './pages/Audience';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

export type Page = 'Overview' | 'Analytics' | 'Content' | 'Audience' | 'Reports' | 'Settings' | 'Profile';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activePage, setActivePage] = useState<Page>('Overview');
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Platform.Instagram);
    const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'bw');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const data = MOCK_DATA[selectedPlatform];

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    const renderPage = () => {
        switch (activePage) {
            case 'Overview':
                return <Overview allPlatformData={MOCK_DATA} onNavigate={setActivePage} theme={theme} setTheme={setTheme} />;
            case 'Analytics':
                return <Analytics platformData={data} selectedPlatform={selectedPlatform} onPlatformChange={setSelectedPlatform} />;
            case 'Content':
                 return <Content platformData={data} selectedPlatform={selectedPlatform} onPlatformChange={setSelectedPlatform} />;
            case 'Audience':
                 return <Audience platformData={data} selectedPlatform={selectedPlatform} onPlatformChange={setSelectedPlatform} />;
            case 'Settings':
                return <Settings theme={theme} setTheme={setTheme} />;
            case 'Profile':
                return <Profile />;
            default:
                return <Overview allPlatformData={MOCK_DATA} onNavigate={setActivePage} theme={theme} setTheme={setTheme} />;
        }
    };

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return (
        <div className="flex h-screen bg-background text-on-surface">
            <Sidebar onLogout={handleLogout} activePage={activePage} setActivePage={setActivePage} />
            <main className="flex-1 overflow-y-auto">
                {renderPage()}
            </main>
        </div>
    );
};

export default App;