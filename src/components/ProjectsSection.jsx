import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsSection = () => {
  return (
    <section className="py-5 section-fade" id="projects">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Projects</h2>
        <p className="text-center">A showcase of my featured projects and work.</p>
        
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <Link to="/project/personal-portfolio" className="text-decoration-none text-reset">
              <div className="card h-100 shadow-sm skill-card-hover">
                <div className="card-body">
                  <h5 className="card-title">Personal Portfolio Website</h5>
                  <p className="card-text">
                    This is the website you are currently viewing! Built with React, it features responsive design, 
                    modern animations, a typing greeting, and interactive sections. The site showcases my skills, 
                    projects, certifications, and contact information.
                  </p>
                  <ul className="list-unstyled mb-2">
                    <li><strong>Tech Stack:</strong> React, CSS, Bootstrap, Vite</li>
                    <li><strong>Features:</strong> Responsive layout, animated effects, dynamic navigation, and a modern UI.</li>
                  </ul>
                  <span className="badge bg-primary me-1">React</span>
                  <span className="badge bg-secondary me-1">Bootstrap</span>
                  <span className="badge bg-info text-dark">Responsive</span>
                </div>
              </div>
            </Link>
          </div>
          {/* Add more project cards here as needed */}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
