import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id= 'about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='mx-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h1 className='py-4'>Who I Am</h1>
                <p className='py-2 text-gray-600'>
                I am a passionate front-end developer dedicated to building visually compelling and user-friendly web experiences. With expertise in modern HTML, CSS, and TypeScript,Next JS frameworks, I craft responsive and interactive interfaces that elevate the user journey. My focus is on clean, efficient code and seamless designs, ensuring every website or application is fast, accessible, and engaging across all devices. I enjoy transforming ideas into digital reality, always pushing my skills and staying updated with the latest front-end technologies to deliver innovative solutions.
                </p>
                <p className='py-2 text-gray-600'>
I am deeply passionate about learning, especially in the field of AI. I am driven by curiosity and the excitement of exploring how intelligent systems can transform the way we live and work. Every new concept or project I tackle fuels my desire to understand and innovate even further, whether it is diving into complex algorithms or experimenting with real-world applications. I believe that continuous learning is key to staying at the forefront of this rapidly evolving field and I am always eager to expand my skills and knowledge in meaningful ways.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer '>
                    Check out some of my latest projects
                </p>
            </div>
            <div className='w-full h-auto shadow xlshadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scal-105 ease-in duration-300 '>
            <Image className='rounded-xl'
            src="/profile.jpg "
            alt="profile-pic" width="800" height="1000" />
            </div>
            </div>

        </div>
    
  )
}

export default About