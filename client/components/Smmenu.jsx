import React from 'react'
import Link from 'next/link'

const Smmenu = ({handleMenu}) => {
  return (
    <div className={`w-full h-screen lg:hidden       `}>
       <div className='flex-col justify-center items-center gap-y-7  h-full w-full bg-gradient-to-br from-black via-gray-900 to-slate-800 hidden dark:flex'>
       <Link onClick={(()=>{handleMenu(false)})} href={'/'} className='text-md font-semibold hover:text-blue-500 text-white cursor-pointer '>Home</Link>
        <Link onClick={(()=>{handleMenu(false)})} href={'/Projects'} className='text-md font-semibold hover:text-blue-500 text-white cursor-pointer '>Projects</Link>
        <Link onClick={(()=>{handleMenu(false)})} href={'/'} className='text-md font-semibold hover:text-blue-500 text-white cursor-pointer '>Skills</Link>
        <Link onClick={(()=>{handleMenu(false)})} href={'/'} className='text-md font-semibold hover:text-blue-500 text-white cursor-pointer '>Contacts</Link>
       </div>
       <div className='flex-col relative justify-center gap-y-7 font-semibold items-center  pt-10 h-full w-full bg-gradient-to-br from-gray-100 via-gray-300 to-gray-600 flex dark:hidden'>
       <div className="absolute inset-0   bg-center bg-[url('/images/gplay.png')] backdrop-blur-md "></div>

        <Link className='text-gray-700 z-10 hover:text-gray-900 hover:font-bold transition-transform duration-400 ease-in-out hover:translate-x-5' onClick={(()=>{handleMenu(false)})} href={'/'}>Home</Link>
        <Link className='text-gray-700 z-10 hover:text-gray-900 hover:font-bold transition-transform duration-400 ease-in-out hover:translate-x-5' onClick={(()=>{handleMenu(false)})} href={'/Projects'}>Projects</Link>
        <Link className='text-gray-700 z-10 hover:text-gray-900 hover:font-bold transition-transform duration-400 ease-in-out hover:translate-x-5' onClick={(()=>{handleMenu(false)})} href={'/'}>Skills</Link>
        <Link className='text-gray-700 z-10 hover:text-gray-900 hover:font-bold transition-transform duration-400 ease-in-out hover:translate-x-5' onClick={(()=>{handleMenu(false)})} href={'/'}>Contacts</Link>

       </div>

    </div>
  )
}

export default Smmenu