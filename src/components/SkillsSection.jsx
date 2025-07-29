import React from 'react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Web Technologies",
      skills: [
        "Python", "Java", "C", "HTML", "CSS", "JavaScript", "Bootstrap", "React"
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Artificial Intelligence", "Machine Learning", "Deep Learning (basics)", 
        "Predictive Analytics", "AI for Robotics", "Linear Algebra", "Calculus", 
        "Discrete Mathematics", "Numerical Methods"
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        "Data Analysis with Python", "Statistics & Probability", "Data Visualization",
        "Database Management", "NumPy", "Pandas", "Matplotlib"
      ]
    }
  ]

  return (
    <section className="py-5 section-fade" id="skills">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Skills & AIML Coursework</h2>
        <p className="text-center">Core skills and subjects relevant to Artificial Intelligence & Machine Learning.</p>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
          {skillCategories.map((category, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm skill-card-hover h-100">
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <ul className="mb-0 ps-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
