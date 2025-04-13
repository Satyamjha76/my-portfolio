import React,{useRef}from 'react';
import 'react-slideshow-image/dist/styles.css'; 
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ProjectCard(props) {
  
const slideRef = useRef();

const goNext = () => {
  slideRef.current.goNext();
};

const goBack = () => {
  slideRef.current.goBack();
};
  return (
    <div className='container dark:text-gray-200'>
      <p className='font-sans font-bold mb-4 '>{props.items.name}</p>
      <hr className='w-full h-[.1rem]  bg-black border-0 dark:bg-gray-300 '/>
      <div className="w-full h-66 mt-5 ">
      
      
        <Slide easing="ease" ref={slideRef} duration={3000} transitionDuration={500} indicators autoplay infinite  >
          {props.items.images.map((image, index) => (
            <div className="each-slide" key={index}>
          
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-contain rounded-lg"
              />
                  
            </div>
          ))}
        </Slide>
        </div>
        <div className='flex justify-around mt-5'>

        <button onClick={goBack} className=' rounded-full bg-blue-800 text-white px-2  text-xl hover:bg-blue-900'> <FontAwesomeIcon icon={faArrowLeft}  /></button>
        <button onClick={goNext}className='rounded-full bg-blue-800 text-white px-2  text-xl hover:bg-blue-900'><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        <div className='font-sans font-semibold text-justify'>
        <p className='mt-5'>Description:&nbsp;
          <span className='font-normal '>{props.items.description}</span>
        </p>
        <p className='mt-5'>Based On:&nbsp;
          <span className='font-normal'>{props.items.basedon}</span>
        </p>
        <p className='mt-5'>Status:&nbsp;
          <span className='font-normal'>{props.items.status}</span>
        </p>
        </div>
           
                

        
    </div>
  );
}

export default ProjectCard;
