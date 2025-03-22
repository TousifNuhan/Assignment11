import React from 'react';

const Community = () => {
    return (
        <div className='relative my-20'>
            {/* এতার সিযিং করা বাকি */}
            <div>
                <img className=' mx-auto rounded-full h-20 p-4 bg-white border border-[#00000026]' src="data:image/svg+xml,%3csvg%20width='41'%20height='40'%20viewBox='0%200%2041%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M14.0782%200C8.83815%200%204.57812%204.26003%204.57812%209.50006C4.57812%2014.6401%208.59815%2018.8001%2013.8382%2018.9801C13.9982%2018.9601%2014.1582%2018.9601%2014.2782%2018.9801C14.3182%2018.9801%2014.3382%2018.9801%2014.3782%2018.9801C14.3982%2018.9801%2014.3982%2018.9801%2014.4182%2018.9801C19.5382%2018.8001%2023.5582%2014.6401%2023.5782%209.50006C23.5782%204.26003%2019.3182%200%2014.0782%200Z'%20fill='%23111111'/%3e%3cpath%20d='M24.2401%2024.3C18.6601%2020.5799%209.56006%2020.5799%203.94002%2024.3C1.40001%2026%200%2028.3%200%2030.76C0%2033.22%201.40001%2035.5%203.92002%2037.18C6.72004%2039.0601%2010.4001%2040.0001%2014.0801%2040.0001C17.7601%2040.0001%2021.4401%2039.0601%2024.2401%2037.18C26.7602%2035.48%2028.1602%2033.2%2028.1602%2030.72C28.1402%2028.26%2026.7602%2025.98%2024.2401%2024.3Z'%20fill='%23111111'/%3e%3cpath%20opacity='0.4'%20d='M36.0569%2010.6802C36.3769%2014.5603%2033.6169%2017.9603%2029.7969%2018.4203C29.7769%2018.4203%2029.7769%2018.4203%2029.7569%2018.4203H29.6969C29.5769%2018.4203%2029.4569%2018.4203%2029.3569%2018.4603C27.4169%2018.5603%2025.6369%2017.9403%2024.2969%2016.8003C26.3569%2014.9603%2027.5369%2012.2002%2027.2969%209.20023C27.1569%207.58022%2026.5969%206.10021%2025.7569%204.8402C26.5169%204.4602%2027.3969%204.2202%2028.2969%204.1402C32.2169%203.8002%2035.7169%206.72021%2036.0569%2010.6802Z'%20fill='%23111111'/%3e%3cpath%20d='M40.0626%2029.18C39.9026%2031.1201%2038.6626%2032.8001%2036.5826%2033.9401C34.5826%2035.0401%2032.0625%2035.5601%2029.5625%2035.5001C31.0025%2034.2001%2031.8425%2032.5801%2032.0025%2030.8601C32.2025%2028.38%2031.0225%2026%2028.6625%2024.1C27.3225%2023.04%2025.7625%2022.2%2024.0625%2021.58C28.4825%2020.3%2034.0426%2021.16%2037.4626%2023.92C39.3026%2025.4%2040.2426%2027.26%2040.0626%2029.18Z'%20fill='%23111111'/%3e%3c/svg%3e" alt="" />
            </div>

            <div className=' flex w-full justify-between items-start'>
                <img src="https://staco-react.vercel.app/assets/left_obj-DcQTqJaX.png" alt="" />

                <img src="https://staco-react.vercel.app/assets/right_obj-CaxCqwq_.png" alt="" />
            </div>
            <div className='absolute top-1/4 text-center w-full'>
                <h1 className='text-5xl font-bold leading-16'>Join our 250+ Community <br />
                    Let’s started</h1>

                <form action="" className='flex justify-center items-center mt-16 max-w-[35%] mx-auto '>
                    <div className='w-full relative '>
                        <input className='shadow-[0_15px_20px_rgba(0,0,0,0.2)] outline-none rounded-4xl w-full pl-5 py-5 bg-white placeholder-black border placeholder:text-base placeholder:font-medium border-[#00000026]' type="email" name='email' placeholder='Email Address' />
                        <button className='bg-[#0555ff] right-2 top-1/2 -translate-y-1/2 absolute text-center h-12 rounded-4xl px-12 cursor-pointer text-white font-semibold text-sm'>Submit</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Community;