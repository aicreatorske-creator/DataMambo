

import React, { useState } from 'react';
import { LogoIcon } from './PlatformIcons';
import { auth } from '../services/firebase';

type AuthMode = 'signin' | 'signup';

const LoginPage: React.FC = () => {
    const [mode, setMode] = useState<AuthMode>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleAuthAction = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            if (mode === 'signup') {
                if (password.length < 6) {
                    throw new Error("Password must be at least 6 characters long.");
                }
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                await userCredential.user?.updateProfile({ displayName });
            } else {
                await auth.signInWithEmailAndPassword(email, password);
            }
        } catch (err: any) {
            setError(err.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const handleGuestLogin = async () => {
        setError(null);
        setLoading(true);
        try {
            await auth.signInAsGuest();
        } catch (err: any) {
            setError(err.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
        <button
            onClick={onClick}
            className={`w-1/2 py-3 text-sm font-bold transition-colors duration-200 ${
                active ? 'border-b-2 border-primary text-on-surface' : 'text-on-surface-secondary hover:text-on-surface'
            }`}
        >
            {children}
        </button>
    );

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md p-8 space-y-4 bg-surface rounded-2xl shadow-lg">
                <div className="flex flex-col items-center">
                    <LogoIcon className="w-16 h-16 text-primary"/>
                    <h1 className="mt-4 text-4xl font-bold text-on-surface">DataMambo</h1>
                    <p className="mt-2 text-on-surface-secondary">Your Social Media Analytics Hub</p>
                </div>

                <div className="flex border-b border-gray-700">
                    <TabButton active={mode === 'signin'} onClick={() => setMode('signin')}>Sign In</TabButton>
                    <TabButton active={mode === 'signup'} onClick={() => setMode('signup')}>Sign Up</TabButton>
                </div>

                <form className="space-y-4" onSubmit={handleAuthAction}>
                    {mode === 'signup' && (
                         <div>
                            <label htmlFor="display-name" className="sr-only">Display Name</label>
                            <input
                                id="display-name"
                                name="displayName"
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-background placeholder-gray-500 text-on-surface rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Display Name"
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-background placeholder-gray-500 text-on-surface rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-background placeholder-gray-500 text-on-surface rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>

                    {error && <p className="text-sm text-danger text-center">{error}</p>}

                    <div>
                        <button type="submit" disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                            {loading ? 'Processing...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
                        </button>
                    </div>
                </form>

                <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-surface text-on-surface-secondary">Or</span>
                    </div>
                </div>

                <div>
                    <button 
                        onClick={handleGuestLogin}
                        disabled={loading}
                        className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-on-surface hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors disabled:bg-gray-700 disabled:cursor-not-allowed"
                    >
                        Continue as Guest
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;