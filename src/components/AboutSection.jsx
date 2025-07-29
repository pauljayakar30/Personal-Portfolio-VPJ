import React from 'react'

const AboutSection = () => {
  return (
    <section className="intro py-5 section-fade" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="card h-100 shadow-sm skill-card-hover p-4 mb-4">
              <h2 className="section-title mb-4">Hello, I'm Paul Jayakar</h2>
              <p className="lead mb-4">
                I'm an enthusiastic AIML student at Mohan Babu University in Tirupati. I'm passionate about the intersection of technology and innovation, particularly in Artificial Intelligence and Machine Learning.
              </p>
              <p className="mb-4">
                My foundation was built at Sainik School Kalikiri, where I developed strong leadership skills, discipline, and teamwork abilities. This unique environment shaped my character and instilled values of perseverance and excellence that continue to guide my academic and personal growth.
              </p>
              <p className="mb-4">
                My journey in tech is driven by curiosity and a desire to build solutions that make a meaningful impact. I enjoy exploring new technologies, solving complex problems, and continuously learning to stay ahead in this rapidly evolving field.
              </p>
              <p className="mb-0">
                When I'm not coding, you'll find me on the basketball court, exploring nature, reading about emerging technologies, or experimenting with new development frameworks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row text-center mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="col-md-4 mb-4">
            <div className="stat-card skill-card-hover card h-100">
              <div className="number">2022</div>
              <div className="label">Started Journey</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="stat-card skill-card-hover card h-100">
              <div className="number">8+</div>
              <div className="label">Skills & Technologies</div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="stat-card skill-card-hover card h-100">
              <div className="number">∞</div>
              <div className="label">Learning Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
