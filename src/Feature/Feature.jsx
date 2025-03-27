import React from 'react';
import './styles.css'
const Feature = () => {
    return (

        <div className='w-4/5 mx-auto my-20'>
            <div>
                <h4 className='text-[#0095ff] text-xl tracking-widest font-semibold'>Features</h4>
                <h1 className=' font-bold leading-12 my-4'><span className='text-5xl'>One Platform for</span> <br /> <span className='text-5xl'>Teamwork <span id='learn' className='font-primary'>Learning </span>  & productivity </span></h1>
            </div>

            <div className='flex justify-center items-center gap-8 box-border my-10'>
                <div className='flex-1'>
                    <img src="https://staco-react.vercel.app/assets/features1-BBjT5u_I.svg" alt="" />
                    <div className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] rounded-b-2xl bg-white px-3'>
                        <h4 className='font-bold text-lg text-[#111111] mt-7 mb-4 ml-5'>Collaborative Study Tools</h4>
                        <p id='para' className='text-[#444444] text-base w-11/12 leading-7 font-semibold ml-5 pb-16 '>Collaborative Study Tools – Work together in real-time with shared notes, interactive whiteboards, and group discussions.</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src="https://staco-react.vercel.app/assets/features2-IGH6av1f.svg" alt="" />
                    <div className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] rounded-b-2xl bg-white px-3'>
                        <h4 className='font-bold text-lg text-[#111111] mt-7 mb-4 ml-5'>Smart Matching & Community</h4>
                        <p id='para' className='text-[#444444] text-base w-11/12 leading-7 font-semibold ml-5 pb-16 '>Effortlessly connect with like-minded learners, join study groups, and build a supportive community to enhance collaboration.</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src="	https://staco-react.vercel.app/assets/features3-CTfO9fm6.svg" alt="" />
                  <div className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] rounded-b-2xl bg-white px-3'>
                        <h4 className='font-bold text-lg text-[#111111] mt-7 mb-4 ml-5'>Security & Privacy</h4>
                        <p id='para' className='text-[#444444] text-base w-11/12 leading-7 font-semibold ml-5 pb-16 '>Ensure a safe learning environment with encrypted communication, secure access controls, and robust data protection measures.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Feature;