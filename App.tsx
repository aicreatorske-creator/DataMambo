
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import { Platform, Theme } from './types';
import { MOCK_DATA, USER_PROFILE } from './constants';

import Overview from './pages/Overview';
import Analytics from './pages/Analytics';
import Content from './pages/Content';
import Audience from './pages/Audience';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { useAuth } from './hooks/useAuth';
import { LogoIcon } from './components/PlatformIcons';

export type Page = 'Overview' | 'Analytics' | 'Content' | 'Audience' | 'Reports' | 'Settings' | 'Profile';

const App: React.FC = () => {
    const { user, loading } = useAuth();
    const [activePage, setActivePage] = useState<Page>('Overview');
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Platform.Instagram);
    const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'bw');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const data = MOCK_DATA[selectedPlatform];

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
            case 'Reports':
                return <Reports />;
            case 'Settings':
                return <Settings theme={theme} setTheme={setTheme} />;
            case 'Profile':
                return <Profile user={user} />;
            default:
                return <Overview allPlatformData={MOCK_DATA} onNavigate={setActivePage} theme={theme} setTheme={setTheme} />;
        }
    };
    
    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-background">
                <div className="flex flex-col items-center space-y-4">
                    <LogoIcon className="w-16 h-16 text-primary animate-pulse" />
                    <p className="text-on-surface-secondary">Authenticating...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <LoginPage />;
    }

    return (
        <div className="flex h-screen bg-background text-on-surface">
            <Sidebar activePage={activePage} setActivePage={setActivePage} user={user} />
            <main className="flex-1 overflow-y-auto">
                {renderPage()}
            </main>
        </div>
    );
};

export default App;
