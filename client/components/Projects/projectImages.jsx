import React, { useMemo } from 'react'
import { useEffect } from 'react'

export const ProjectImages = ({Images,projectId,setImage,setShowImage}) => {

 const projectImages=useMemo(()=>{
  return Images.map((Img,key)=>{
    return <img key={key} onClick={()=>{setImage(Img);setShowImage(true)}} src={`/images/${projectId}/${Img.id}.png`} className='lg:w-[95%] lg:h-[130px] border-2 rounded-lg border-gray-800 cursor-pointer' />
  }
)
 },[Images])

useEffect(()=>{
  console.log(Images,projectId)
},[Images,projectId])
    
  return (
    <div className='relative z-19 w-[20%] flex flex-col justify-start items-start   gap-y-3 lg:pl-[30px]   lg:h-[430px] overflow-y-scroll'>
     
      {Images.length>0?projectImages:'no'}
    </div>
  )
}
