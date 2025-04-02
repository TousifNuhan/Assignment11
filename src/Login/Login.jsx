import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvider';



const Login = () => {

    const location=useLocation()
    console.log(location)
    const navigate=useNavigate()

    const { signInWithEmailAndPASS, googleLogin,githubLogin } = useContext(AuthContext)

    const handleGithubLogin=()=>{
        githubLogin()
        .then(result=>{
            console.log(result.user)
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>console.error(error))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state?location.state:'/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        // console.log(email,password)

        signInWithEmailAndPASS(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state?location.state:'/')
                form.reset()
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className=' bg-black '>
            <div className=' w-11/12 mx-auto flex justify-center items-center  min-h-screen pt-16 pb-14'>
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
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5' type="email" name='email' placeholder='E-mail Address' />
                            </label>
                            <label className="mt-3 block">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5 ' type="password" name='password' placeholder='Password' />
                            </label>


                            <div className='w-4/5 mx-auto my-3'>
                                <button className='bg-white text-black rounded-md w-1/2  py-2 border border-white ml-1 font-semibold cursor-pointer'>Login</button>
                                <Link to="/register"><button className='hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md py-2 ml-2 border w-2/5 border-white font-semibold cursor-pointer'>Create Account</button></Link>
                            </div>

                            <div>
                                <h4 className='text-white text-center text-sm font-medium mt-5 mb-5'>Or login with</h4>
                            </div>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;