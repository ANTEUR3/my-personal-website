import React, { useEffect, useState } from 'react'
import supabase from '@/config/SupaBaseClient'

const index = () => {

    const [skills,setSkills]=useState([]);
    useEffect(()=>{
        const fetchSkills= async ()=>{
            const {data,error}=await supabase
            .from('Skills')
            .select()

            if(error){
                console.log(error)
            }
            if(data){
                setSkills(data);
            }

            
        }
        fetchSkills();
    },[])
    useEffect(()=>{console.log(skills)},[skills])
  return (
    <div className='relative min-h-screen w-full dark:bg-slate-900 bg-slate-100 pt-10 ' >
      {skills.length>0?
       skills[0].Name
      :''}
    
</div>
  )
}

export default index