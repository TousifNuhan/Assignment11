import React from 'react';

import App from '../App';
import Feature from '../Feature/Feature';
import Faqs from '../FAQS/Faqs';
import Community from '../Community/Community';
import BestService from '../BestService/BestService';

const Home = () => {
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