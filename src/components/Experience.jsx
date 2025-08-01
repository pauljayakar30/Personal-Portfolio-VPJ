import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experienceData = [
    {
      id: 1,
      title: "Your Job Title",
      company: "Company Name",
      duration: "Start Date - End Date",
      type: "Full-time / Internship / Freelance",
      location: "Location",
      description: "Brief description of your role and responsibilities...",
      technologies: ["Tech1", "Tech2", "Tech3"],
      achievements: [
        "Achievement 1",
        "Achievement 2", 
        "Achievement 3"
      ]
    }
    // Add more experience items as needed
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Experience
          </h2>
          <p className="section-subtitle">
            My professional journey and work experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-timeline"
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="experience-item"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="experience-card">
                <div className="timeline-dot"></div>
                
                <div className="experience-header">
                  <div className="title-section">
                    <h3 className="job-title">{experience.title}</h3>
                    <h4 className="company-name">{experience.company}</h4>
                  </div>
                  <div className="meta-section">
                    <span className="duration-badge">{experience.duration}</span>
                    <span className="type-badge">{experience.type}</span>
                    {experience.location && (
                      <span className="location-badge">
                        <i className="fas fa-map-marker-alt"></i>
                        {experience.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="experience-content">
                  <p className="job-description">{experience.description}</p>

                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="achievements">
                      <h5 className="achievements-title">Key Achievements:</h5>
                      <ul className="achievements-list">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ 
                              delay: 0.3 + (index * 0.1) + (i * 0.1),
                              duration: 0.4
                            }}
                          >
                            <span className="achievement-bullet">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.technologies && experience.technologies.length > 0 && (
                    <div className="technologies">
                      <h5 className="tech-title">Technologies Used:</h5>
                      <div className="tech-stack">
                        {experience.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="tech-tag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ 
                              delay: 0.5 + (index * 0.1) + (i * 0.05),
                              duration: 0.3
                            }}
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {experienceData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="no-experience"
          >
            <div className="empty-state">
              <i className="fas fa-briefcase empty-icon"></i>
              <h3>Experience Coming Soon</h3>
              <p>I'm currently building my professional experience. Check back soon for updates!</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Experience
