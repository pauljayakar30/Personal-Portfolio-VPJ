import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('')
    setIsSubmitting(true)

    // Frontend validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('All fields are required.')
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch('https://paul-jayakar-portfolio-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await res.json()

      if (result.success) {
        setFormStatus('Thank you for your submission!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormStatus(result.error || 'There was an error. Try again.')
      }
    } catch (err) {
      setFormStatus('Could not reach the server. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "pauljayakar30@gmail.com",
      link: "mailto:pauljayakar30@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone", 
      value: "+91 6303599139",
      link: "tel:+916303599139"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Tirupati, Andhra Pradesh, India",
      link: null
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      value: "pauljayakar30",
      link: "https://www.linkedin.com/in/pauljayakar30/"
    },
    {
      icon: <FaDiscord />,
      label: "Discord",
      value: "pauljayakar30",
      link: "https://discordapp.com/users/746587369360195705"
    }
  ]

  return (
    <section className="py-5 section-fade" id="contact">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Contact</h2>
        
        <div className="row justify-content-center align-items-stretch">
          <div className="col-lg-5 mb-4 mb-lg-0 d-flex">
            <div className="contact-card card shadow-sm flex-fill p-4 d-flex flex-column justify-content-center align-items-start text-start">
              <h3 className="mb-3" style={{fontWeight: '700'}}>Let's Connect!</h3>
              <p className="mb-4" style={{fontSize: '1.08rem'}}>
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation.
              </p>
              
              <div className="contact-methods w-100">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method mb-3 d-flex align-items-center">
                    <span className="contact-icon me-3">{method.icon}</span>
                    <div>
                      <div className="contact-label">{method.label}</div>
                      {method.link ? (
                        <a 
                          href={method.link} 
                          className="contact-link"
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="contact-link">{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 d-flex">
            <div className="card shadow-sm contact-form-card flex-fill p-4">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-control" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-control" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-3 mt-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-control" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Drop a Note</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="form-control" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Reach me out, share your thoughts, or let me know how you feel about the website!"
                    required
                  />
                </div>
                
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {formStatus && (
                  <div 
                    className="mt-3" 
                    style={{
                      color: formStatus.includes('Thank you') ? 'green' : 'red'
                    }}
                  >
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
