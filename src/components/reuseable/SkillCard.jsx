import React from 'react'
import { skills } from '../../Db'

const SkillCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 w-full'>
      {skills.map((skill)=>(
        <div className='w-[300px] md:w-[340px] mx-auto lg:w-full flex justify-center items-center bg-sky-50 h-80 rounded shadow-sm hover:border-b-4 rounded-b-md border-purple-700 px-4 ' key={skill.id}>
          <div className='flex flex-col gap-6 '>
          <div className='bg-white p-4 w-16 h-16 flex justify-center rounded-md '>
            <img src={skill.icon} alt={skill.name}/>
            </div>
          <h4 className='font-bold text-[#282938] text-xl'> {skill.name}</h4>
          <p>{skill.desc}</p>
        </div>
          </div>
      ))}
    </div>
  )
 }
 
 
 export default SkillCard
