import React, { createContext, useEffect, useReducer, useState } from 'react'
import supabase from './config/SupaBaseClient';

export const appContext = createContext();
export const HandleItem=(state,action)=>{
   return action.payload;

}


export const DataContextProvider = ({ children }) => {
  const [projects,setProjects]=useState([]);
  const [projectsSkills,setProjectsSkills]=useState([]);
  const [projectsImages,setProjectsImages]=useState([]);



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
          const ProjectsImages= async ()=>{
            const {data,error}=await supabase
            .from('ProjectImages')
            .select()
      
  
           if(error){
              console.log(error)
           }
          
           setProjectsImages(data)
  
          }
        fetchProjects();
        ProjectsSkills();
        ProjectsImages();
        
    },[])

    useEffect(()=>{console.log(projectsImages)},[projectsImages])
    const [navItem,handleItem]=useReducer(HandleItem,0);
   return (
     <appContext.Provider value={{projects,projectsSkills,projectsImages,navItem,handleItem}}>
       {children}
     </appContext.Provider>
   );
 };