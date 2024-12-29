import React, { useMemo } from 'react'
import { useEffect } from 'react'

export const ProjectImages = ({Images,projectId,setImage}) => {

 const projectImages=useMemo(()=>{
  return Images.map((Img,key)=>{
    return <img onClick={()=>{setImage(Img)}} src={`/images/${projectId}/${Img.id}.png`} className='lg:w-[95%] lg:h-[130px] border-2 rounded-lg border-gray-800 cursor-pointer' />
  }
)
 },[Images])

useEffect(()=>{
  console.log(Images,projectId)
},[Images,projectId])
    
  return (
    <div className='w-[20%] flex flex-col justify-start items-start   gap-y-3 lg:pl-[30px]   lg:h-[430px] overflow-scroll'>
     
      {Images.length>0?projectImages:'no'}
    </div>
  )
}
