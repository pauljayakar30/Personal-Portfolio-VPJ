import React from 'react'

const Certifications = () => {
  return (
    <div style={{paddingTop: '90px'}}>
      <main>
        <section className="py-5 section-fade">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <h1 className="section-title">All Certifications & Badges</h1>
                <p className="lead">A comprehensive view of my professional certifications and achievements</p>
              </div>
            </div>
            
            {/* Coursera Section */}
            <div className="row mb-5" id="coursera">
              <div className="col-12">
                <h2 className="h3 mb-4">
                  <img src="/assets/coursera-icon.svg" alt="Coursera" style={{width: '30px', marginRight: '10px'}} />
                  Coursera Certificates
                </h2>
                <div className="row">
                  {/* Add your Coursera certificates here */}
                  {Array.from({length: 10}, (_, i) => (
                    <div key={i} className="col-md-4 col-lg-3 mb-4">
                      <div className="card h-100 shadow-sm skill-card-hover certification-card">
                        <div className="card-body text-center p-3">
                          <img 
                            src={`/assets/certificates/coursera/cert${i+1}.svg`}
                            alt={`Coursera Certificate ${i+1}`}
                            style={{maxWidth: '100%', height: '120px', objectFit: 'contain'}}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Cisco Section */}
            <div className="row mb-5" id="cisco">
              <div className="col-12">
                <h2 className="h3 mb-4">
                  <img src="/assets/cisco-icon.svg" alt="Cisco" style={{width: '30px', marginRight: '10px'}} />
                  Cisco NetAcad Certificates
                </h2>
                <div className="row">
                  {Array.from({length: 3}, (_, i) => (
                    <div key={i} className="col-md-4 col-lg-3 mb-4">
                      <div className="card h-100 shadow-sm skill-card-hover certification-card">
                        <div className="card-body text-center p-3">
                          <img 
                            src={`/assets/certificates/cisco/cisco${i+1}.svg`}
                            alt={`Cisco Certificate ${i+1}`}
                            style={{maxWidth: '100%', height: '120px', objectFit: 'contain'}}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Google Cloud Skills Section */}
            <div className="row mb-5" id="gcp">
              <div className="col-12">
                <h2 className="h3 mb-4">
                  <img src="/assets/google-cloud-icon.svg" alt="Google Cloud" style={{width: '30px', marginRight: '10px'}} />
                  Google Cloud Skills Boost
                </h2>
                <div className="row">
                  {Array.from({length: 3}, (_, i) => (
                    <div key={i} className="col-md-4 col-lg-3 mb-4">
                      <div className="card h-100 shadow-sm skill-card-hover certification-card">
                        <div className="card-body text-center p-3">
                          <img 
                            src={`/assets/certificates/google_c_skills/gcskills${i+1}.svg`}
                            alt={`Google Cloud Skills Certificate ${i+1}`}
                            style={{maxWidth: '100%', height: '120px', objectFit: 'contain'}}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Certifications
