import React from 'react'
import image from '../assets/icons/About Me.png'

const About = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center md:gap-6  mx-auto px-10 py-20 '>
      <img className='w-72 h-80 md:h-2/3 md:w-96 object-cover mx-auto' src={image} alt="" />

      <div className='w-full md:w-1/2 text-center md:text-start mx-auto '> 
        <h6 className='font-semibold text-sm mt-2 text-lg text-[#282938]'>About</h6>
        <div className='space-y-4'>
        <h1 className='text-3xl lg:text-4xl font-bold mt-4 text-[#282938] '>About Me</h1>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
        <p> Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
        </div>
      </div>
    </div>
  )
}

export default About