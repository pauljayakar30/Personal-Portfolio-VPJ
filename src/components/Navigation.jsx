import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [shouldHideNavbar, setShouldHideNavbar] = useState(false)
  const [navbarOpacity, setNavbarOpacity] = useState(1)

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-laptop-code' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ]

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 50)

          // Simple logic: Always keep navbar visible unless bottom navigation is actually visible
          const bottomNav = document.querySelector('.bottom-navigation')
          
          if (bottomNav) {
            const bottomNavRect = bottomNav.getBoundingClientRect()
            const windowHeight = window.innerHeight
            
            // Check if bottom navbar is visible on screen
            const isBottomNavVisible = bottomNavRect.top < windowHeight && bottomNavRect.bottom > 0
            
            if (isBottomNavVisible) {
              // Calculate how much of bottom navbar is visible
              const visibleHeight = Math.min(bottomNavRect.bottom, windowHeight) - Math.max(bottomNavRect.top, 0)
              const totalHeight = bottomNavRect.height
              const visibilityRatio = visibleHeight / totalHeight
              
              // Gradually fade top navbar as bottom navbar becomes more visible
              const opacity = Math.max(0, 1 - visibilityRatio)
              setNavbarOpacity(opacity)
              
              // Disable functionality when bottom navbar is 90% visible
              setShouldHideNavbar(visibilityRatio >= 0.9)
            } else {
              // Bottom nav not visible, keep top nav fully visible
              setNavbarOpacity(1)
              setShouldHideNavbar(false)
            }
          } else {
            // No bottom nav found, keep top nav visible
            setNavbarOpacity(1)
            setShouldHideNavbar(false)
          }

          // Handle active section detection
          const sections = navItems.map(item => item.id)
          
          for (const sectionId of sections) {
            const section = document.getElementById(sectionId)
            if (section) {
              const rect = section.getBoundingClientRect()
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(sectionId)
                break
              }
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          opacity: navbarOpacity
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ 
          pointerEvents: shouldHideNavbar ? 'none' : 'auto'
        }}
      >
        <div className="nav-container">
          {/* Desktop Navigation */}
          <div className="nav-menu desktop-menu">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i
              className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="mobile-menu"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navigation
