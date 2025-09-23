import React from 'react';
import { Page } from '../App';
import { LogoIcon } from './PlatformIcons';
import { FirebaseUser } from '../types';
import { auth } from '../services/firebase';

// FIX: Replace JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const NavLink: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick: () => void; }> = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`flex w-full items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${active ? 'bg-primary text-white' : 'hover:bg-surface text-on-surface-secondary hover:text-on-surface'}`}>
        {icon}
        <span className="font-medium">{label}</span>
    </button>
);

interface SidebarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
    user: FirebaseUser | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, user }) => {
    const navItems = [
        { icon: <HomeIcon />, label: 'Overview', page: 'Overview' as Page },
        { icon: <ChartBarIcon />, label: 'Analytics', page: 'Analytics' as Page },
        { icon: <DocumentTextIcon />, label: 'Content', page: 'Content' as Page },
        { icon: <UsersIcon />, label: 'Audience', page: 'Audience' as Page },
        { icon: <DocumentDownloadIcon />, label: 'Reports', page: 'Reports' as Page },
        { icon: <CogIcon />, label: 'Settings', page: 'Settings' as Page },
    ];
    
    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <aside className="w-64 bg-surface flex-shrink-0 p-6 flex-col hidden md:flex">
            <div className="flex items-center space-x-3 mb-10">
                <LogoIcon className="w-8 h-8 text-primary"/>
                <span className="text-2xl font-bold text-on-surface">DataMambo</span>
            </div>
            <nav className="flex-1 space-y-2">
                {navItems.map(item => (
                    <NavLink 
                        key={item.label} 
                        {...item}
                        active={activePage === item.page}
                        onClick={() => setActivePage(item.page)}
                    />
                ))}
            </nav>
            <div className="mt-auto">
                 <button 
                    onClick={() => setActivePage('Profile')}
                    className={`w-full text-left p-2 rounded-lg transition-colors duration-200 border-t border-gray-700 mt-4 pt-6 ${activePage === 'Profile' ? 'bg-primary/10' : 'hover:bg-primary/10'}`}
                    aria-label="View Profile"
                 >
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-surface">
                            <UserCircleIcon className="w-7 h-7" />
                        </div>
                        <div>
                            <p className="font-semibold text-on-surface">{user?.displayName || 'Guest User'}</p>
                            <p className="text-sm text-on-surface-secondary">{user?.email || 'No email'}</p>
                        </div>
                    </div>
                 </button>
                 <button 
                    onClick={handleLogout} 
                    className="w-full flex items-center space-x-3 px-4 py-3 mt-4 rounded-lg transition-colors duration-200 hover:bg-danger/20 text-danger"
                 >
                    <LogoutIcon />
                    <span className="font-medium">Logout</span>
                 </button>
            </div>
        </aside>
    );
};


// SVG Icons
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const ChartBarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const DocumentTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 1.803" /></svg>;
const DocumentDownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;
const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export default Sidebar;