import React from 'react';
import './styles.css'
const Feature = () => {
    return (

        <div className='w-4/5 mx-auto lg:mt-10 md:mt-20 lg:mb-20 '>
            <div>
                <h4 className='text-[#0095ff] md:text-lg lg:text-xl tracking-widest font-semibold'>Features</h4>
                <h1 className='text-base-content font-bold md:leading-10 lg:leading-12 my-4'><span className='md:text-4xl lg:text-5xl'>One Platform for</span> <br /> <span className='md:text-4xl lg:text-5xl'>Teamwork <span id='learn' className='font-primary'>Learning </span>  & productivity </span></h1>
            </div>

            <div className='flex justify-center items-center md:gap-5 lg:gap-8 box-border md:mt-8 md:mb-6 lg:mb-0 lg:my-10'>
                <div className='flex-1  lg:h-auto md:h-96'>
                    <img src="https://staco-react.vercel.app/assets/features1-BBjT5u_I.svg" alt="" />
                    <div className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] rounded-b-2xl bg-white px-3 lg:h-auto md:h-60'>
                        <h4 className='font-bold md:text-base lg:text-lg text-[#111111] md:pt-4 lg:pt-7 md:mb-2 lg:mb-4 md:ml-1 lg:ml-5'>Collaborative Study Tools</h4>
                        <p id='para' className='text-[#444444] md:text-sm lg:text-base w-11/12 lg:leading-7 md:leading-5 font-semibold md:ml-1 lg:ml-5 md:pb-8 lg:pb-16 '>Collaborative Study Tools – Work together in real-time with shared notes, interactive whiteboards, and group discussions.</p>
                    </div>
                </div>
                <div className='flex-1 lg:h-auto md:h-96'>
                    <img src="https://staco-react.vercel.app/assets/features2-IGH6av1f.svg" alt="" />
                    <div className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] rounded-b-2xl bg-white px-3 lg:h-auto md:h-60'>
                        <h4 className='font-bold md:text-base lg:text-lg text-[#111111] md:pt-4 lg:pt-7 md:mb-2 lg:mb-4 md:ml-1 lg:ml-5'>Smart Matching & Community</h4>
                        <p id='para' className='text-[#444444] md:text-sm lg:text-base w-11/12 lg:leading-7 md:leading-5 font-semibold md:ml-1 lg:ml-5 md:pb-8 lg:pb-16 '>Effortlessly connect with like-minded learners, join study groups, and build a supportive community to enhance collaboration.</p>
                    </div>
                </div>
                <div className='flex-1 lg:h-auto md:h-96'>
                    <img  src="	https://staco-react.vercel.app/assets/features3-CTfO9fm6.svg" alt="" />
                    <div className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] rounded-b-2xl bg-white px-3 lg:h-auto md:h-60'>
                        <h4 className='font-bold md:text-base lg:text-lg text-[#111111] md:pt-4 lg:pt-7 md:mb-2 lg:mb-4 md:ml-1 lg:ml-5'>Security & Privacy</h4>
                        <p id='para' className='text-[#444444] md:text-sm lg:text-base w-11/12 lg:leading-7 md:leading-5 font-semibold md:ml-1 lg:ml-5 md:pb-8 lg:pb-16 '>Ensure a safe learning environment with encrypted communication, secure access controls, and robust data protection measures.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Feature;