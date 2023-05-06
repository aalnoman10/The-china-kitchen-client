import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
import { DismissToast, LoadingToast } from '../Layout/Main';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)
    const [dataLoading, setDataLoading] = useState(true)


    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const loginWithPopup = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        setLoading(true)
        LoadingToast()
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            DismissToast()
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        createUser,
        loginWithEmailPassword,
        loginWithPopup,
        loginOut,
        loading,
        setLoading,
        dataLoading,
        setDataLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;