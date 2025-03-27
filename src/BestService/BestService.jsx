import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import SwiperBtns from './SwiperBtns';

const BestService = () => {

    return (
        <div className='flex items-start w-4/5 mx-auto mb-10 mt-20'>
            <div className='w-1/3 mr-8 '>
                <h4 className='text-[#5ecc62] text-xl tracking-widest font-semibold'>BEST SERVICES</h4>
                <h1 className='text-5xl font-bold leading-16 my-3'>We <br /> Provide</h1>
                <p className='text-[#444444] font-semibold leading-7 text-base w-full'>Our platform offers a seamless and interactive online group study experience with real-time collaboration, assignment management, and AI-powered study assistance. </p>
            </div>

            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Navigation,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-white min-h-80 shadow-[0_15px_20px_rgba(0,0,0,0.2)]'>
                            <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1690383923011-c63f619f6a5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fFJlYWwlMjBUaW1lJTIwQ29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className='text-start w-11/12 mx-auto '>
                                <h4 className='text-base font-bold text-[#111111] mt-4 mb-2'>Real-Time Collaboration</h4>
                                <p className='text-sm font-semibold text-[#444444]'>Study together with peers through live video, chat, and shared whiteboards.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white min-h-80 shadow-[0_15px_20px_rgba(0,0,0,0.2)]'>
                            <img className='rounded-t-xl' src="https://plus.unsplash.com/premium_photo-1726079247228-993af4c05db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
                            <div className='text-start w-11/12 mx-auto '>
                                <h4 className='text-base font-bold text-[#111111] mt-4 mb-2'>AI-Powered Study Assistance</h4>
                                <p className='text-sm font-semibold text-[#444444]'>Get instant answers, explanations, and study suggestions.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white min-h-80 shadow-[0_15px_20px_rgba(0,0,0,0.2)]'>
                            <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1731963094554-c5c981ccdefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxBc3NpZ25tZW50JTIwJTI2JTIwTm90ZXMlMjBTaGFyaW5nfGVufDB8fDB8fHww" alt="" />
                            <div className='text-start w-11/12 mx-auto '>
                                <h4 className='text-base font-bold text-[#111111] mt-4 mb-2'>Assignment & Notes Sharing</h4>
                                <p className='text-sm font-semibold text-[#444444]'>Easily upload, organize, and review study materials.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white min-h-80 shadow-[0_15px_20px_rgba(0,0,0,0.2)]'>
                            <img className='rounded-t-xl' src="https://images.unsplash.com/photo-1586863065451-6a82fa7e81b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGFzayUyMCUyNiUyMERlYWRsaW5lJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className='text-start w-11/12 mx-auto '>
                                <h4 className='text-base font-bold text-[#111111] mt-4 mb-2'>Task & Deadline Management</h4>
                                <p className='text-sm font-semibold text-[#444444]'>Stay on track with shared to-do lists and reminders.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperBtns></SwiperBtns>

                </Swiper>
            </>

        </div>
    );
};

export default BestService;