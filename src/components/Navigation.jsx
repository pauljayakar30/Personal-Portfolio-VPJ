import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

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
