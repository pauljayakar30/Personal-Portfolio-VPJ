import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const isActive = (sectionId) => {
    if (location.pathname !== '/') return false
    
    const element = document.getElementById(sectionId)
    if (!element) return false
    
    const rect = element.getBoundingClientRect()
    return rect.top <= 120 && rect.bottom > 120
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand logo" to="/" onClick={() => scrollToSection('top')}>
          VPJ
        </Link>
        
        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${isActive('top') ? 'active' : ''}`}
                onClick={() => scrollToSection('top')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${isActive('skills') ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${isActive('education') ? 'active' : ''}`}
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link btn btn-link ${isActive('contact') ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
            
            {/* Desktop: More dropdown */}
            <li className="nav-item d-none d-lg-block dropdown">
              <button 
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button 
                    className="dropdown-item"
                    onClick={() => scrollToSection('projects')}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item"
                    onClick={() => scrollToSection('certifications')}
                  >
                    Certifications
                  </button>
                </li>
              </ul>
            </li>
            
            {/* Mobile: Show directly */}
            <li className="nav-item d-lg-none">
              <button 
                className={`nav-link btn btn-link ${isActive('projects') ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item d-lg-none">
              <button 
                className={`nav-link btn btn-link ${isActive('certifications') ? 'active' : ''}`}
                onClick={() => scrollToSection('certifications')}
              >
                Certifications
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background-color: var(--navbar-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition-fast);
          padding: 1rem 0;
        }

        .navbar.scrolled {
          padding: 0.5rem 0;
          box-shadow: var(--shadow-lg);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-color);
          text-decoration: none;
          background: linear-gradient(45deg, var(--primary-color), var(--info-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link {
          color: var(--text-color);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border: none;
          background: none;
          text-decoration: none;
          transition: var(--transition-fast);
          border-radius: 0.5rem;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-color);
          background-color: rgba(13, 110, 253, 0.1);
        }

        .navbar-toggler {
          border: none;
          padding: 0.25rem 0.5rem;
          color: var(--text-color);
          background: none;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .dropdown-menu {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          box-shadow: var(--shadow-lg);
        }

        .dropdown-item {
          color: var(--text-color);
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          padding: 0.5rem 1rem;
          transition: var(--transition-fast);
        }

        .dropdown-item:hover {
          background-color: rgba(13, 110, 253, 0.1);
          color: var(--primary-color);
        }

        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: var(--navbar-bg);
            border-radius: 0.5rem;
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid var(--border-color);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
