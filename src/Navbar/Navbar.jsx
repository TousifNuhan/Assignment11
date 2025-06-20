import React, { useContext, useEffect, useState } from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import logo from '../assets/boy.png'
import toast from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {

  // const { user, userSignOut, loading } = useContext(AuthContext)
  const { user, userSignOut, loading } = useAuth()

  // if (loading) {
  //   return 
  // }

  const handleLogout = () => {
    userSignOut()
      .then(result => {
        console.log(result.user)

        toast.success("Logout Successfull")

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

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
    <NavLink to="/mySubmittedAssignments"><a className={`${location.pathname === "/mySubmittedAssignments" ? 'text-yellow-500' : ' text-base-content'} hover:text-yellow-500 font-semibold text-base text-center `}>Submitted Assignments</a></NavLink>
    <hr className='text-[#D2B48C] mt-1' />
    <NavLink to="/login" onClick={handleLogout}
      className=" text-center text-base font-semibold text-base-content cursor-pointer  hover:text-yellow-500 rounded-4xl mr-2">Logout</NavLink>
  </>

  const lightToDark = (
    <label className="flex cursor-pointer gap-2 items-center mr-4">
      {/* Light icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="toggle bg-white border-white"
      />

      {/* Dark icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );


  const [isDropDownVisible, setIsDropDownVisible] = useState(false)

  const navBeforeLogin1 = <>
    {
      user ?
        <>
          <div className="dropdown dropdown-end  lg:mr-3">
            <div tabIndex={0} role="" className=" ">
              <div className='avatar'>
                <div className="w-12 rounded-full ">
                  <img src={user.photoURL} alt='Coming soon' />
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
    <div className={`fixed top-0  w-full z-20 ${!isHomePage || (isHomePage && isScrolled) ? 'bg-[#000000bf] shadow-md  ' : 'bg-transparent'} transition-all duration-500 `}>
      <div className="navbar">
        <div className="navbar-start w-4/5 items-center">
          <div onClick={() => setIsDropDownVisible(!isDropDownVisible)} className="dropdown ">
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
            lightToDark
          }
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