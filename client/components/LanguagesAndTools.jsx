import React from 'react'
import Languages from './LanguagesAndTools/Languages'
import Framworks from './LanguagesAndTools/Framworks'

const LanguagesAndTools = () => {
  return (
    <div className='min-h-screen pb-4 lg:pt-[200px]  lg:px-[100px] md:px-[50px]  md:pt-[50px] px-[20px] pt-[20px] bg-slate-50 dark:bg-slate-900 w-full  '>
      <h2 className='lg:text-3xl md:text-xl pb-2 font-semibold text-gray-800 dark:text-white w-full flex justify-center items-center'>Languages and Tools </h2>
      <div className='grid lg:grid-cols-2 gap-2 '>
        <Languages />
        <Framworks />
      </div>
      
    </div>
  )
}

export default LanguagesAndTools