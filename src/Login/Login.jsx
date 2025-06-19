import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import axios from 'axios';
import useAuth from '../Hooks/useAuth';


const Login = () => {

    // const { loading, setLoading } =useContext(AuthContext)
    const { loading, setLoading } = useAuth()
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()


    const { signInWithEmailAndPASS, googleLogin, githubLogin } = useContext(AuthContext)

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                toast.success("Login successful!")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                toast.error("Login attempt failed")

            })
    }
    // console.log(theme)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success("Login successful!")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {

                console.error(error)
                toast.error("Login attempt failed")
            })
    }

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInWithEmailAndPASS(email, password)
            .then(result => {
                console.log(result.user)

                toast.success("Login successful!")
                form.reset()
                // const user = { email }
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     //{withCredentials: true } browser a cookie ta ke set krbe 
                //     .then(res => {
                //         console.log(res.data)
                //         if (res.data.success) {
                //             navigate(location?.state ? location.state : '/')
                //         }
                //     })
            })
            .catch(error => {
                // console.error(error)
                toast.error("Login attempt failed")

            })
    }

    return (
        <div className='bg-black'>
            <div className=' w-11/12 mx-auto flex justify-center items-center min-h-screen pt-28 pb-14'>
                <div className='flex-1 '>
                    <img className='rounded-3xl' src="https://images.unsplash.com/photo-1608600712992-03e5325d94c8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='flex-1  '>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl font-bold '>Join & Learn Together <br /> on PeerLearn!</h1>
                        <p className='text-lg w-11/12 font-light mt-2 mb-7'>Access the ultimate online group study platform designed <br /> to help you collaborate.</p>
                    </div>
                    <div className='w-4/5 mx-auto'>
                        <form onSubmit={handleLogin} className='text-center'>
                            <label className="block">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5' type="email" name='email' placeholder='E-mail Address' required />
                            </label>
                            <label className="mt-3 block relative w-4/5 mx-auto">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5 '
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    placeholder='Password'
                                    required />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <PiEyeLight className='h-5 w-5 absolute top-2.5 right-5 text-white' /> :
                                            <PiEyeSlash className='h-5 w-5 absolute top-2.5 right-5 text-white' />
                                    }
                                </span>
                            </label>


                            <div className='w-4/5 mx-auto my-3'>
                                <button type='submit' className='bg-white text-black rounded-md w-1/2  py-2 border border-white ml-1 font-semibold cursor-pointer'>Login</button>
                                <Link to="/register"><button className='hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md py-2 ml-2 border w-2/5 border-white font-semibold cursor-pointer'>Create Account</button></Link>
                            </div>

                            <div>
                                <h4 className='text-white text-center text-sm font-medium mt-5 mb-5'>Or login with</h4>
                            </div>
                        </form>
                        <div className='flex justify-center items-center gap-2'>

                            <button onClick={handleGoogleLogin} className="hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md py-2 border border-white font-semibold cursor-pointer flex justify-center items-center w-2/5">
                                <FaGoogle />

                                <h5 className='ml-2 text-sm'>Google</h5>
                            </button>

                            <button onClick={handleGithubLogin} className="hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md py-2 border border-white font-semibold cursor-pointer flex justify-center items-center w-2/5">
                                <FaGithub />


                                <h5 className='ml-2 text-sm'>Github</h5>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;