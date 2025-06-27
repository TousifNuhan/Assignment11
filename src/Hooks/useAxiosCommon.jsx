import axios from 'axios';
import React from 'react';

const axiosCommon= axios.create({
    baseURL:'https://assignment11-server-cyan.vercel.app'
})

const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;