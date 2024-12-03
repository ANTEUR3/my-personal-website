import React from 'react'

const Footer = () => {
  return (
    <div className='px-[100px] flex flex-col  justify-between items-center w-full border bg-slate-100 font-navFont'>
      <div className='flex justify-between items-center w-full pb-3'>
        <div className='flex justify-start items-center gap-x-2'>
           <img src="https://static.thenounproject.com/png/5402474-512.png" alt="" className="w-[50px] h-[50px]   " />
           <p className='font-navFont'>Web Dev </p>
        </div>
        <div className='flex ustify-center items-center gap-x-5'>
          <p>Home</p>
          <p>Projects</p>
          <p>Skiils</p>
          <p>Experiences</p>
          <p>Education</p>
          <p>Admin</p>
        </div>
        <div>Anteuryounes12@gmail.com</div>
      </div>
      
      <div className='flex justify-between items-center w-full border-t border-slate-600 pt-3'>
       <div>&copy; 2024 Younes . All right are reserved</div>
       <div className='flex justify-start items-center gap-x-4'>
        <p>Privacy policy</p>
        <p>Team & Condition</p>
       </div>
      </div>

    </div>
  )
}

export default Footer