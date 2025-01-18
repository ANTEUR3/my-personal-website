import React from 'react'

const Email = () => {
  return (
    <div className='w-[75%] bg-green-400 h-full rounded-lg pt-[30px] px-5'>
        <h1 className='text-black font-bold text-xl font-serif pb-3'>Submit an Email to me : </h1>
        <p className='text-lg text-gray-600 '>In this section you can submit to me an email to encourage me and say ......</p>
        <form action="" className='w-full lg:pt-[50px] flex flex-col justify-start items-start gap-y-3'>
          <input type="text"  className='w-full px-3 py-1 rounded-lg bg-transparent border-2 border-gray-950 placeholder-gray-600' placeholder='your name' />
          <input type="text"  className='w-full px-3 py-1 rounded-lg bg-transparent border-2 border-gray-950 placeholder-gray-600' placeholder='your email'/>
          
          <input type="text"  className='w-full px-3 py-1 rounded-lg bg-transparent border-2 border-gray-950 placeholder-gray-600' placeholder='your message'/>
          <div className="lg:pt-[10px] w-full">
          <button className='bg-black text-white font-semibold rounded-lg w-full py-2 hover:bg-gray-900'>Submit</button>

          </div>
        </form>
    </div>
  )
}

export default Email