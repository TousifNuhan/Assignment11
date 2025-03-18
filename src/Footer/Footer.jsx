import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../assets/Facebook.png';
import fb2 from '../assets/fb2.svg';
import instra from '../assets/Instagram.png';
import linkedin from '../assets/Linkedin.png';
import { FaFacebook, FaFacebookF, } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className=' bg-[#1d1d1d] text-white py-5'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className='text-base font-semibold'>Copyright 2023 © PeerLearn | Powered by BoldEdge Designs</div>
                {/* <div>
                    <Link to="/"><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-lg border-none`}>Home</a></Link>
                    <Link to="/"><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-lg border-none`}>Home</a></Link>
                    <Link to="/"><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-lg border-none`}>Home</a></Link>
                    <Link to="/"><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-lg border-none`}>Home</a></Link>

                </div> */}
                {/* 
                <div className='flex  items-center'>
                    <Link to="https://www.facebook.com/tousif.nuhan.2024/"><img className='w-10 mr-2' src={fb} alt="" /></Link>
                    <Link to="https://www.instagram.com/mubtasim_tousif/?hl=en" ><img className='w-10 mr-2' src={instra} alt="" /></Link>
                    <Link to=""><img className='w-10' src={linkedin} alt="" /></Link>
                   
                </div> */}

                <div className='flex justify-between items-center px-1'>
                    <Link to="https://www.facebook.com/tousif.nuhan.2024/">
                        {/* <FaFacebook className='text-7xl border-2 border-red-600 p-1 bg-black text-blue-500' /> */}

                        {/* <FontAwesomeIcon icon={faFacebook} className="bg-[#1d1d1d] h-10 text-blue-500 text-3xl" /> */}


                        <img className='h-8' src={fb} alt="" />
                    </Link>
                    <Link to="https://www.instagram.com/mubtasim_tousif/?hl=en" >
                        <img className='h-8 mx-2' src={instra} alt="" />
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