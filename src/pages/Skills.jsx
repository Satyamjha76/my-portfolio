import React from 'react';
import skills from '../config/skills';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';
import useMeta from "../hooks/useMeta";

function Skills() {
  useMeta({
    title: "Skills | Satyam Jha",
    description: "Discover the technical skills of Satyam Jha, including Android development, Kotlin, Firebase, Spring Boot, React, and more.",
    keywords: "Satyam Jha skills, Android developer, Kotlin, Spring Boot, Firebase, React, software development"
    ,canonical: "https://satyamjha.live/skills"
  });
  return (
  
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8  bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4}} 
          className='flex flex-col mb-14 items-center'>

        <h1 className="text-3xl font-bold font-sans  text-center text-gray-800 dark:text-white ">
          My Skills
        </h1>
        <hr className="w-[4.5rem] h-[.1rem] mt-1 dark:bg-white bg-black border-0" />
        </motion.div>
        
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4}}   
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((item, index) => (
            <div key={index} className="flex justify-center">
              <SkillCard items={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    
  );
}

export default Skills;