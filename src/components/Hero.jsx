import React from 'react'
import image from '../assets/icons/Group 11 1 (1).png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='flex flex-col  gap-6 lg:gap-4  lg:flex-row bg-[#F5FCFF] w-full mx-auto px-10 py-30 items-center '>
      <div className='flex flex-col gap-6 lg:gap-4 order-2 lg:order-1 items-center lg:items-start'>
        <h6 className='font-semibold text-sm text-[#282938]'>Hey, I am John</h6>
        <h1 className='font-bold text-3xl lg:text-5xl text-center text-[#282938] lg:text-left'>I develop dynamic and User-Centered Web  Applications</h1>
        <p className='text-sm text-start text-[#1C1E53] pb-10 pt-4'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
       <Link to='contact'> <div className='py-10'><button className='bg-blue-800 w-full text-white text-sm p-3 rounded-md'> Get In Touch</button></div></Link>
      </div>
      <div className='order-1 lg:order-2'>
        <img src={image} alt="" />
      </div>
    </div>
  )
 }
 
 
 export default Hero