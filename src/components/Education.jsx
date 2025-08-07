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
      id: 1,
      title: "Higher Secondary Education",
      company: "Sainik School Kalikiri",
      duration: "2018 - 2022",
      type: "Full-time",
      location: "Kalikiri, Andhra Pradesh",
      description: "Completed higher secondary education with a focus on Science (PCM) and leadership development in a prestigious military school environment.",
      technologies: ["Mathematics", "Physics", "Chemistry", "Leadership", "Team Management"],
      achievements: [
        "Percentage: 86%",
        "Mathematics, Physics, Chemistry specialization",
        "Leadership & Discipline training",
        "Sports & Physical Fitness Excellence"
      ]
    },
    {
      id: 2,
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      company: "Mohan Babu University",
      duration: "2022 - 2026",
      type: "Full-time",
      location: "Tirupati, Andhra Pradesh",
      description: "Pursuing a comprehensive program focused on AI/ML technologies, software development, and data science with strong academic performance.",
      technologies: ["Python", "Machine Learning", "Deep Learning", "Data Science", "Web Development"],
      achievements: [
        "CGPA: 7.4/10",
        "Core Programming & Software Engineering",
        "Machine Learning & Deep Learning Fundamentals",
        "Data Science & Analytics Projects",
        "Mathematical Foundations for AI"
      ]
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
    <section className="experience-section" id="education" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Education
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-timeline"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className="experience-item"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="title-section">
                    <h3 className="job-title">{education.title}</h3>
                    <h4 className="company-name">{education.company}</h4>
                  </div>
                  <div className="meta-section">
                    <span className="duration-badge">{education.duration}</span>
                    <span className="type-badge">{education.type}</span>
                    {education.location && (
                      <span className="location-badge">
                        <i className="fas fa-map-marker-alt"></i>
                        {education.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="experience-content">
                  <p className="job-description">{education.description}</p>

                  {education.achievements && education.achievements.length > 0 && (
                    <div className="achievements">
                      <h5 className="achievements-title">Key Highlights:</h5>
                      <ul className="achievements-list">
                        {education.achievements.map((achievement, i) => (
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

                  {education.technologies && education.technologies.length > 0 && (
                    <div className="technologies">
                      <h5 className="tech-title">Key Areas:</h5>
                      <div className="tech-stack">
                        {education.technologies.map((tech, i) => (
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
      </div>
    </section>
  )
}

export default Education
