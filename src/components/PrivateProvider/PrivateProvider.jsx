import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {loginUser , progress} = useContext(AuthContext)

    const location = useLocation()
    
    if(progress){

        return <progress className="progress w-56"></progress> ;
    }

    if(loginUser){

        return children ;
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateProvider;