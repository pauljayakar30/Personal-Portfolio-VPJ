import React from 'react'
import { motion } from 'framer-motion'

const FooterComponent = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/pauljayakar30',
      icon: 'fab fa-linkedin',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/pauljayakar30',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Email',
      href: 'mailto:pauljayakar30@gmail.com',
      icon: 'fas fa-envelope',
      color: '#EA4335'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace('#', ''))
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-section footer-brand">
            <motion.h3
              className="footer-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Vasu Paul Jayakar
            </motion.h3>
            <motion.p
              className="footer-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              AIML Student & Aspiring Developer
            </motion.p>
            <motion.p
              className="footer-location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-map-marker-alt"></i>
              Tirupati, Andhra Pradesh, 517502
            </motion.p>
          </div>

          <div className="footer-section footer-links">
            <motion.h4
              className="footer-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <div className="footer-links-grid">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section footer-social">
            <motion.h4
              className="footer-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h4>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i 
                    className={social.icon}
                    style={{ '--social-color': social.color }}
                  ></i>
                </motion.a>
              ))}
            </div>
            <motion.p
              className="footer-social-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's connect and collaborate on innovative projects!
            </motion.p>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} Vasu Paul Jayakar. All rights reserved.
            </p>
            <p className="footer-built">
              Built with <i className="fas fa-heart"></i> using React & Framer Motion
            </p>
          </div>

          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Background Elements */}
      <div className="footer-bg-elements">
        <motion.div
          className="footer-gradient-orb"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  )
}

export default FooterComponent
