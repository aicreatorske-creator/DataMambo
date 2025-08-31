

import React from 'react';
import { LogoIcon } from './PlatformIcons';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd have validation and an API call here.
        // For this demo, we'll just log in.
        onLogin();
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md p-8 space-y-8 bg-surface rounded-2xl shadow-lg">
                <div className="flex flex-col items-center">
                    <LogoIcon className="w-16 h-16 text-primary"/>
                    <h1 className="mt-4 text-4xl font-bold text-on-surface">DataMambo</h1>
                    <p className="mt-2 text-on-surface-secondary">Sign in to your analytics dashboard</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required 
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-background placeholder-gray-500 text-on-surface rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password"className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required 
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-background placeholder-gray-500 text-on-surface rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" 
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="flex-shrink mx-4 text-on-surface-secondary">Or</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>
                <div>
                    <button onClick={onLogin}
                        className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-on-surface bg-surface hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
                        Continue as Guest
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;