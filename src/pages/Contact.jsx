import React from 'react';
import { motion } from 'framer-motion';
import siteConfig from'../config/siteConfig'
import useMeta from "../hooks/useMeta";


function Contact() {
  const email = "jha.satyam1976@gmail.com"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

   useMeta({
    title: "Contact | Satyam Jha",
    description: "Get in touch with Satyam Jha for collaborations, opportunities, or queries related to Android and Spring Boot development.",
    keywords: "Contact Satyam Jha, get in touch, connect, Android developer, Spring Boot developer, hire developer"
    ,canonical: "https://satyamjha.live/contact"
  });
  return (
  
    <div className="min-h-screen bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-[#f1f1f1] dark:bg-gray-700 rounded-xl shadow-lg p-8 text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Let's Connect</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="group relative">
          <div 
            onClick={copyToClipboard}
            className="bg-blue-100 dark:bg-gray-600 p-4  rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-200 dark:hover:bg-gray-500"
          >
            <div className="flex items-center justify-center  space-x-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-md md:text-lg lg:text-lg font-mono text-blue-600 dark:text-blue-400">{email}</span>
            </div>
          </div>
          <span className="absolute -bottom-6 left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to copy
          </span>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Prefer social media? Find me on:
          </p>
          <div className="flex justify-center space-x-4 mt-2">
           
            <a href={siteConfig.social.linkedin} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={siteConfig.social.github} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  
  );
}

export default Contact;