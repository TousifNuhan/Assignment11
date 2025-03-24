import React from 'react';
import { useSwiper } from 'swiper/react';
import { GrFormNext, GrFormPrevious, GrNext } from "react-icons/gr";

const SwiperBtns = () => {
    const swiper = useSwiper();
    return (
        <div className='mt-5'>
            <button className='border-2 mr-1 border-[#0000001a] rounded-full p-5 hover:border-[#5ecc62]' onClick={() => swiper.slidePrev()}>
                <GrFormPrevious className='text-white bg-gray-400 rounded-full h-5 w-5'/>
            </button>
            <button className='border-2 border-[#0000001a] rounded-full p-5 hover:border-[#5ecc62]' onClick={() => swiper.slideNext()}>
                <GrFormNext className='text-white bg-gray-400 rounded-full h-5 w-5'/>
              
            </button>
        </div>
    );
};

export default SwiperBtns;