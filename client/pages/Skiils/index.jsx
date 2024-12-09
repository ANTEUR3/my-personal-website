import React, { useEffect, useState } from 'react'
import supabase from '@/config/SupaBaseClient'

const index = () => {

    const [skills,setSkills]=useState();
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
    <div className='relative min-h-screen w-full ' >
      
    <div className="absolute inset-0 bg-white dark:hidden">
    </div>

    <div className="absolute inset-0 bg-black hidden dark:block">
    </div>
    
</div>
  )
}

export default index