import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);



    const googleSignIn = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 

    const logOut =() =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            return unsubscribe();
        }
    },[])
    

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleSignIn,
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;