import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Programming & Web Technologies",
      skills: ["Python", "JavaScript", "HTML/CSS", "React", "Node.js", "Git"]
    },
    {
      title: "AI/ML & Data Science",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"]
    },
    {
      title: "Mathematics & Statistics",
      skills: ["Linear Algebra", "Calculus", "Statistics", "Probability", "Data Analysis"]
    },
    {
      title: "Tools & Platforms",
      skills: ["VS Code", "Jupyter", "Google Colab", "GitHub", "Bootstrap", "Figma"]
    },
    {
      title: "Database & Cloud",
      skills: ["SQL", "MongoDB", "Firebase", "Google Cloud", "AWS Basics"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-content">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="skills-header"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & AIML Coursework
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Core skills and subjects relevant to Artificial Intelligence & Machine Learning
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="skills-grid"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="skill-card"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
