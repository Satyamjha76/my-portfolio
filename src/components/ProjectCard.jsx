import React, { useRef } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
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
      <p className='font-sans font-bold mb-4'>{props.items.name}</p>
      <hr className='w-full h-[.1rem] bg-black border-0 dark:bg-gray-300' />

      {/* Image Slider */}
      <div className="w-full h-66 mt-5">
        <Slide
          easing="ease"
          ref={slideRef}
          duration={3000}
          transitionDuration={500}
          indicators
          autoplay
          infinite
        >
          {props.items.images.map((image, index) => (
            <div className="each-slide" key={index}>
              <img
                src={image}
                loading='lazy'
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          ))}
        </Slide>
      </div>

      {/* Slider Controls */}
      <div className='flex justify-around mt-5'>
        <button
          onClick={goBack}
          className='rounded-full bg-blue-800 text-white px-2 text-xl hover:bg-blue-900'
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={goNext}
          className='rounded-full bg-blue-800 text-white px-2 text-xl hover:bg-blue-900'
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Description Section */}
      <div className='font-sans font-semibold text-justify'>
        <p className='mt-5'>
          Description:&nbsp;
          <span className='font-normal'>{props.items.description}</span>
        </p>
        <p className='mt-5'>
          Based On:&nbsp;
          <span className='font-normal'>{props.items.basedon}</span>
        </p>
        <p className='mt-5 flex'>
          Status:&nbsp;
          {props.items.isLive?
           <a className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium shadow-sm"  href={props.items.liveLink}
            target="_blank"
    rel="noopener noreferrer">
    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
    {props.items.status}
  </a>
  :
  <span className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm">
    <span className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></span>
   {props.items.status}
  </span>
}
        </p>
      </div>

      {/* Conditional "View Details" Button */}
      {props.items.hasDetails && (
        <div className='mt-6 flex justify-center'>
          <Link
            to={props.items.detailsLink || '#'} // Link to your detailed page
            onClick={()=>window.scrollTo(0,0)}
            className='px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md transition duration-300 ease-in-out'
          >
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
