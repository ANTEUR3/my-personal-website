import React from 'react'
import Languages from './LanguagesAndTools/Languages'
import Framworks from './LanguagesAndTools/Framworks'

const LanguagesAndTools = () => {
  return (
    <div className='min-h-screen lg:pt-[100px] lg:px-[100px] bg-slate-50 dark:bg-slate-900 w-full  '>
      <h2 className='lg:text-3xl pb-2 lg:font-semibold text-gray-800 dark:text-white w-full flex justify-center items-center'>Languages and Tools </h2>
      <div className='grid grid-cols-2 gap-2 '>
        <Languages />
        <Framworks />
      </div>
      
    </div>
  )
}

export default LanguagesAndTools