import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Settings: React.FC = () => {
    // Initialize state based on the presence of 'dark' class on <html>
    const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

    // Effect to toggle the class on the html element when state changes
    useEffect(() => {
        const htmlElement = document.documentElement;
        if (isDarkMode) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="p-6">
            <Header title="Settings" description="Manage your account and preferences." showPlatformSelector={false} />

            <div className="mt-6 max-w-4xl mx-auto space-y-8">
                {/* Profile Section */}
                <div className="bg-surface p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-on-surface mb-6">Profile</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-on-surface-secondary mb-1">Name</label>
                            <input type="text" name="name" id="name" defaultValue="Jane Doe" className="w-full bg-background border border-gray-600 rounded-lg p-3 text-on-surface focus:ring-primary focus:border-primary" disabled />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-on-surface-secondary mb-1">Role</label>
                            <input type="text" name="role" id="role" defaultValue="Agency Owner" className="w-full bg-background border border-gray-600 rounded-lg p-3 text-on-surface focus:ring-primary focus:border-primary" disabled />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-on-surface-secondary mb-1">Email</label>
                            <input type="email" name="email" id="email" defaultValue="jane.doe@datamambo.com" className="w-full bg-background border border-gray-600 rounded-lg p-3 text-on-surface focus:ring-primary focus:border-primary" disabled />
                        </div>
                    </div>
                </div>

                {/* Theme Section */}
                <div className="bg-surface p-8 rounded-xl shadow-lg">
                     <h3 className="text-xl font-bold text-on-surface mb-6">Appearance</h3>
                     <div className="flex items-center justify-between">
                        <div className="text-on-surface">
                            <p className="font-medium">Interface Theme</p>
                            <p className="text-sm text-on-surface-secondary">Select your preferred light or dark mode.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className={`text-sm font-medium ${!isDarkMode ? 'text-primary' : 'text-on-surface-secondary'}`}>Light</span>
                            <button 
                                onClick={toggleTheme} 
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary ${isDarkMode ? 'bg-primary' : 'bg-gray-600'}`}
                                aria-pressed={isDarkMode}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                            <span className={`text-sm font-medium ${isDarkMode ? 'text-primary' : 'text-on-surface-secondary'}`}>Dark</span>
                        </div>
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="bg-surface p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-on-surface mb-6">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="weekly-reports" className="font-medium text-on-surface cursor-pointer">Weekly Reports</label>
                            <input id="weekly-reports" type="checkbox" className="h-5 w-5 rounded text-primary bg-background border-gray-500 focus:ring-primary cursor-pointer" defaultChecked />
                        </div>
                         <hr className="border-gray-700"/>
                        <div className="flex items-center justify-between">
                            <label htmlFor="performance-alerts" className="font-medium text-on-surface cursor-pointer">Performance Alerts</label>
                            <input id="performance-alerts" type="checkbox" className="h-5 w-5 rounded text-primary bg-background border-gray-500 focus:ring-primary cursor-pointer" defaultChecked />
                        </div>
                         <hr className="border-gray-700"/>
                         <div className="flex items-center justify-between">
                            <label htmlFor="new-features" className="font-medium text-on-surface cursor-pointer">New Feature Announcements</label>
                            <input id="new-features" type="checkbox" className="h-5 w-5 rounded text-primary bg-background border-gray-500 focus:ring-primary cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;