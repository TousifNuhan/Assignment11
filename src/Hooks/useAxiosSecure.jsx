import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { userSignOut } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            console.log(res)
            return res
        }, err => {
            console.log('inter', err)
            if (err.response.status === 401 || err.response.status === 403) {
                userSignOut()
                    .then(result => {
                        console.log(result.user)
                        navigate('/login')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
            return Promise.reject(err)   // This is still an error — continue handling it like any other catch() block. 
                    //   catch(err => { 
                    //   This gets called if interceptor returns Promise.reject(err)
                    //       console.error("Error caught here:", err) 
                    //   })
        })
    }, [])

    return axiosSecure
};

export default useAxiosSecure;