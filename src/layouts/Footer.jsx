import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import image from '../assets/icons/image 1 (1).png'

const Footer = () => {
  return (
    <div>
     <footer className='bg-[#F5FCFF] w-full px-16 mt-20 items-center mx-auto'>
     <div className='flex flex-row justify-between items-center py-20'>
     <div className='flex flex-row justify-center items-center'>
      <img className='w-10' src={image} alt="" />
        <h1 className='text-[#394149] font-bold text-[20px]'>JohnDev,</h1>
      </div>

      <div className='flex flex-row gap-6 font-semibold text-[18px] '>
        <h1>Home</h1>
        <h1>Portfolio</h1>
        <h1>About me</h1>
        <h1>Contact</h1>
        <h1>Testimonials</h1>
        <h1>Portfolio</h1>
      </div>

      <div className='flex flex-row gap-4'>
      <RiFacebookFill />
      <GrInstagram />
      <FaTwitter />
      <FaLinkedin />
      </div>

     </div>
      <hr style={{color: '#2829388C'}} />

      <div className='flex flex-row justify-between pt-10 pb-16'>
        <h5>Made with 💖 by Airdokan</h5>

        <div className='flex gap-6'>
          <h5>Privacy Policy</h5>
          <h5>Terms of Service</h5>
          <h5>Cookies Settings</h5>
        </div>
      </div>
     </footer>

    </div>
  )
}

export default Footer
