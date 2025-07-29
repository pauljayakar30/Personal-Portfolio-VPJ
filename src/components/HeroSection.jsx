import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['AI/ML Student', 'React Developer', 'Tech Enthusiast', 'Problem Solver']

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      setText(current => 
        isDeleting 
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Vasu Paul Jayakar
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            Passionate about artificial intelligence and machine learning, crafting innovative solutions 
            with modern web technologies. Currently pursuing AIML at Mohan Babu University.
          </p>
          
          <div className="hero-actions">
            <a 
              href="/resume.pdf" 
              className="btn-resume" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Vasu_Paul_Jayakar_Resume.pdf"
            >
              <span>Resume</span>
            </a>
            
            <div className="hero-social">
              <a href="https://linkedin.com/in/pauljayakar30" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/pauljayakar30" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:pauljayakar30@gmail.com" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-avatar">
          <div className="avatar-glow">
            <img src="/myphoto.jpg" alt="Vasu Paul Jayakar" />
          </div>
        </div>
      </div>
      
      <div className="hero-bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  )
}

export default HeroSection
