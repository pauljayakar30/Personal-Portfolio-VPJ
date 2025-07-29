import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      {/* Desktop Dark Mode Toggle */}
      <button
        id="darkModeToggle"
        className="btn darkmode-fab d-none d-sm-flex"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        type="button"
        tabIndex="0"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Dark Mode Toggle */}
      <button
        id="darkModeToggleMobile"
        className="btn darkmode-fab d-block d-sm-none"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        type="button"
        tabIndex="0"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </>
  )
}

export default DarkModeToggle
