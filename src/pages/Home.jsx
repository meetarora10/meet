import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Img from '../assets/contact-img.svg'
import { motion } from 'framer-motion';

const Home = () => {
    const [text] = useTypewriter({
        words: ['I am Meet Arora', 'Full-stack Web Developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });

    return (
        <div className="min-h-screen flex flex-col md:flex-row w-full bg-gradient-to-b from-neutral-500 to-neutral-900 px-6 md:px-10 lg:px-20 py-20 md:py-0" id='home'>
            <div className='w-full md:w-1/2 flex flex-col justify-center md:mt-0 mt-16'>
                <h1 className='text-white text-2xl md:text-3xl lg:text-4xl mb-2'>Hello  🙏🙏</h1>
                <h2 className="text-[#ff8300] font-bold text-2xl md:text-3xl lg:text-5xl mb-6">
                    {text}
                    <Cursor cursorColor="#ff8300" />
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
                    Passionate web developer crafting engaging digital experiences with modern technologies and creative solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="https://drive.google.com/file/d/15zpadQ8zuFSTuw0hznYKZyaBZDfUmDqf/view?usp=drive_link" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-block">
                        <button className='px-6 py-3 bg-[#ff8300] text-white rounded-lg hover:bg-[#e67700] transition duration-300 text-base font-medium shadow-lg hover:shadow-xl cursor-pointer'>
                            View Resume
                        </button>
                    </a>
                    <a href="#contact" className="inline-block">
                        <button className='px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition duration-300 text-base font-medium cursor-pointer'>
                            Contact Me
                        </button>
                    </a>
                </div>
            </div>

            <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-[#ff8300] rounded-full blur-3xl opacity-20 transform scale-75"></div>
                    <img
                        src={Img}
                        alt="Developer Illustration"
                        className="relative z-10 h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Home