import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className=' w-full md:h-screenlg:h-screen py-12'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl tracking-widest uppercase text-[5651e5'>Skills 
      </p>
      <h2 className='py-4'>What I Can Do</h2>
      <div className='grid md:grid-cols-2 lg:grid-col-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/html.png' width='65' height='65'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>HTML</h3>
          </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/css-logo.png
          ' width='65' height='65'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>CSS</h3>
          </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/typescript_logo.png' width='65' height='65'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>TYPESCRIPT</h3>
          </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/javascript-logo.png' width='75' height='75'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>JAVASCRIPT</h3>
          </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/react.png' width='75' height='75'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>REACT</h3>
          </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/TAILWIND.PNG' width='75' height='75'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>TAILWIND CSS</h3>
          </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scal-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
          <Image src='/next.png' width='150' height='150'  alt="profile-pic"  />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>NEXT JS</h3>
          </div>
        </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Skills