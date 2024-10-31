import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
           

            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGATHER</p>
                <h1 className='py-4 text-gray-700'>Hi,I am <span className='text-[#302c9f]'>RAFIA RAFI</span>
                </h1>
                <h1 className='py-4 text-gray-700'>A Front-End Developer </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am front-end web Developer specializing in building (and occasionally desiging) excepptional digital experience .Currently I am focused on building responsive front-end web application while learning back-end technologies.</p>
                <button className='w-22 p-2 text-gray-100 m-4 bg-[#5651e5] hover:bg-[#4340c7] transition duration-200'>
                  Download CV
                </button>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsPersonLinesFill />
                </div>

                  </div>

                </div>

            </div>

        </div>
      
    
  )
}

export default Hero
