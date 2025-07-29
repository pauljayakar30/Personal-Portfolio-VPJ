import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-laptop-code' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleSectionInView = () => {
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
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionInView)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionInView)
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
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-brand"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={() => scrollToSection('home')}>
              VPJ
            </a>
          </motion.div>

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
