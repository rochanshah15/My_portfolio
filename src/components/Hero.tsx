
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            <span className="inline-block animate-fade-in delay-300">Computer Science Student</span>
          </div>
          
          <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            <span className="inline-block animate-fade-in delay-500">
              Passionate about Software Engineering, Web Development, and creating innovative solutions 
              that make a difference in the world.
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-700">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
