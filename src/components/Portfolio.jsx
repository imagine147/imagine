import React from 'react'
import PortfolioCard from './reuseable/PortfolioCard'


const Portfolio = () => {
  return (
    <div className='px-16'>

    <div className='w-full flex mx-auto flex-row justify-between pt-10 pb-4'>
    <div className='flex flex-col gap-4 text-start '>
      <h6>Recent Projects</h6>
      <h1 className='text-left text-4xl font-bold'>My Portfolio</h1>
      </div>
       <div className=''>
       <img className='' src="/src/assets/icons/Social button.png" alt="" />
       </div>
    </div>
  


      <PortfolioCard/>
    </div>
  )
}

export default Portfolio