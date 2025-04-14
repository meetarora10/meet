import React, { useState, useEffect } from 'react'
import linkin from "../assets/link.webp"
import git from "../assets/25231.png"
import { Link } from 'react-scroll';

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
  
  return (
    <>
      <div className={`fixed flex justify-between items-center w-full z-50 transition-all duration-700 ${navmod ? 'bg-[#434343]' : 'bg-transparent'} ${isNavOpen ? 'h-80' : 'h-[107px]'}`}>
        <h3 className="text-white text-2xl font-semibold ml-6 md:ml-24 mt-1 cursor-pointer" style={{fontFamily:'Playwrite_FR_Moderne,cursive'}}>El-Dorado</h3>
        
        <div className="flex items-center">
          <nav className="relative">
            <ul className={`${isNavOpen ? 'flex flex-col items-end absolute top-16 right-0 bg-[#434343] w-48 pt-4 pb-6 pr-4 space-y-4' : 'hidden md:flex md:flex-row md:mr-12 lg:mr-32 md:items-center md:space-x-8'} transition-all duration-500`}>
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 w-24 h-8 font-['Playwrite_FR_Moderne'] text-base">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 w-24 h-8 font-['Playwrite_FR_Moderne'] text-base">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setIsNavOpen(false)}
                >
                  About me
                </Link>
              </li>
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 w-24 h-8 text-base">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setIsNavOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="cursor-pointer text-white text-opacity-60 hover:text-white hover:text-opacity-100 transition-all duration-300 w-24 h-8 font-['Playwrite_FR_Moderne'] text-base">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setIsNavOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://github.com/meetarora10" className="block">
                  <img src={git} alt="GitHub" className="w-8 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/meet-arora-603682296" className="block">
                  <img src={linkin} alt="LinkedIn" className="w-8 h-7" />
                </a>
              </div>
            </ul>
          </nav>
          
          {/* Hamburger Icon */}
          <div className="md:hidden flex flex-col items-center justify-center mr-8 cursor-pointer z-50" onClick={handleClick}>
            <div className="w-8 h-1 my-1 bg-white"></div>
            <div className="w-8 h-1 my-1 bg-white"></div>
            <div className="w-8 h-1 my-1 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;