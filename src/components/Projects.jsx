import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projectsData = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and featuring dark neumorphic design, interactive animations, and optimized performance.",
      image: "/myphoto.jpg", // Using existing photo as placeholder
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion", "Responsive Design"],
      features: [
        "Dark Neumorphic UI Design",
        "Responsive Layout",
        "Smooth Animations",
        "Interactive Components",
        "Performance Optimized"
      ],
      links: {
        github: "https://github.com/pauljayakar30/Personal-Portfolio-VPJ"
      },
      status: "completed"
    },
    {
      title: "AI Chatbot Assistant",
      description: "An intelligent chatbot powered by machine learning algorithms, capable of natural language processing and contextual responses.",
      image: "/myphoto.jpg", // Placeholder
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "Machine Learning"],
      features: [
        "Natural Language Processing",
        "Context-Aware Responses", 
        "Machine Learning Integration",
        "Real-time Communication",
        "Scalable Architecture"
      ],
      links: {
        github: "https://github.com/pauljayakar30"
      },
      status: "in-progress"
    },
    {
      title: "Smart Home IoT System",
      description: "IoT-based home automation system using sensors and machine learning for intelligent energy management and security monitoring.",
      image: "/myphoto.jpg", // Placeholder
      technologies: ["Python", "IoT", "Raspberry Pi", "Machine Learning", "Cloud"],
      features: [
        "Sensor Integration",
        "Energy Optimization",
        "Security Monitoring",
        "Mobile App Control",
        "Data Analytics"
      ],
      links: {
        github: "https://github.com/pauljayakar30"
      },
      status: "planned"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'status-completed'
      case 'in-progress': return 'status-progress'
      case 'planned': return 'status-planned'
      default: return 'status-completed'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'planned': return 'Planned'
      default: return 'Completed'
    }
  }

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="projects-content">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="projects-header"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Projects
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="projects-grid"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: (index * 0.2) + (fIndex * 0.08) }}
                      >
                        <i className="fas fa-check-circle"></i>
                        {feature}
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

export default Projects
