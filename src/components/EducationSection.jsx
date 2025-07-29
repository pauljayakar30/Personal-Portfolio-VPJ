import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const EducationSection = () => {
  const educationData = [
    {
      institution: "Mohan Babu University",
      degree: "B.Tech, Artificial Intelligence & Machine Learning",
      duration: "2022 - 2026",
      website: "https://www.mbu.asia/",
      highlights: [
        "Core Programming & Software Engineering",
        "AI & Machine Learning Fundamentals",
        "Data Science & Analytics",
        "Web Technologies"
      ],
      badgeColor: "primary"
    },
    {
      institution: "Sainik School Kalikiri",
      degree: "Higher Secondary Education",
      duration: "2018 - 2022",
      website: "https://sskal.ac.in/",
      highlights: [
        "Leadership & Discipline",
        "Teamwork & Sportsmanship"
      ],
      badgeColor: "secondary"
    }
  ]

  return (
    <section className="py-5 section-fade" id="education">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Education</h2>
        <p className="text-center">My academic background and achievements.</p>
        
        <div className="row justify-content-center">
          {educationData.map((edu, index) => (
            <div key={index} className="col-md-6 col-lg-5 mb-4">
              <div className="card h-100 shadow-sm skill-card-hover">
                <div className="card-body">
                  <h5 className="card-title mb-1">
                    <a 
                      href={edu.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{textDecoration: 'none', color: 'inherit'}}
                    >
                      {edu.institution}
                      <FaExternalLinkAlt className="ms-1" style={{fontSize: '0.85em'}} />
                    </a>
                  </h5>
                  <div className="text-muted mb-2">{edu.degree}</div>
                  <div className="mb-2">
                    <span className={`badge bg-${edu.badgeColor}`}>{edu.duration}</span>
                  </div>
                  <ul className="mb-0 ps-3">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
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

export default EducationSection
