// A placeholder for the Firebase SDK. In a real app, you'd import this from 'firebase/app' and 'firebase/auth'.
// For this environment, we'll mock the necessary parts.

interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    isGuest?: boolean;
    updateProfile(profile: { displayName: string }): Promise<void>;
}

interface UserCredential {
    user: User | null;
}

// Mock implementation of Firebase Auth
class MockAuth {
    // FIX: Made `currentUser` public to mimic Firebase SDK behavior and allow access from components.
    currentUser: User | null = null;
    private onAuthStateChangedCallback: ((user: User | null) => void) | null = null;

    constructor() {
        // Try to load user from localStorage to persist session
        const storedUser = localStorage.getItem('firebase_user');
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser);
        }
    }

    createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!email || !password) {
                    return reject(new Error("Email and password are required."));
                }
                const newUser: User = {
                    uid: `mock_uid_${Date.now()}`,
                    email,
                    displayName: '',
                    isGuest: false,
                    updateProfile: (profile) => this.updateProfile(profile),
                };
                this.currentUser = newUser;
                this.persistUser(newUser);
                this.triggerAuthStateChanged(newUser);
                resolve({ user: newUser });
            }, 500);
        });
    }

    signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'test@example.com' && password === 'password') {
                    const existingUser: User = {
                        uid: 'mock_uid_12345',
                        email,
                        displayName: 'Test User',
                        isGuest: false,
                         updateProfile: (profile) => this.updateProfile(profile),
                    };
                    this.currentUser = existingUser;
                    this.persistUser(existingUser);
                    this.triggerAuthStateChanged(existingUser);
                    resolve({ user: existingUser });
                } else {
                     // Simulate a more generic user for other logins
                    const genericUser: User = {
                        uid: `mock_uid_${Date.now()}`,
                        email,
                        displayName: email.split('@')[0],
                        isGuest: false,
                        updateProfile: (profile) => this.updateProfile(profile),
                    };
                    this.currentUser = genericUser;
                    this.persistUser(genericUser);
                    this.triggerAuthStateChanged(genericUser);
                    resolve({ user: genericUser });
                }
            }, 500);
        });
    }

    signInAsGuest(): Promise<UserCredential> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const guestUser: User = {
                    uid: 'guest_uid_123',
                    email: 'guest@datamambo.com',
                    displayName: 'Guest User',
                    isGuest: true,
                    updateProfile: (profile) => this.updateProfile(profile),
                };
                this.currentUser = guestUser;
                this.persistUser(guestUser);
                this.triggerAuthStateChanged(guestUser);
                resolve({ user: guestUser });
            }, 200);
        });
    }

    signOut(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.currentUser = null;
                localStorage.removeItem('firebase_user');
                this.triggerAuthStateChanged(null);
                resolve();
            }, 200);
        });
    }
    
    updateProfile(profile: { displayName: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.currentUser) {
                if (this.currentUser.isGuest) {
                    return reject(new Error("Guest users cannot update their profile."));
                }
                this.currentUser = { ...this.currentUser, ...profile };
                this.persistUser(this.currentUser);
                this.triggerAuthStateChanged(this.currentUser);
                resolve();
            } else {
                reject(new Error("No user is signed in."));
            }
        });
    }

    onAuthStateChanged(callback: (user: User | null) => void): () => void {
        this.onAuthStateChangedCallback = callback;
        // Immediately invoke with current user state
        setTimeout(() => this.triggerAuthStateChanged(this.currentUser), 0);
        
        // Return an unsubscribe function
        return () => {
            this.onAuthStateChangedCallback = null;
        };
    }
    
    private triggerAuthStateChanged(user: User | null) {
        if (this.onAuthStateChangedCallback) {
            this.onAuthStateChangedCallback(user);
        }
    }

    private persistUser(user: User) {
        localStorage.setItem('firebase_user', JSON.stringify(user));
    }
}


export const auth = new MockAuth();