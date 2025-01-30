import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import image from '../assets/icons/image 1 (1).png'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div>
     <footer className='bg-[#F5FCFF] w-full px-10 mt-20 items-center  mx-auto'>
     <div className='flex flex-col lg:flex-row  justify-between items-center py-20'>
     <Link to='hero' className='flex flex-row items-center'>
      <img className='w-10' src={image} alt="" />
        <h1 className='text-[#394149] font-bold text-[20px]'>JohnDev,</h1>
      </Link>

      <div className='flex flex-col lg:flex-row gap-6 font-semibold text-center text-[18px] py-6 lg:py-0 '>
        <Link to='hero'><h1>Home</h1></Link>
        <Link to='portfolio'><h1>Portfolio</h1></Link>
        <Link to='about'><h1>About me</h1></Link>
        <Link to='contact'><h1>Contact</h1></Link>
        <Link to='testimonial'><h1>Testimonials</h1></Link>
        <Link to='portfolio'><h1>Portfolio</h1></Link>
      </div>

      <div className='flex flex-col lg:flex-row gap-4'>
      <RiFacebookFill />
      <GrInstagram />
      <FaTwitter />
      <FaLinkedin />
      </div>

     </div>
      <hr style={{color: '#2829388C'}} />

      <div className='flex flex-col lg:flex-row justify-between gap-6 items-center pt-10 pb-16'>
        <h5>Made with 💖 by Airdokan</h5>

        <div className='flex flex-col lg:flex-row text-center gap-6'>
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
