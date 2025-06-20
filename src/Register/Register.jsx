import React, { useContext, useRef, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import useAuth from '../Hooks/useAuth';

const Register = () => {

    const { user, loading, setLoading } = useAuth()
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    // const { createWithEmailAndPASS, googleLogin, githubLogin } = useContext(AuthContext)
    const { createWithEmailAndPASS, googleLogin, githubLogin } = useAuth()

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                toast.success("Registration successful!")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                toast.error("Registration attempt failed")

            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success("Registration successful!")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                toast.error("Registration attempt failed")
            })
    }

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const PhotoURL = form.PhotoURL.value
        //  console.log(name,email, password, PhotoURL)

        if (password.length < 6) {
            toast.error("Password should be more than 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("You must have to give atleast one uppercase letter")
            return
        }
        else if (!/[0-9]/.test(password)) {
            toast.error("You must have to give atleast one number")
            return
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error("You must have to give atleast one special character")
            return
        }


        createWithEmailAndPASS(email, password)

            .then(result => {
                console.log(result.user)
                // updating the user with name and photoURL
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: PhotoURL
                })
                    .then(() => console.log('profile updated'))
                    .catch()

                toast.success("Registration successful!")
                // navigate(location?.state ? location.state : '/')
                form.reset()
            })

            .catch(error => {
                console.error(error)
                toast.error("Registration attempt failed")
            })

    }

    return (
        <div className='bg-black'>
            <div className='w-11/12 mx-auto flex justify-center items-center lg:min-h-screen pt-28 pb-14'>
                <div className='flex-1'>
                    <img className='rounded-3xl' src="https://media.istockphoto.com/id/1411110345/photo/side-view-of-a-successful-smart-guy-listening-to-an-online-lecture-taking-notes-in-a-notebook.webp?a=1&b=1&s=612x612&w=0&k=20&c=gRtVi4qmR2GqZIteRUKQUebQlfSNQ2OfO-u4XtVRSpI=" alt="" />
                </div>
                <div className='flex-1'>
                    <div className='text-white text-center'>
                        <h1 className='md:text-xl lg:text-2xl font-bold '>Sign Up & Start Learning <br />
                            on PeerLearn!</h1>
                        <p className='md:text-sm lg:text-lg w-11/12 font-light mt-2 mb-7 text-center  mx-auto'>Create your account and join a vibrant community of learners. Collaborate,  share knowledge and achieve <br /> your academic goals.</p>
                    </div>
                    <div className='md:w-11/12 lg:w-4/5 mx-auto'>
                        <form onSubmit={handleRegister} className='text-center'>
                            <label className="block">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5' type="text" name='name' placeholder='Full Name' required />
                            </label>

                            <label className="mt-3 block">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5' type="email" name='email' placeholder='E-mail Address' required />
                            </label>

                            <label className="mt-3 block">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5 ' type="url" name='PhotoURL' placeholder='PhotoURL' required />
                            </label>

                            <label className="mt-3 block relative md:w-fit lg:w-4/5 lg:mx-auto ">
                                <input className='focus:outline-none bg-[#ffffff1a] text-[#bababa] border border-[#8E8E8E] placeholder:text-[#bababa] active::transition active::delay-150 active::bg-[#ffffff33] active::duration-200 w-sm py-2 rounded-md active::border-[#bababa] pl-5 '
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    placeholder='Password'
                                    required />
                                <span className='' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <PiEyeLight className='h-5 w-5 absolute top-2.5 md:right-4 lg:right-5 text-white' /> :
                                            <PiEyeSlash className='h-5 w-5 absolute top-2.5 md:right-4 lg:right-5 text-white' />
                                    }
                                </span>
                            </label>


                            <div className='md:w-auto lg:w-4/5 mx-auto my-3 gap-1 '>
                                <button className='bg-white text-black rounded-md w-1/2 py-2 border border-white  font-semibold cursor-pointer md:ml-5 lg:ml-1'>Create Account</button>
                                <Link to="/login"><button className='hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md w-2/5 py-2 px-3 border border-white font-semibold cursor-pointer ml-2'>Login</button></Link>
                            </div>

                            <div>
                                <h4 className='text-white text-center text-sm font-medium mt-5 mb-5'>Or login with</h4>
                            </div>

                        </form>
                        <div className='flex justify-center items-center gap-2 '>

                            <button onClick={handleGoogleLogin} className="hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md py-2 border border-white font-semibold cursor-pointer flex justify-center items-center md:w-1/2 lg:w-2/5 md:ml-4 lg:ml-0">
                                <FaGoogle />

                                <h5 className='ml-2 text-sm'>Google</h5>
                            </button>

                            <button onClick={handleGithubLogin} className="hover:bg-white text-white hover:transition-all hover:delay-100 hover:text-black rounded-md py-2 border border-white font-semibold cursor-pointer flex justify-center items-center md:w-1/2 lg:w-2/5">
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

export default Register;