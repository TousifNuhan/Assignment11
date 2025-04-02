import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location=useLocation()
    console.log(location)

    if(user){
        return children;
    }

    if(loading){
            return <div className='h-screen mx-auto flex justify-center items-center'>
            <span className="loading loading-ring loading-xl "></span>
        </div>;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;