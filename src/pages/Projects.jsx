import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../config/projects'
import { motion } from 'framer-motion';
import useMeta from "../hooks/useMeta";
function Projects() {
  useMeta({
    title: "Projects | Satyam Jha",
    description: "Explore projects built by Satyam Jha using Android, Kotlin, Firebase, Spring Boot, and modern development tools.",
    keywords: "Satyam Jha projects, Android apps, Spring Boot projects, Kotlin, Firebase, developer portfolio"
  ,canonical: "https://satyamjha.live/projects"
  });
  return (

    <div className='min-h-screen bg-gradient-to-br dark:from-gray-800 dark:to-gray-900'>
    <div className='mx-5 sm:mx-16 md:mx-28 lg:mx-52 py-12'>
      <motion.div
        initial={{opacity:0,y:0}}
        animate={{opacity:1,y:0}} 
        transition={{duration:0.4}}
        className='flex flex-col items-center '>

      <h1 className='text-3xl font-sans font-bold dark:text-white'>Projects</h1>
      <hr className='w-16 h-[.1rem] mt-1 flex justify-center bg-black border-0 dark:bg-white '/>
      </motion.div>
      <motion.div
      initial={{opacity:0,y:0}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.4}} 
      className="flex flex-col items-center ">
       {projects.map((item)=><div className={item.name +" w-full py-5 mt-14 bg-[#f1f1f1] dark:bg-gray-700 rounded-2xl text-base shadow-xl shadow-gray-200 dark:shadow-gray-900 hover:shadow-2xl transition-shadow duration-300 p-5"} key={item.id}>
        <ProjectCard items={item}/>
       </div>)}
       
      </motion.div>
    </div>
          </div>
      
  )
}

export default Projects