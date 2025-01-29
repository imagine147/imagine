import React from 'react'

const Contact = () => {
  return (
    <div className='w-[50%] mx-auto '>
      <div className='flex flex-col gap-4 text-center'>
        <p className='text-sm font-bold text-[#282938]'>Get in Touch</p>
        <h1 className='text-4xl font-bold text-[#282938]'>Contact me</h1>
        <p className='text-[#1C1E53]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div>
        <form className='' action="">
          <div className='flex flex-col gap-4 text-left mt-10 text-[#282938]'>
            <div className='flex flex-row gap-6 '>
              <div className='w-1/2 flex flex-col gap-2'>
              <label htmlFor="FirstName">First name</label>
              <input className='py-2 border rounded-md' type="text" />
              </div>

              <div className='w-1/2 flex flex-col gap-2'>
              <label htmlFor="LastName">Last name</label>
              <input className='py-2 border rounded-md' type="text" />
              </div>
            </div>

            <div className='w-full flex flex-row gap-6'>
             <div className='w-1/2 flex flex-col gap-2'>
             <label htmlFor="Email">Email</label>
             <input className='py-2 border rounded-md' type="text" />
             </div>

             <div className='w-1/2 flex flex-col gap-2'>
             <label htmlFor="Password">Password</label>
             <input className='py-2 border rounded-md' type="text" />
             </div>
            </div>



          </div>

          <div className='w-full mx-auto flex flex-col text-left gap-2 py-4'>
          <label htmlFor="Message">Message</label>
          <input className='py-8 border  rounded-md px-2 ' type="text" placeholder='Type your message...'/>

          <div className='flex flex-row gap-2 py-4'>
          <input type="CheckBox" />
          <label htmlFor="">I accept the terms</label>
          </div>

          <button className='bg-[#5E3BEE] text-white py-2 rounded-md'>submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact