import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [expandedCategory, setExpandedCategory] = useState(null)

  const certificationsData = [
    {
      category: "Coursera",
      icon: "fab fa-coursera",
      color: "#0056D3",
      certificates: [
        {
          title: "Machine Learning Specialization",
          issuer: "Stanford University",
          year: "2024",
          image: "/assets/certificates/coursera/cert1.svg",
          skills: ["Machine Learning", "Python", "TensorFlow"]
        },
        {
          title: "Deep Learning Specialization",
          issuer: "deeplearning.ai",
          year: "2024",
          image: "/assets/certificates/coursera/cert2.svg",
          skills: ["Deep Learning", "Neural Networks", "CNN"]
        },
        {
          title: "Python for Data Science",
          issuer: "IBM",
          year: "2023",
          image: "/assets/certificates/coursera/cert3.svg",
          skills: ["Python", "Data Analysis", "Pandas"]
        },
        {
          title: "AI for Everyone",
          issuer: "deeplearning.ai",
          year: "2023",
          image: "/assets/certificates/coursera/cert4.svg",
          skills: ["AI Strategy", "Business Applications"]
        }
      ]
    },
    {
      category: "Google Cloud Skills",
      icon: "fab fa-google",
      color: "#4285F4",
      certificates: [
        {
          title: "Google Cloud Fundamentals",
          issuer: "Google Cloud",
          year: "2024",
          image: "/assets/certificates/google_c_skills/gcskills1.svg",
          skills: ["Cloud Computing", "GCP", "Infrastructure"]
        },
        {
          title: "Machine Learning on GCP",
          issuer: "Google Cloud",
          year: "2024",
          image: "/assets/certificates/google_c_skills/gcskills2.svg",
          skills: ["ML on Cloud", "AutoML", "BigQuery"]
        },
        {
          title: "Data Engineering on GCP",
          issuer: "Google Cloud",
          year: "2023",
          image: "/assets/certificates/google_c_skills/gcskills3.svg",
          skills: ["Data Pipelines", "BigQuery", "Dataflow"]
        }
      ]
    },
    {
      category: "Cisco NetAcad",
      icon: "fas fa-network-wired",
      color: "#1BA0D7",
      certificates: [
        {
          title: "Introduction to Cybersecurity",
          issuer: "Cisco",
          year: "2023",
          image: "/assets/certificates/cisco/cisco1.svg",
          skills: ["Cybersecurity", "Network Security", "Ethical Hacking"]
        },
        {
          title: "Networking Essentials",
          issuer: "Cisco",
          year: "2023",
          image: "/assets/certificates/cisco/cisco2.svg",
          skills: ["Networking", "TCP/IP", "Routing"]
        },
        {
          title: "Python Essentials",
          issuer: "Cisco",
          year: "2022",
          image: "/assets/certificates/cisco/cisco3.svg",
          skills: ["Python Programming", "Data Structures", "OOP"]
        }
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const toggleCategory = (categoryIndex) => {
    setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)
  }

  return (
    <section className="certifications-section" id="certifications" ref={ref}>
      <div className="certifications-content">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="certifications-header"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Certifications & Badges
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Professional certifications in AI/ML, Cloud Computing, and Technology
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="certifications-categories"
        >
          {certificationsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="certification-category"
            >
              <motion.div
                className="category-header"
                onClick={() => toggleCategory(categoryIndex)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="category-info">
                  <i 
                    className={category.icon} 
                    style={{ color: category.color }}
                  ></i>
                  <h3 className="category-title">{category.category}</h3>
                  <span className="cert-count">
                    {category.certificates.length} certificates
                  </span>
                </div>
                <motion.i
                  className="fas fa-chevron-down category-toggle"
                  animate={{ 
                    rotate: expandedCategory === categoryIndex ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </motion.div>

              <motion.div
                className="category-content"
                initial={false}
                animate={{
                  height: expandedCategory === categoryIndex ? "auto" : 0,
                  opacity: expandedCategory === categoryIndex ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="certificates-grid">
                  {category.certificates.map((cert, certIndex) => (
                    <motion.div
                      key={cert.title}
                      className="certificate-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        expandedCategory === categoryIndex 
                          ? { opacity: 1, scale: 1 } 
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{ 
                        delay: certIndex * 0.1,
                        duration: 0.3 
                      }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="cert-image">
                        <img src={cert.image} alt={cert.title} />
                        <div className="cert-overlay">
                          <motion.div
                            className="view-cert-btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <i className="fas fa-eye"></i>
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="cert-details">
                        <h4 className="cert-title">{cert.title}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <span className="cert-year">{cert.year}</span>
                        
                        <div className="cert-skills">
                          {cert.skills.map((skill, skillIndex) => (
                            <span key={skill} className="skill-badge">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <motion.a
            href="#certifications"
            className="view-all-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Certificates</span>
            <i className="fas fa-arrow-right"></i>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
