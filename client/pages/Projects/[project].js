import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '@/DataContext.js';
import WaitingData from '@/components/WaitingData';
import ProjectDetails from '@/components/Projects/ProjectDetails';
import { ProjectImages } from '@/components/Projects/projectImages';
import { FaHandPointUp } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Project = () => {
    const [projectDisplay, setProjectDisplay] = useState(null);
    const [skills,setSkills]=useState([]);
    const [Images,setImages]=useState([]);
    const [Image,setImage]=useState('https://i.pinimg.com/736x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg');
    const [showImage,setShowImage]=useState(false)
  const{navItem,handleItem}=useContext(appContext);

    useEffect(()=>{console.log(Image)},[Image])


    const router = useRouter();
    const projectId = router.query.project;
    const { projects,projectsSkills,projectsImages } = useContext(appContext);
    useEffect(()=>{
        handleItem({payload:1})
    },[])

    useEffect(() => {
        const projectData = projects.find(p => p.id == projectId);
        setProjectDisplay(projectData);
    }, [projects, projectId]);
    useEffect(() => {
      const skill = projectsSkills.filter((Skill)=> Skill.Project==projectId);
      setSkills(skill);
  }, [projectsSkills, projectId]);
  useEffect(()=>{
  const img=projectsImages.filter((I)=>I.project==projectId)
  setImages(img)
},[projectId,projectsImages])
 

    return (
<div className=' p-4 bg-gray-100 lg:pt-[100px] w-full h-screen overflow-hidden dark:bg-slate-900   '>
            {projectDisplay ? 
                <div >
                
                
                <div className='h-screen w-full px-3 flex justify-start items-start   z-100 relative'>
                  <ProjectDetails project={projectDisplay} projectSkills={skills} Images={Images} showImage={showImage}/>
                  <ProjectImages   Images={Images} projectId={projectId} setImage={setImage} setShowImage={setShowImage} />

                </div>
                     <div className={` absolute lg:w-[600px] lg:py-[20px] border-2 rounded-xl shadow-2xl shadow-slate-700 bg-gray-100   flex flex-col justify-center items-center gap-y-4 transition-transform duration-1000  top-[50%] left-[10%] ${showImage==false?'-translate-y-[800px]  ':' -translate-y-[50%]'}`}>
                           <img src={`/images/${projectId}/${Image.id}.png`} className={`lg:w-[450px] h-[300px] rounded-lg `} />
                  
                         <p className='text-lg text-gray-800'>{Image.Description}</p>
                         <MdCancel onClick={()=>{setShowImage(false)}} className='absolute top-2 right-2 -ranslate-x-[50%] lg:text-4xl cursor-pointer hover:text-red-600'/>

                    </div>

                </div>
               
                   
                
             : 
                <WaitingData />
            }
        </div>
    )
    
}

export default Project;