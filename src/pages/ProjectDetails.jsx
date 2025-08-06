import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ProjectDetails = () => {
  const { id } = useParams()
  
  // Project data - in a real app, this would come from an API or database
  const projects = {
    'personal-portfolio': {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and modern web technologies.',
      longDescription: `This portfolio website represents my journey into modern web development using React. 
      It features a clean, responsive design with smooth animations, dark mode support, and a professional 
      layout that showcases my skills, projects, and achievements.`,
      technologies: ['React', 'Vite', 'Bootstrap', 'CSS3', 'JavaScript ES6+', 'React Router', 'AOS Animations'],
      features: [
        'Fully responsive design that works on all devices',
        'Dark/Light mode toggle with localStorage persistence',
        'Smooth scrolling navigation with active section highlighting',
        'Typing animation effect in the hero section',
        'AOS (Animate On Scroll) animations throughout',
        'Professional certifications showcase',
        'SEO optimized with proper meta tags'
      ],
      challenges: [
        'Converting from vanilla HTML/CSS/JS to React components',
        'Implementing smooth scrolling navigation in a SPA',
        'Maintaining design consistency while improving performance',
        'Creating reusable components for better maintainability'
      ],
      image: '/assets/project-portfolio-preview.jpg',
      liveUrl: '/',
      githubUrl: 'https://github.com/pauljayakar30/portfolio',
      status: 'Completed'
    }
  }

  const project = projects[id]

  if (!project) {
    return (
      <div style={{paddingTop: '90px', minHeight: '60vh'}} className="d-flex align-items-center">
        <div className="container text-center">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Go Back Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{paddingTop: '90px'}}>
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/#projects">Projects</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {project.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 mb-3">{project.title}</h1>
                <p className="lead mb-4">{project.description}</p>
                <div className="d-flex gap-3 mb-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                      View Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="btn btn-outline-primary btn-lg" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  )}
                </div>
                <div>
                  <span className={`badge bg-${project.status === 'Completed' ? 'success' : 'warning'} fs-6`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="img-fluid rounded shadow"
                  />
                )}
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-lg-8">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h3 className="card-title">About This Project</h3>
                    <p className="card-text">{project.longDescription}</p>
                  </div>
                </div>

                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Key Features</h3>
                    <ul className="list-unstyled">
                      {project.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Challenges & Solutions</h3>
                    <ul className="list-unstyled">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-lightbulb text-warning me-2"></i>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Technologies Used</h3>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary fs-6 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center">
                <Link to="/#projects" className="btn btn-outline-primary btn-lg">
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDetails
