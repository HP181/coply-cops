'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from "next-themes"

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(false)
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r transition-colors duration-500">
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 ${
            theme === "dark" ? 'bg-blue-600' : 'bg-yellow-400'
        }`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
          animate={{
            x: theme === "dark" ? '100%' : '0%',
          }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30,
          }}
        >
          {theme === "dark" ? (
            <Moon className="w-3 h-3 text-blue-600" />
          ) : (
            <Sun className="w-3 h-3 text-yellow-400" />
          )}
        </motion.div>
      </button>
    </div>
  )
}

export default ThemeToggler;
