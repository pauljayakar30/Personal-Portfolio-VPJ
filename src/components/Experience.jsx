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
      title: "Google AI-ML Virtual Internship",
      company: "Google (via EduSkills & AICTE)",
      duration: "August 2025 - September 2025 (Ongoing)",
      type: "Virtual Internship",
      location: "Remote",
      description: "Currently participating in Google's AI-ML Virtual Internship program focusing on machine learning fundamentals, AI applications, and hands-on projects with Google's AI technologies.",
      technologies: ["Machine Learning", "Artificial Intelligence", "Python", "TensorFlow", "Google AI Platform"],
      achievements: [
        "Part of Cohort 13 in EduSkills platform",
        "Gaining hands-on experience with Google AI tools",
        "Developing practical ML skills through guided projects",
        "Enhancing understanding of AI/ML industry applications"
      ]
    },
    {
      id: 2,
      title: "Web Development Internship",
      company: "ApexPlanet Software Pvt. Ltd.",
      duration: "August 2025 - September 2025 (Ongoing)",
      type: "Internship",
      location: "Remote",
      description: "Currently focused on front-end web development using core technologies, building responsive and interactive web applications with modern development practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Development"],
      achievements: [
        "Developing responsive web interfaces",
        "Implementing interactive JavaScript features",
        "Applying modern CSS styling techniques",
        "Enhancing front-end development skills"
      ]
    },
    {
      id: 3,
      title: "AWS AI-ML Virtual Internship",
      company: "Amazon Web Services (AWS)",
      duration: "April 2025 - June 2025",
      type: "Virtual Internship",
      location: "Remote",
      description: "Comprehensive virtual internship program covering AWS cloud services, machine learning solutions, and AI implementations using AWS infrastructure and tools.",
      technologies: ["AWS", "Machine Learning", "Cloud Computing", "Python", "AWS SageMaker"],
      achievements: [
        "Completed Cohort 12 successfully",
        "Gained expertise in AWS ML services",
        "Learned cloud-based AI/ML deployment",
        "Developed practical cloud computing skills"
      ],
      certificate: "/assets/certificates/aws/AWS AIML Internship Certificate - VPJ.pdf"
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

                  {experience.certificate && (
                    <div className="certificate-section">
                      <motion.a
                        href={experience.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                          delay: 0.7 + (index * 0.1),
                          duration: 0.4
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{
                          scale: 0.98
                        }}
                      >
                        <i className="fas fa-certificate"></i>
                        <span>View Certificate</span>
                      </motion.a>
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
