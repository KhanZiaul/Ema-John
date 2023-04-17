import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    function createUser(email,password){
       return createUserWithEmailAndPassword(auth, email, password)
    }

    function signinUser(email,password){
       return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo={
        createUser,
        signinUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;