import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import ProfileImage from '../assets/ProfileImage.png'
import { motion } from 'framer-motion';

function Home() {
  return (
    
    <div className="flex min-h-screen px-2 dark:bg-gray-800">
      <div className="flex flex-col items-center basis-full  lg:basis-2/3 xl:basis-2/3  ">
        <motion.div
        initial={{opacity:0,y:0}}
        animate={{opacity:1,y:0}} 
        transition={{duration:1}}
          className=" text-gray-800  dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-sans font-bold ">
            <p className="mt-[4.7rem] lg:mt-20 xl:mt-20">Hi,</p>
            <div className="flex mt-2 lg:mt-6 xl:mt-6 md:mt-4"> 
                <p className="">I’am&nbsp;
                <span className="text-blue-600 ml">Satyam Jha</span>
                </p>
                </div>  
                <div className=" mt-2 lg:mt-6 xl:mt-6 md:mt-4 min-h-[3rem]">
                  
                    <span className='block lg:w-[520px] xl:w-[520px] md:w-[370px] sm:w-[310px] w-[245px]'>
                <Typewriter
            words={['a Web Developer', 'a Android Developer']}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={90}
            dele teSpeed={65}
            delaySpeed={1500}
            /> 
            </span> 
          
        </div>
        <div className="lg:text-lg xl:text-lg md:text-sm mt-4 lg:mt-9 xl:mt-9 md:mt-6 text-xs ">

<Link to="/Contact" className="rounded-md  font-sans bg-blue-600  px-7 py-1.5 text-sky-50 font-bold hover:bg-blue-900">Contact</Link>
  </div>  
                </motion.div>
        
        
        
        </div>
        {/* Blob Shape */}
       
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="basis-2/4  justify-center hidden mx-auto items-center md:hidden lg:flex sm:hidden xl:flex">
  {/* Blob SVG */}
  <svg
    viewBox="0 0 170 200"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[500px] h-[600px] z-5  overflow-hidden  fill-blue-600 dark:fill-blue-600"
  >
    <path
      transform="translate(100 85)"
      d="M41.4,-51.3C52,-40.4,57.8,-25.8,60.1,-10.9C62.3,4,61.1,19.3,55.4,34.8C49.8,50.4,39.8,66.2,24.3,75.7C8.8,85.3,-12.3,88.5,-30.9,82.7C-49.4,76.8,-65.4,61.9,-76.1,43.8C-86.7,25.6,-92,4.2,-85.9,-12.5C-79.8,-29.2,-62.2,-41.2,-46,-51.1C-29.8,-61,-14.9,-68.7,0.2,-69C15.4,-69.3,30.8,-62.1,41.4,-51.3Z"
    />
  </svg>

  {/* Image Positioned on Top of Blob */}
  { /*eslint-disable-next-line */}
  <img
    src={ProfileImage}
    loading='lazy'
    alt="Your photo"
    className="absolute w-[371px] ml-7  mt-[4.7rem] rounded-[15rem]  "
  />
          
        
        </motion.div>
 

    </div>
  )
}

export default Home