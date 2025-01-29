import React from 'react'
import { testimonial } from '../../Db'
import { TiStarFullOutline } from 'react-icons/ti'

const TestimonialCard = () => {
  return (
    <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto  max-w-6xl mt-20 mb-20 '>
      {testimonial.map((testimonial)=>(
        <div className='border-2 border-teal-700 p-6 rounded-lg flex flex-col space-y-6' key={testimonial.id}>
          <div className='flex'>
            {[...Array(testimonial.rate)].map((_, index)=>(
              <TiStarFullOutline className= 'text-teal-700' size={25} key={index} />
            ))}

          </div>
          <p className='text-gray-600'>{testimonial.comment}</p>
          <div className='flex items-center gap-4'>
            <div className=''>
              <img className='w-14 h-14 rounded-full' src={testimonial.img} alt={testimonial.name} />
              <div>
                <h3 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h3>
                <p className=''>{testimonial.desc}</p>
              </div>

            </div>

          </div>

        </div>
      ))}

      
    </div>
  )
}

export default TestimonialCard
