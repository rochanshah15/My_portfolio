
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/70 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-sm"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 dark:text-blue-400" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
