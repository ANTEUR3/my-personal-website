import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '@/DataContext.js';
import WaitingData from '@/components/WaitingData';
import ProjectDetails from '@/components/Projects/ProjectDetails';
import { ProjectImages } from '@/components/Projects/projectImages';
const Project = () => {
    const [projectDisplay, setProjectDisplay] = useState(null);
    const [skills,setSkills]=useState([]);
    const [Images,setImages]=useState([]);
    const [Image,setImage]=useState(null);

    useEffect(()=>{console.log(Image)},[Image])


    const router = useRouter();
    const projectId = router.query.project;
    const { projects,projectsSkills,projectsImages } = useContext(appContext);


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
        <div className=' p-4 bg-gray-100 lg:pt-[100px] w-full h-screen overflow-hidden   '>
            {projectDisplay ? (
                <>
                <div className='h-screen w-full px-3 flex justify-start items-start'>
                  <ProjectDetails project={projectDisplay} projectSkills={skills} Images={Images} Image={Image}/>
                  <ProjectImages   Images={Images} projectId={projectId} setImage={setImage} />

                </div>
                <div className={`absolute lg:w-[600px] lg:py-[20px] border-2 rounded-xl shadow-2xl shadow-slate-700 bg-gray-100 lg:left-[110px] top-[50%]  flex flex-col justify-center items-center gap-y-4 ${Image==null?'-translate-y-[800px]  ':' -translate-y-[50%]'}`}>
                {Image!=null? <img src={`/images/${projectId}/${Image.id}.png`} className={`lg:w-[400px] h-[300px] rounded-lg `} />:''}
                  
                  <p>aaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                   
                </>
                
            ) : (
                <WaitingData />
            )}
        </div>
    )
}

export default Project