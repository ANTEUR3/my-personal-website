import React from 'react'
import Media from './Media'
import Email from './Email'

const Container = () => {
  return (
    <div className='w-full h-full  flex justify-start items-start border-2 rounded-xl py-3  border-gray-900 px-3'>
        <Media/>
        <Email/>
    </div>
  )
}

export default Container