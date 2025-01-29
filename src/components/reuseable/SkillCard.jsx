import React from 'react'
import { skills } from '../../Db'

const SkillCard = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 max-w-7xl mx-auto'>
    {skills.map((skill)=>(
      <div className='w-[330px] md:w-[340px] lg:w-[300px] mx-auto flex justify-center items-center bg-sky-50 h-60 rounded shadow-sm hover:border-4 rounded-b-md border-purple-700' key={skill.id}>
        <div className='w-[280px] md:w-[290px] lg:w-[220px] h-5/6 flex flex-col justify-between'>
          <div className='w-14 h-20 flex items-center justify-center bg-white rounded-md py-2'>
            <img className='h-10' src={skill.icon} alt={skill.name} />

          </div>
          <div className='h-48 mt-4'>
            <h3 className='font-bold text-xl'>{skill.name}</h3>
            <p className='pt-2'>{skill.desc}</p>
          </div>
        </div>

      </div>
    ))}
    </div>
  )
}

export default SkillCard
