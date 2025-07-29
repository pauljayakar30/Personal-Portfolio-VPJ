import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial value from localStorage or default to false
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  useEffect(() => {
    // Save to localStorage whenever darkMode changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return [darkMode, toggleDarkMode]
}
