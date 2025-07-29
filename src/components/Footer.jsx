import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaDiscord } from 'react-icons/fa'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer py-5">
      <div className="footer-container container">
        <div className="footer-content row text-center text-md-start align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="footer-brand">
              <h3 className="mb-1" style={{fontWeight: '700', letterSpacing: '1px'}}>
                Vasu Paul Jayakar
              </h3>
              <p className="mb-0" style={{fontSize: '1.05rem'}}>
                AIML Student & Aspiring Developer
              </p>
              <p className="mb-0" style={{fontSize: '0.98rem', color: 'var(--secondary-color)'}}>
                Tirupathi, Andhra Pradesh, 517502
              </p>
            </div>
          </div>
          
          <div className="footer-links col-md-5 mb-4 mb-md-0">
            <div className="footer-section mb-3">
              <h4 className="h6 mb-2" style={{fontWeight: '600'}}>Quick Links</h4>
              <div className="d-flex flex-wrap gap-2 justify-content-md-start justify-content-center">
                <button 
                  className="footer-link btn btn-link p-0"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
                <button 
                  className="footer-link btn btn-link p-0"
                  onClick={() => scrollToSection('skills')}
                >
                  Skills
                </button>
                <button 
                  className="footer-link btn btn-link p-0"
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </button>
                <button 
                  className="footer-link btn btn-link p-0"
                  onClick={() => scrollToSection('education')}
                >
                  Education
                </button>
                <button 
                  className="footer-link btn btn-link p-0"
                  onClick={() => scrollToSection('certifications')}
                >
                  Certifications
                </button>
                <button 
                  className="footer-link btn btn-link p-0"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-social col-md-3">
            <h4 className="h6 mb-2" style={{fontWeight: '600'}}>Connect</h4>
            <div className="d-flex gap-2 justify-content-md-start justify-content-center">
              <a 
                href="https://www.linkedin.com/in/pauljayakar30/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon footer-social-icon" 
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://github.com/pauljayakar30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon footer-social-icon" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:pauljayakar30@gmail.com" 
                className="social-icon footer-social-icon" 
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="https://discordapp.com/users/746587369360195705" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon footer-social-icon" 
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom text-center mt-4 pt-3 border-top" style={{borderColor: 'rgba(60,80,120,0.10)!important'}}>
          <p className="mb-1" style={{fontSize: '1.05rem'}}>
            &copy; 2025 Vasu Paul Jayakar. All rights reserved.
          </p>
          <p className="mb-0" style={{fontSize: '0.98rem', color: 'var(--secondary-color)'}}>
            Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
