import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowRoundUp } from "react-icons/io";
import { AuthContext } from '../Providers/AuthProvider';

const Root = () => {

    // const { loading,setLoading } = useContext(AuthContext)

    // if (loading) {
    //     return <div className='h-screen mx-auto flex justify-center items-center'>
    //         <span className="loading loading-ring loading-xl "></span>
    //     </div>;
    // }

    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / docHeight) * 100;

            setScrollProgress(progress);
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

            {isScrolled && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-4 flex items-center justify-center z-50 cursor-pointer"
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                    }}
                >

                    <svg width="50" height="50" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#64646466"
                            strokeWidth="5"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#0095ffcc"
                            strokeWidth="5"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (scrollProgress / 100) * 283}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                        />
                    </svg>

                    {/* Arrow Icon */}
                    <div className="absolute text-[#0095ffcc]">
                        <IoIosArrowRoundUp size={24} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Root;
