import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
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

  return (
    <div className={`fixed top-0  w-full z-20 ${isScrolled ? 'bg-[#000000bf] shadow-md  ' : 'bg-transparent'} transition-all duration-500 `}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Icon */}
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-10 w-10" src={logo} alt="Logo" />
            <a className="ml-1 text-xl text-white">PeerLearn</a>
           
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-white">Item 1</a></li>
            <li><a className="text-white">Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="border-2 border-white px-8 py-2 text-base font-semibold text-white cursor-pointer mr-4 hover:bg-white hover:text-black rounded-4xl">Register</a>
          <a className="border-2 border-white px-8 py-2 text-base font-semibold text-white cursor-pointer hover:bg-white hover:text-black rounded-4xl">Login</a>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
