import React from 'react'

const WaitingData = () => {
  return (
    <div className='w-full lg:h-[500px] flex justify-center flex-col items-center '>
         
         
          <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
       
    </div>
  )
}

export default WaitingData