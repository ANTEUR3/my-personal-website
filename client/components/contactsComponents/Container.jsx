import React from 'react'
import Media from './Media'
import Email from './Email'

const Container = () => {
  return (
    <div className='w-full h-full  flex justify-start items-start border-2 rounded-xl pt-3 pb-[100px] border-gray-900'>
        <Media/>
        <Email/>
    </div>
  )
}

export default Container