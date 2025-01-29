import React from 'react'

const About = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center mx-auto px-16 md:px-12 py-12 '>
      <img className='w-72 h-80 md:h-2/3 md:w-96 object-cover' src="/src/assets/icons/About Me.png" alt="" />

      <div className='w-full md:w-1/2 p-6 md:p-8 text-center md:text-start mx-auto '> 
        <h6 className='font-semibold text-lg'>About</h6>
        <div className='space-y-4'>
        <h1 className='text-4xl font-bold mt-4'>About Me</h1>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
        <p> Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
        </div>
      </div>
    </div>
  )
}

export default About