import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  const skillIcons = [
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    { icon: <IoLogoJavascript className="text-yellow-500" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <FaPython className="text-blue-800" />, name: "Python" },
    { icon: <TbBrandNextjs className="text-black" />, name: "Next.js" },
    { icon: <SiCplusplus className="text-blue-700" />, name: "C++" },
    { icon: <FaJava className="text-red-600" />, name: "Java" }
  ];

  return (
    <div id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-neutral-700 to-neutral-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        My <span className="text-blue-600">Skills</span>
      </h1>
      
      <div className="max-w-6xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center justify-center group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;