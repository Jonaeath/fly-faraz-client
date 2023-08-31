import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';

export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setloading] = useState(null);

    const createUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setloading(false)
        })

        return ()=>{
            return unsubscribe();
        }
    },[])
    

    const authInfo = {
        user,
        loading,
        createUser,
        login
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;