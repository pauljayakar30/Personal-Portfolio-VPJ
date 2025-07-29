import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const educationData = [
    {
      institution: "Mohan Babu University",
      degree: "Bachelor of Technology in Artificial Intelligence & Machine Learning",
      duration: "2022 - 2026",
      location: "Tirupati, Andhra Pradesh",
      website: "https://mbuniv.ac.in/",
      highlights: [
        "CGPA: 9.2/10 (Current)",
        "Machine Learning Specialization",
        "Deep Learning & Neural Networks",
        "Data Structures & Algorithms",
        "Statistical Analysis & Probability"
      ],
      status: "current"
    },
    {
      institution: "Sainik School Kalikiri",
      degree: "Higher Secondary Education",
      duration: "2018 - 2022",
      location: "Kalikiri, Andhra Pradesh", 
      website: "https://sskal.ac.in/",
      highlights: [
        "Leadership & Discipline",
        "Teamwork & Sportsmanship",
        "Academic Excellence",
        "Public Speaking & Debate"
      ],
      status: "completed"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="education-section" id="education" ref={ref}>
      <div className="education-content">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="education-header"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My academic journey in technology and leadership
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="education-timeline"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className={`education-card ${edu.status}`}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="education-timeline-marker">
                <div className="timeline-dot"></div>
                {index < educationData.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="education-details">
                <div className="education-header-info">
                  <h3 className="institution-name">
                    <a 
                      href={edu.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="institution-link"
                    >
                      {edu.institution}
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </h3>
                  <div className="education-meta">
                    <span className="duration-badge">{edu.duration}</span>
                    {edu.status === 'current' && (
                      <span className="status-badge current">Current</span>
                    )}
                  </div>
                </div>
                
                <div className="degree-info">
                  <h4 className="degree-title">{edu.degree}</h4>
                  <p className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    {edu.location}
                  </p>
                </div>

                <div className="highlights">
                  <h5>Key Highlights:</h5>
                  <ul>
                    {edu.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (index * 0.3) + (hIndex * 0.1) }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
