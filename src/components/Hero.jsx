import React from 'react'
import image from '../assets/icons/Group 11 1 (1).png'

const Hero = () => {
  return (
    <div className='] bg-[#F5FCFF] py-20 flex flex-row items-center px-8  '>
      
      <div className='w-full flex flex-col text-left gap-4 mx-auto'>
      <h6 className='text-[10px] text-[#282938] font-bold'>Hey, I am John</h6>

      <div className='space-y-3' >
      
      <h1 className='text-2xl font-bold text-[#282938]'>I develop dynamic and User-Centered Web Applications</h1>
      <p className='text-sm text-[#1C1E53]'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
      </div>
      

      <div>
      <button className='bg-[#5E3BEE] py-2 px-4 text-white text-sm rounded-sm mt-3'>Get in Touch</button>
      </div>

      </div>

      <div>
        <img className='' src={image} alt="" />
      </div>


    </div>
  )
}

export default Hero