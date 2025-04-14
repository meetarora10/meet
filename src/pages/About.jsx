import React from 'react'
import Man from '../assets/man.png'

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-neutral-900 to-neutral-700 text-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-[#ff8300]">Me</span>
        </h1>
        
        <div className="w-24 h-1 bg-[#ff8300] mx-auto mb-12 rounded-full"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#ff8300] rounded-full blur-3xl opacity-10 transform scale-75"></div>
            <img
              src={Man}
              alt="Profile"
              className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 object-contain relative z-10 rounded-xl"
            />
          </div>
          
          <div className="md:w-1/2 text-left mt-8 md:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-[#ff8300] mb-4">Full-Stack Web Developer</h2>
            
            <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed" style={{fontFamily: 'Satoshi, sans-serif'}}>
              I am a full-stack web developer based in New Delhi, India. Currently pursuing my third year in Computer Science Engineering at Maharaja Surajmal Institute Of Technology affiliated to GGSIPU.
            </p>
            
            <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed" style={{fontFamily: 'Satoshi, sans-serif'}}>
              I'm passionate about creating innovative web solutions and constantly improving my skills. I enjoy tackling complex problems and am always open to collaborate and help others in their development journey.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-[#ff8300] font-bold mb-2">Education</h3>
                <p className="text-gray-300">B.Tech in CSE</p>
                <p className="text-gray-400 text-sm">MSIT, New Delhi</p>
              </div>
              
              <div>
                <h3 className="text-[#ff8300] font-bold mb-2">Location</h3>
                <p className="text-gray-300">New Delhi</p>
                <p className="text-gray-400 text-sm">India</p>
              </div>
            </div> */}
            
            <a href="#contact" className="inline-block mt-8 px-6 py-3 bg-[#ff8300] text-white rounded-lg hover:bg-[#e67700] transition duration-300 text-base font-medium shadow-lg hover:shadow-xl">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;