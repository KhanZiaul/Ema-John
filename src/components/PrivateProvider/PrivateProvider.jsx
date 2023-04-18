import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {loginUser , progress} = useContext(AuthContext)

    if(progress){

        return <progress className="progress w-56"></progress> ;
    }

    if(loginUser){

        return children ;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateProvider;