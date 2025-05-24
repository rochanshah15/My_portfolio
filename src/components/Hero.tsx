
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden px-4 sm:px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10 py-8 sm:py-16">
        <div className="animate-fade-in space-y-4 sm:space-y-6">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
              Alex Chen
            </span>
          </h1>
          
          <div className="text-lg xs:text-xl sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            <span className="inline-block animate-fade-in delay-300">Computer Science Student</span>
          </div>
          
          <div className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto px-2 sm:px-0">
            <span className="inline-block animate-fade-in delay-500">
              Passionate about Software Engineering, Web Development, and creating innovative solutions 
              that make a difference in the world.
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in delay-700 pt-4 sm:pt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none">
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download Resume
            </button>
            
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="animate-bounce mt-8 sm:mt-12">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
