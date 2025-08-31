import React from 'react';
import Header from '../components/Header';
import { USER_PROFILE } from '../constants';

const Profile: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <Header title="My Profile" description="View and manage your personal information and activity." showPlatformSelector={false} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Left column: Profile Card */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-surface p-8 rounded-xl shadow-lg text-center">
                        <div className="w-32 h-32 rounded-full bg-secondary mx-auto flex items-center justify-center text-on-surface mb-4 ring-4 ring-surface ring-offset-4 ring-offset-background">
                            <UserCircleIcon className="w-24 h-24" />
                        </div>
                        <h2 className="text-2xl font-bold text-on-surface">{USER_PROFILE.name}</h2>
                        <p className="text-on-surface-secondary">{USER_PROFILE.role}</p>
                        <p className="text-sm text-on-surface-secondary mt-2">{USER_PROFILE.email}</p>
                        <button className="mt-6 w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
                            Edit Profile
                        </button>
                    </div>

                     <div className="bg-surface p-8 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-on-surface mb-6">Account Security</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="current-password" className="block text-sm font-medium text-on-surface-secondary mb-1">Current Password</label>
                                <input type="password" name="current-password" id="current-password" defaultValue="••••••••" className="w-full bg-background border border-gray-600 rounded-lg p-3 text-on-surface focus:ring-primary focus:border-primary" />
                            </div>
                            <button className="w-full border border-primary text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right column: Activity Log */}
                <div className="lg:col-span-2 bg-surface p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-on-surface mb-6">Recent Activity</h3>
                    <div className="flow-root">
                        <ul role="list" className="-mb-8">
                            {USER_PROFILE.recentActivity.map((activity, activityIdx) => (
                                <li key={activity.id}>
                                    <div className="relative pb-8">
                                        {activityIdx !== USER_PROFILE.recentActivity.length - 1 ? (
                                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-600" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span className="h-8 w-8 rounded-full bg-background flex items-center justify-center ring-8 ring-surface">
                                                    <LoginIcon className="h-5 w-5 text-on-surface-secondary" />
                                                </span>
                                            </div>
                                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                <div>
                                                    <p className="text-sm text-on-surface">{activity.action}</p>
                                                    <p className="text-sm text-on-surface-secondary">IP: {activity.ipAddress}</p>
                                                </div>
                                                <div className="text-right text-sm whitespace-nowrap text-on-surface-secondary">
                                                    <time dateTime={activity.timestamp}>{new Date(activity.timestamp).toLocaleString()}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Icons needed for this page
const UserCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const LoginIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);


export default Profile;
