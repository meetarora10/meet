import React, { useState, useEffect } from 'react';
import linkin from "../assets/link.webp";
import git from "../assets/25231.png";
import { Link } from 'react-scroll';
import Progress from './Progress';
import Logo from '../assets/logo.png';
const Navbar = () => {
  const [navmod, setNavmod] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
 
  useEffect(() => {
    const handleBack = () => {
      if (window.scrollY >= 112) {
        setNavmod(true);
      } else {
        setNavmod(false);
      }
    };
   
    window.addEventListener('scroll', handleBack);
    return () => window.removeEventListener('scroll', handleBack);
  }, []);
 
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest('.navbar-container')) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavOpen]);
 
  return (
    <>
      <Progress />
      <div className={`fixed w-full z-50 transition-all duration-500 navbar-container ${navmod ? 'bg-gray-700' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-4">
          <img src={Logo} alt="" className='w-[44px] h-[40px]' />
          {/* <h3 className="text-white text-2xl font-semibold cursor-pointer" style={{fontFamily:'Playwrite_FR_Moderne,cursive'}}>
            El-Dorado
          </h3> */}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 font-medium">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 font-medium">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About me
                </Link>
              </li>
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 font-medium">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
              <div className="flex items-center space-x-4 ml-4">
                <a href="https://github.com/meetarora10" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img src={git} alt="GitHub" className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/meet-arora-603682296" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img src={linkin} alt="LinkedIn" className="w-7 h-7" />
                </a>
              </div>
            </ul>
          </nav>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none z-50" 
            onClick={handleClick}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isNavOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isNavOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isNavOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden bg-gray-800 transition-all duration-300 overflow-hidden ${isNavOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul className="flex flex-col py-2 px-6">
            <li className="py-3 border-b border-gray-700">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="block text-white hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-3 border-b border-gray-700">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="block text-white hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsNavOpen(false)}
              >
                About me
              </Link>
            </li>
            <li className="py-3 border-b border-gray-700">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="block text-white hover:text-gray-300 transition-colors font-medium"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="py-4 flex space-x-6">
              <a href="https://github.com/meetarora10" target="_blank" rel="noopener noreferrer" className="block">
                <img src={git} alt="GitHub" className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/meet-arora-603682296" target="_blank" rel="noopener noreferrer" className="block">
                <img src={linkin} alt="LinkedIn" className="w-7 h-7" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;