import React, { useContext } from 'react';

import App from '../App';
import Feature from '../Feature/Feature';
import Faqs from '../FAQS/Faqs';
import Community from '../Community/Community';
import BestService from '../BestService/BestService';
import { AuthContext } from '../Providers/AuthProvider';
import useAuth from '../Hooks/useAuth';

const Home = () => {
    // const { loading } = useContext(AuthContext)
    const { loading } = useAuth()

    // if (loading) {
    //     return <div className='h-screen mx-auto flex justify-center items-center'>
    //         <span className="loading loading-ring loading-xl "></span>
    //     </div>;
    // }
    return (
        <div >
            <App></App>
            <BestService></BestService>
            <Feature></Feature>
            <Faqs></Faqs>
            <Community></Community>
        </div>
    );
};

export default Home;