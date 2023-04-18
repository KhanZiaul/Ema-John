import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {loginUser} = useContext(AuthContext)
    if(loginUser){

        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateProvider;