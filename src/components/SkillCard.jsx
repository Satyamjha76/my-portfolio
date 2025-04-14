import React from 'react';

const SkillCard = ({ items }) => {
  return (
    <div className="w-52 h-72 rounded-xl overflow-hidden shadow-lg flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
     
      <div className="h-[65%] flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
        <img 
          src={items.image} 
          alt={items.name}
          loading='lazy'
          className="w-24 h-24 object-contain filter drop-shadow-lg" 
        />
      </div>
      
        <div className="h-[35%] bg-white dark:bg-gray-700 p-4 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-700 dark:text-white text-center mb-2">
          {items.name}
        </h3>
        
        <div className="flex justify-center items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`w-4 h-4 rounded-full ${
                i < items.level 
                  ? 'bg-yellow-400 dark:bg-yellow-500' 
                  : 'bg-gray-200 dark:bg-gray-600'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
            {items.level}/5
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;