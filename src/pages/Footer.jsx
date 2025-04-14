import React from 'react'
import linkin from '../assets/link.webp'
import git from '../assets/25231.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#1a1a1a] to-[#333] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div className="text-base md:text-lg" >
          <p className="mb-2" style={{fontFamily:'Satoshi, sans-serif'}}>Thank you for visiting my portfolio website.</p>
          <p style={{fontFamily:'Satoshi, sans-serif'}}>Connect with me:</p>
        </div>

        <div className="flex gap-4 items-center">
          <a href="https://github.com/meetarora10" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/meet-arora-603682296" target="_blank" rel="noopener noreferrer">
            <img src={linkin} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="text-orange-400 font-semibold text-base md:text-lg" style={{fontFamily:'Satoshi, sans-serif'}}>Quick Links</div>
      </div>

      <hr className="my-6 border-gray-500" />

      <p className="text-center text-sm md:text-base text-white">
        Made with <span className="text-red-400">❤️</span> by{' '}
        <span className="text-orange-400 font-semibold">Meet Arora</span>
      </p>
    </footer>
  )
}

export default Footer
