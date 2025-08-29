
import React from 'react';
import { Page } from '../App';

const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_47_103)"/>
        <path d="M9 22V10L16 16L23 10V22L16 16L9 22Z" fill="white"/>
        <defs>
            <linearGradient id="paint0_linear_47_103" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
        </defs>
    </svg>
);

const NavLink: React.FC<{ icon: JSX.Element; label: string; active?: boolean; onClick: () => void; }> = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`flex w-full items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${active ? 'bg-primary text-white' : 'hover:bg-surface text-on-surface-secondary hover:text-on-surface'}`}>
        {icon}
        <span className="font-medium">{label}</span>
    </button>
);

interface SidebarProps {
    onLogout: () => void;
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout, activePage, setActivePage }) => {
    const navItems = [
        { icon: <HomeIcon />, label: 'Overview', page: 'Overview' as Page },
        { icon: <ChartBarIcon />, label: 'Analytics', page: 'Analytics' as Page },
        { icon: <DocumentTextIcon />, label: 'Content', page: 'Content' as Page },
        { icon: <UsersIcon />, label: 'Audience', page: 'Audience' as Page },
        { icon: <CogIcon />, label: 'Settings', page: 'Settings' as Page },
    ];

    return (
        <aside className="w-64 bg-surface flex-shrink-0 p-6 flex-col hidden md:flex">
            <div className="flex items-center space-x-3 mb-10">
                <LogoIcon />
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
                 <div className="flex items-center space-x-3 border-t border-gray-700 pt-6">
                    <img src="https://picsum.photos/seed/user/40/40" alt="User Avatar" className="w-10 h-10 rounded-full"/>
                    <div>
                        <p className="font-semibold text-on-surface">Jane Doe</p>
                        <p className="text-sm text-on-surface-secondary">Agency Owner</p>
                    </div>
                 </div>
                 <button 
                    onClick={onLogout} 
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
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;

export default Sidebar;
