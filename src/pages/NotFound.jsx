import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useMeta from "../hooks/useMeta";


function NotFound() {
  useMeta({
    title: "404 Not Found | Satyam Jha",
    description: "The page you are looking for does not exist. Explore other sections of Satyam Jha's portfolio website.",
    keywords: "404, Not Found, Satyam Jha Portfolio, Page Missing, Broken Link"
  });
  return (
  
    <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="max-w-md w-full"
      >
        {/* Animated 404 text */}
        <div className="relative mb-8">
          <motion.h1 
            className="text-9xl font-bold text-gray-800 dark:text-gray-100 relative z-10"
            animate={{ 
              rotate: [0, -5, 5, -3, 3, 0],
              y: [0, -10, 10, -5, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 4 
            }}
          >
            404
          </motion.h1>
          <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 blur-3xl opacity-20 rounded-full -z-0"></div>
        </div>

        <h2 className="text-2xl font-bold font-sans text-gray-700 dark:text-gray-200 mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-gray-600 font-sans dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/"
            className="inline-block px-6 py-3 font-sans bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-300 dark:bg-blue-700 rounded-full opacity-15 blur-xl"></div>
      </motion.div>
    </div>
    
  );
}

export default NotFound;