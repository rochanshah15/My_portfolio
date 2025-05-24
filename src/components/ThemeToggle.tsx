
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Toggle } from './ui/toggle';
import { cn } from '../lib/utils';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className={cn(
        "w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 border shadow-sm",
        "flex items-center justify-center relative overflow-hidden",
        theme === 'light' 
          ? "bg-gray-900 hover:bg-gray-800 border-gray-700 shadow-lg" 
          : "bg-white/10 backdrop-blur-lg hover:bg-white/20 border-gray-200 dark:border-gray-700"
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300" />
        ) : (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 transition-all duration-300" />
        )}
      </div>
    </Toggle>
  );
};

export default ThemeToggle;
