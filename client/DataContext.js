import React, { createContext, useEffect, useState } from 'react'
import supabase from './config/SupaBaseClient';

export const appContext = createContext();


export const DataContextProvider = ({ children }) => {
  const [projects,setProjects]=useState([]);
  const [projectsSkills,setProjectsSkills]=useState([]);
    useEffect(()=>{
        const fetchProjects= async ()=>{
            const {data,error}=await supabase
            .from('Prjcts')
            .select()

            if(error){
                console.log(error)
            }
            if(data){
                setProjects(data);
            }

            
        }
        const ProjectsSkills= async ()=>{
            const {data,error}=await supabase
            .from('ProjectSkills')
            .select('*,Skills(*)')
      
  
           if(error){
              console.log(error)
           }
          
           setProjectsSkills(data)
  
          }
        fetchProjects();
        ProjectsSkills();
    },[])
 
   return (
     <appContext.Provider value={{projects,projectsSkills}}>
       {children}
     </appContext.Provider>
   );
 };