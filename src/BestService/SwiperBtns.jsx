import React from 'react';
import { useSwiper } from 'swiper/react';
import { GrFormNext, GrFormPrevious, GrNext } from "react-icons/gr";

const SwiperBtns = () => {
    const swiper = useSwiper();
    return (
        <div className='mt-5'>
            <button className='border-2 mr-1 border-gray-400 rounded-full md:p-3 lg:p-4 hover:border-[#5ecc62] cursor-pointer' onClick={() => swiper.slidePrev()}>
                <GrFormPrevious className='text-white bg-gray-400 rounded-full h-5 w-5'/>
            </button>
            <button className='border-2 border-gray-400 rounded-full md:p-3 lg:p-4 hover:border-[#5ecc62] cursor-pointer' onClick={() => swiper.slideNext()}>
                <GrFormNext className='text-white bg-gray-400 rounded-full h-5 w-5'/>
              
            </button>
        </div>
    );
};

export default SwiperBtns;