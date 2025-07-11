import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const activeLink =
    'underline decoration-blue-600 decoration-2 underline-offset-8 ';
  const normalLink = 'hover:underline hover:decoration-2 hover:decoration-blue-400 hover:ease-in-out hover:underline-offset-8';
  return (
    <nav className=" w-full bg-white shadow-md shadow-gray-200 dark:bg-gray-900 dark:shadow-lg dark:shadow-gray-800 ">
      <div className="flex flex-row h-14 items-center">
        <div className="basis-3/4 text-xl ml-16 md:ml-24 lg:ml-24 xl-ml-26 xl:mr-6 lg:mr-6 md:mr-4 sm:mr-2 font-bold font-sans text-gray-800 dark:text-white">
         <NavLink to="/"className="">Satyam<span className=' text-blue-600'>.</span></NavLink> 
        </div>
        <div className="basis-1/4 ml-50 mr-10 font-bold font-sans  space-x-4 xl:space-x-12 xl:flex lg:space-x-11 lg:flex text-gray-800 dark:text-white md:space-x-6 md:flex sm:space-x-4 sm:flex sm:mr-10 md:ml-50 hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Skills"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Contact
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-[.15rem] px-[.3rem] rounded-full bg-gray-800 dark:bg-bg-gray-800 hover:bg-gray-950  dark:hover:bg-white transition duration-500"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <button 
          className="sm:hidden md:hidden lg:hidden mx-auto p-6 text-gray-800 dark:text-white "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <motion.svg 
            
              transition={{ delay: 0.1, duration: 0.4 }}
             xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
            transition={{ delay: 0.1, duration: 0.4 }}
             xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (shown when mobileMenuOpen is true) */}
      {mobileMenuOpen && (
        <motion.div
        initial={{opacity:0,y:-5}}
        animate={{opacity:1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="sm:hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-100 py-2 px-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink) + " block font-bold font-sans text-gray-800 dark:text-white py-2"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) => (isActive ? activeLink : normalLink) + " block font-bold font-sans text-gray-800 dark:text-white py-2"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Skills"
            className={({ isActive }) => (isActive ? activeLink : normalLink) + " block font-bold font-sans text-gray-800 dark:text-white py-2"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? activeLink : normalLink) + " block font-bold font-sans text-gray-800 dark:text-white py-2"}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? activeLink : normalLink) + " block font-bold font-sans text-gray-800 dark:text-white py-2"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          <button
            onClick={toggleTheme}
            className="block font-bold font-sans text-gray-800 dark:text-white py-2"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </motion.div>
      )}
      
    </nav>
  );
}

export default Navbar;
