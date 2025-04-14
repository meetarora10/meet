import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { MdLocationPin } from "react-icons/md"

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-white to-gray-200 px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">

        <div className="w-full md:w-[45%] bg-white rounded-lg shadow-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Enter your message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
            Send
          </button>
        </div>
       
        <div className="w-full md:w-[35%] flex flex-col gap-6 text-gray-800">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange-500 text-xl" />
            <p className="text-base" style={{fontFamily:'Satoshi, sans-serif'}}>+91-9582371097</p>
          </div>
          <div className="flex items-center gap-4">
            <IoMdMail className="text-orange-500 text-xl" />
            <p className="text-base" style={{fontFamily:'Satoshi, sans-serif'}}>meet.arora2403@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <MdLocationPin className="text-orange-500 text-xl" />
            <p className="text-base" style={{fontFamily:'Satoshi, sans-serif'}}>Janakpuri, New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
