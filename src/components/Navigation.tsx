
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scroll animation
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg dark:bg-gray-900/95' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Alex Chen</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              Hire Me
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 border-t border-gray-200 dark:border-gray-800 mt-2' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-300 py-2 text-base"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium mt-4 text-base">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
