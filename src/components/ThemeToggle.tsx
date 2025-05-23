
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
        "w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/70 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-sm",
        "flex items-center justify-center"
      )}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700 dark:text-blue-400" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
