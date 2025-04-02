import React, { useContext } from 'react';

import App from '../App';
import Feature from '../Feature/Feature';
import Faqs from '../FAQS/Faqs';
import Community from '../Community/Community';
import BestService from '../BestService/BestService';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const {loading}=useContext(AuthContext)
    
        // if (loading) {
        //     return <span className="loading loading-spinner loading-xl"></span>
        //   }
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