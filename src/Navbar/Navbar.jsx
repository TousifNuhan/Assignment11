import React, { useContext, useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import logo from '../assets/boy.png'

const Navbar = () => {

  const { user, userSignOut, loading } = useContext(AuthContext)

  if(loading){
    return
  }

  const handleLogout = () => {
    userSignOut()
      .then(result => {

        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/"

  const navBeforeLogin = <>
    {
      user ? <>
        <NavLink to="/"><li><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base border-none text-start`}>Home</a></li></NavLink>
        <hr className='text-[#D2B48C]' />
        <NavLink to="/assignments"><li><a className={`${location.pathname === "/assignments" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base text-start`}>Assignments</a></li></NavLink>
        <hr className='text-[#D2B48C]' />
        <NavLink to="/createAssignment"><li><a className={`${location.pathname === "/createAssignment" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base text-start`}>Create Assignment</a></li></NavLink>
        <hr className='text-[#D2B48C]' />
        <NavLink to="/pendingAssignment"><li><a className={`${location.pathname === "/pendingAssignment" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base text-start`}>Pending Assignment</a></li></NavLink>
      </>
        : <>
          <NavLink to="/"><li><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base border-none`}>Home</a></li></NavLink>
          <NavLink to="/assignments"><li><a className={`${location.pathname === "/assignments" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base`}>Assignments</a></li></NavLink>
        </>
    }
  </>

  const navAfterLogin2Parts = <>
    <NavLink to="/mySubmittedAssignments"><a className={`${location.pathname === "/mySubmittedAssignments" ? 'text-yellow-500' : ' text-black'} hover:text-yellow-500 font-semibold text-base text-center `}>Submitted Assignments</a></NavLink>
    <hr className='text-[#D2B48C] mt-1' />
    <NavLink to="/login" onClick={handleLogout}
      className="border-2 border-white text-center text-base font-semibold text-black cursor-pointer hover:bg-white hover:text-yellow-500 rounded-4xl  mr-2">Logout</NavLink>
  </>

  const navBeforeLogin1 = <>
    {
      user ?
        <>
          <div className="dropdown dropdown-end  lg:mr-3">
            <div tabIndex={0} role="" className=" ">
              <div className='avatar'>
                <div className="w-12 rounded-full ">
                  <img src={ user.photoURL } alt='Coming soon' />
                </div>
              </div>
            </div>
            <ul className="lg:flex hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {
                navAfterLogin2Parts
              }

            </ul>
          </div>
        </>
        : <>
          <NavLink to="/register"> <a className="border-2 border-white px-8 py-2 text-base font-semibold text-white cursor-pointer mr-4 hover:bg-white hover:text-black rounded-4xl">Register</a></NavLink>
          <NavLink to="/login"><a className="border-2 border-white px-8 py-2 text-base font-semibold text-white cursor-pointer hover:bg-white hover:text-black rounded-4xl mr-2">Login</a></NavLink>
        </>
    }

  </>

  return (
    <div className={`fixed top-0  w-full z-20 ${ !isHomePage || (isHomePage && isScrolled) ? 'bg-[#000000bf] shadow-md  ' : 'bg-transparent'} transition-all duration-500 `}>
      <div className="navbar">
        <div className="navbar-start w-4/5 items-center">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul className="menu menu-sm dropdown-content text-center bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {
                navBeforeLogin
              }
              {user && <hr className='text-[#D2B48C] ' />}
              {
                user && navAfterLogin2Parts
              }

            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-8 w-10 ml-2" src="https://storage.googleapis.com/sm-studio/studio/uploads/e790da2e-b54e-45ab-afee-de73237a29a7.svg" alt="Logo" />
            <a className="ml-3 text-2xl font-semibold text-white">PeerLearn</a>

          </div>
          <div className=" hidden lg:flex ml-5">
            <ul className="menu menu-horizontal px-1">
              {

                navBeforeLogin
              }
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          {
            navBeforeLogin1
          }
        </div>
      </div>
    </div>

  );
};

export default Navbar;


// const navAfterLogin1 = <>
//   <NavLink to="/"><li><a className={`${location.pathname === "/" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base border-none`}>Home</a></li></NavLink>
//   <hr className='text-[#D2B48C]' />
//   <NavLink to="/assignments"><li><a className={`${location.pathname === "/assignments" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base`}>Assignments</a></li></NavLink>
//   <hr className='text-[#D2B48C]' />
//   <NavLink to="/createAssignment"><li><a className={`${location.pathname === "/createAssignment" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base`}>Create Assignment</a></li></NavLink>
//   <hr className='text-[#D2B48C]' />
//   <NavLink to="/pendingAssignment"><li><a className={`${location.pathname === "/pendingAssignment" ? 'text-yellow-500' : 'lg:text-white text-black'} hover:text-yellow-500 font-semibold text-base`}>Pending Assignment</a></li></NavLink>
// </>




// const navAfterLogin2 = <>
//   <div className="dropdown dropdown-end  lg:mr-3">
//     <div tabIndex={0} role="" className=" ">
//       <div className='avatar'>
//         <div className="w-12 rounded-full">
//           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//         </div>
//       </div>
//     </div>
//     <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//       {
//         navAfterLogin2Parts
//       }

//     </ul>
//   </div>
// </>