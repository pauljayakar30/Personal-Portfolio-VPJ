import React from 'react'
import { Link } from 'react-router-dom'

const CertificationsSection = () => {
  const certificationPreviews = [
    {
      name: "Coursera",
      image: "/assets/certificates/coursera/cert1.svg",
      link: "/certifications#coursera"
    },
    {
      name: "Cisco NetAcad",
      image: "/assets/certificates/cisco/cisco1.svg", 
      link: "/certifications#cisco"
    },
    {
      name: "Google Cloud Skills",
      image: "/assets/certificates/google_c_skills/gcskills1.svg",
      link: "/certifications#gcp"
    }
  ]

  const profileLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pauljayakar30/",
      icon: "/assets/linkedin-icon.svg",
      className: "linkedin-glow"
    },
    {
      name: "Salesforce",
      url: "https://www.salesforce.com/trailblazer/pauljayakar30",
      icon: "/assets/salesforce-icon.svg",
      className: "salesforce-glow"
    },
    {
      name: "Credly",
      url: "https://www.credly.com/users/pauljayakar30",
      icon: "/assets/credly-icon.svg",
      className: "credly-glow"
    },
    {
      name: "Google Cloud Skills",
      url: "https://www.cloudskillsboost.google/public_profiles/222a8a1a-88af-4364-9e73-09c700026254",
      icon: "/assets/google-cloud-icon.svg",
      className: "gcp-glow"
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org/learner/pauljayakar30",
      icon: "/assets/coursera-icon.svg",
      className: "coursera-glow"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Paul_Jayakar/",
      icon: "/assets/leetcode-icon.svg",
      className: "leetcode-glow"
    }
  ]

  const bounceOnce = (e) => {
    e.currentTarget.classList.remove('bounce-animate')
    void e.currentTarget.offsetWidth
    e.currentTarget.classList.add('bounce-animate')
  }

  return (
    <section className="py-5 section-fade" id="certifications">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Certifications & Badges</h2>
        
        <div className="certifications-grid row justify-content-center">
          {certificationPreviews.map((cert, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Link to={cert.link} className="text-decoration-none">
                <div className="card h-100 shadow-sm skill-card-hover certification-card p-4 text-center" style={{cursor: 'pointer'}}>
                  <img 
                    src={cert.image} 
                    alt={`${cert.name} Certificate`} 
                    style={{maxWidth: '120px', maxHeight: '120px', display: 'block', margin: '0 auto 1rem'}}
                  />
                  <div className="text-muted mb-1" style={{fontSize: '0.98rem'}}>{cert.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/certifications" className="btn btn-outline-primary btn-lg">
            View All
          </Link>
        </div>
        
        <div className="text-center mt-5">
          <h4 className="mb-3">My Professional Profiles</h4>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            {profileLinks.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`profile-icon-link profile-glow ${profile.className}`}
                aria-label={profile.name}
                onClick={bounceOnce}
              >
                <span className="profile-icon">
                  <img 
                    src={profile.icon} 
                    alt={profile.name} 
                    className="profile-svg-icon"
                  />
                </span>
                <span className="profile-label">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
