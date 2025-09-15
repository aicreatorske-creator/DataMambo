

import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { FirebaseUser } from '../types';

export function useAuth() {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // The onAuthStateChanged listener returns an unsubscribe function
        const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                // Map the received user object to our FirebaseUser type
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                    isGuest: firebaseUser.isGuest,
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return { user, loading };
}
