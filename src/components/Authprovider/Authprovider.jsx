import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {

    const [loginUser, setLoginUser] = useState('');

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signinUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        loginUser,
        createUser,
        signinUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoginUser(user)
        });
        return ()=>{
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;