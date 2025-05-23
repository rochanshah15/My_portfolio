
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Alex Chen. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">Privacy Policy</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">Terms of Service</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
