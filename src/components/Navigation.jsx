import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Clean Navigation Component - Mobile navigation removed
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-laptop-code' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' }
  ]

  useEffect(() => {
    let ticking = false
    let lastScrollY = 0

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          
          // Only update if scroll position changed significantly
          if (Math.abs(scrollY - lastScrollY) > 5) {
            setIsScrolled(scrollY > 50)
            lastScrollY = scrollY

            // Handle active section detection with optimized threshold
            const sections = navItems.map(item => item.id)
            
            for (const sectionId of sections) {
              const section = document.getElementById(sectionId)
              if (section) {
                const rect = section.getBoundingClientRect()
                // Adjusted threshold for smoother section detection
                if (rect.top <= 120 && rect.bottom >= 80) {
                  setActiveSection(sectionId)
                  break
                }
              }
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Enhanced smooth scrolling with custom options
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
      
      // Alternative smooth scroll implementation for better browser support
      // const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80
      // window.scrollTo({
      //   top: offsetTop,
      //   behavior: 'smooth'
      // })
    }
  }

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ 
          y: 0
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
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
        </div>
      </motion.nav>
    </>
  )
}

export default Navigation
