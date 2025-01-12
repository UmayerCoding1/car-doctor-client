import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from './../../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    // create user
     const createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

    //  sign in user
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }



    //  observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => unSubscribe();
        },[])

    const authInfo  = {
        user,
        loading,
        createUser,
        signInUser,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;