import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../assets/Facebook.png';
import instra from '../assets/Instagram.png';
import linkedin from '../assets/Linkedin.png';


const Footer = () => {
    return (
        <div className=' bg-[#1d1d1d] text-white py-5'>
            <div className='w-11/12 mx-auto flex justify-between items-center py-3'>
                <div className='text-sm font-semibold'>Copyright 2023 © PeerLearn | Powered by BoldEdge Designs</div>

                <div className='flex justify-between items-center px-1 mr-3'>

                    <Link to="https://www.facebook.com/tousif.nuhan.2024/">
                        <img className='h-8' src={fb} alt="" />
                    </Link>
                    <Link to="https://www.instagram.com/mubtasim_tousif/?hl=en" >
                        <img className='h-8 mx-3' src={instra} alt="" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/gazi-mubtasim-tousif-nuhan/">
                        <img className='h-8' src={linkedin} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;