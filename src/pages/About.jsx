import React from 'react';
import aboutMePicture from '../assets/aboutMePicture.jpg';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className=' min-h-screen dark:bg-gray-800'>
      <div className='flex pt-[5.2rem] pb-[5.2rem]'>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.4}}
      className='basis-full md:basis-2/3 lg:basis2/3 xl:basis-2/3'>
      <div className='flex flex-col items-center font-serif  font-semibold text-5xl dark:text-white '>
        <h1>
          About Me
        </h1>
        <hr className="w-1/6 h-[.1rem] mt-1 bg-black border-0 dark:bg-white  " />
      </div>
      <div className='w-3/4 mx-auto mt-10 font-serif dark:text-white'>
      <p className=' text-2xl'>
      👋 Hi, I’m Satyam Jha a passionate Android & Web Developer skilled in Kotlin, 
      React.js, Firebase, and Spring Boot. I love building real-world apps and continuously 
      learning to improve. Let’s create something amazing together!
      </p>
      <p className='text-xl mt-5 underline underline-offset-4 font-medium'>My Journey of Becoming a Developer</p>
      <p className='text-lg mt-1 ml-1 font-normal'>💻 My coding journey began right after my 12th exams, 
        during the gap before college started. With a couple of months to spare and nothing much to do, I got 
        curious about programming and started exploring online. That’s when I discovered Java—despite hearing 
        it was a tough language to begin with, I decided to go for it.
        <br/>
        <br/>

        I dove into free resources on YouTube and completed a full course before college even began. Interestingly, 
        I had tried learning Python during 12th grade, but couldn’t find the time to complete it. So, Java officially 
        became my first and favorite programming language❤️.
        <br/>
        <br/>
        Once college started, I got to learn C, C++, JavaScript, CSS, DSA, ASP.NET, PHP, Android Development, and 
        Python. Each new language added a fresh perspective and pushed me further into the world of tech.
      </p>
      </div>
        </motion.div>
        <div className='basis-1/2 hidden md:flex lg:flex xl:flex'>
        <motion.div 
         initial={{opacity:0,y:-20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.5}}
        className='h-1/2 w-3/4 mt-[7rem]  mx-auto'>
        <img className='rounded-md shadow-xl shadow-gray-400 dark:shadow-gray-600 dark:shadow-lg ' src={aboutMePicture} alt='AboutMePicture' />
        </motion.div>
          </div>  
      </div>
    </div>
  )
}

export default About