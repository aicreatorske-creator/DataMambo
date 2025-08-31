import React from 'react';
import Header from '../components/Header';
import { Theme } from '../types';

interface SettingsProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const Settings: React.FC<SettingsProps> = ({ theme, setTheme }) => {
    const themeOptions: { name: Theme, label: string }[] = [
        { name: 'light', label: 'Light' },
        { name: 'dark', label: 'Dark' },
        { name: 'bw', label: 'B & W' }
    ];

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
                            <p className="text-sm text-on-surface-secondary">Select your preferred interface style.</p>
                        </div>
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