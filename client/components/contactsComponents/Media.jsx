import React from 'react'
import { IoIosContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from 'next/link';

const Media = () => {
  return (
    <div className='w-[28%] h-full px-7 pt-5 flex flex-col justify-start items-start  gap-y-5  rounded-tl-xl rounded-bl-xl '>
        <div className='flex justify-start items-center gap-x-3'>
            <IoIosContacts className='text-2xl font-bold text-gray-800'/>
            <p className='text-lg font-bold text-gray-800'>Contacts</p>
        </div>
        <div className='flex flex-col justify-start items-start gap-y-1 '>
        <Link href='/' className='flex justify-start items-start gap-x-3 hover:bg-slate-300 cursor-pointer px-2 py-2 rounded-lg'>
            <HiOutlineMail className='text-2xl'/>
          <div className='flex flex-col justify-start items-start gap-y-[0.5px]'>
            <p className='text-sm font-bold text-gray-900'>submit email to me </p>
            <p className='text-sm font-light text-gray-600'> you can to me an email for motivation</p>
            <p className='text-sm font-semibold text-gray-800 pt-2'> abnteuryounes1@gmail.com</p>
          </div>

        </Link>
        <Link href='/' className='flex justify-start items-start gap-x-3 hover:bg-slate-300 cursor-pointer px-2 py-2 rounded-lg'>
            <SlSocialLinkedin className='text-2xl'/>
          <div className='flex flex-col justify-start items-start gap-y-[0.5px]'>
            <p className='text-sm font-bold text-gray-900'>visit my linked in account</p>
            <p className='text-sm font-light text-gray-600'> you brows all my activities frm this link</p>
            <p className='text-sm font-semibold text-gray-800 pt-2'> abnteuryounes1@gmail.com</p>
          </div>

        </Link>
        <Link href='/' className='flex justify-start items-start gap-x-3 hover:bg-slate-300 cursor-pointer px-2 py-2 rounded-lg'>
            <LuGithub className='text-2xl'/>
          <div className='flex flex-col justify-start items-start gap-y-[0.5px]'>
            <p className='text-sm font-bold text-gray-900'>my programming state</p>
            <p className='text-sm font-light text-gray-600'> you brows  my programming state from here </p>
            <p className='text-sm font-semibold text-gray-800 pt-2'> ANTEUR3</p>
          </div>

        </Link>
        
        </div>
        <div className='w-full px-2 py-2  flex justify-start items-center gap-x-5 pt-5 '>
          <LuGithub className='text-2xl'/>
          <FaLinkedin className='text-2xl'/>
          <MdEmail className='text-2xl'/>
        </div>
       
    </div>
  )
}

export default Media