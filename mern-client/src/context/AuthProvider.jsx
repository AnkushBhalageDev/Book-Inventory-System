import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(); // Export the context
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const loginWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setLoading(false);
            setUser(currentUser)
        });
        return()=>{unsubscribe()} 
    },[])
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Handle successful sign-up
                const user = userCredential.user;
                setLoading(false);
                return user;
            })
            .catch((error) => {
                // Handle error
                setLoading(false);
                console.error('Sign-up error:', error.message);
                throw error; // Rethrow or handle as needed
            });
    };
    
const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   
}
const logOut=()=>{
    return signOut(auth)
}
    const authInfo = {
        createUser,
        user,
        loading,
        loginWithGoogle,
        login,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}> {/* Corrected typo from 'vaue' to 'value' */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
