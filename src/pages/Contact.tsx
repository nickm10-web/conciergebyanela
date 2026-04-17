import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitForm } from '../lib/submitForm'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    howHeard: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.email !== formData.confirmEmail) {
      setError('Email addresses do not match.')
      return
    }
    setError(null)
    setLoading(true)
    try {
      await submitForm(
        {
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          Email: formData.email,
          Phone: formData.phone,
          'How They Heard': formData.howHeard,
        },
        'New contact form inquiry — Concierge by Anela'
      )
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError(
        'Something went wrong sending your message. Please email us directly at anela@conciergebyanela.com.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[450px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/contact-hero.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)' }} />
        </div>
        <div className="container-main relative z-10 pb-8 md:pb-16 w-full">
          <span className="text-xs tracking-[0.4em] uppercase text-white/60 block mb-4">
            Contact
          </span>
          <h1 className="font-serif text-white font-light" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
            Get in <em className="italic">Touch</em>
          </h1>
        </div>
      </section>

      <section style={{ paddingTop: '6rem', paddingBottom: '8rem', backgroundColor: '#FAF8F5' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
            {/* Contact Info */}
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4B6B77', display: 'block', marginBottom: '1.5rem' }}>
                Let's Connect
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#1A1A1A', fontWeight: 300, lineHeight: 1.2, marginBottom: '2rem' }}>
                We'd love to hear from you
              </h2>
              <p style={{ color: '#3A3A3A', lineHeight: 1.6, marginBottom: '3rem' }}>
                Whether you have a question about our services, want to discuss
                a trip idea, or are ready to start planning, we're here to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.5)', marginBottom: '0.5rem' }}>Email</h4>
                  <a href="mailto:anela@conciergebyanela.com" style={{ fontSize: '1.125rem', color: '#4B6B77', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2C4A56'} onMouseLeave={(e) => e.currentTarget.style.color = '#4B6B77'}>
                    anela@conciergebyanela.com
                  </a>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.5)', marginBottom: '0.5rem' }}>Phone</h4>
                  <a href="tel:8059523200" style={{ fontSize: '1.125rem', color: '#4B6B77', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2C4A56'} onMouseLeave={(e) => e.currentTarget.style.color = '#4B6B77'}>
                    805.952.3200
                  </a>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.5)', marginBottom: '0.5rem' }}>Instagram</h4>
                  <a
                    href="https://instagram.com/conciergebyanela"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.125rem', color: '#4B6B77', textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2C4A56'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4B6B77'}
                  >
                    @conciergebyanela
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#F5F0E8', borderLeft: '2px solid #C4B198' }}>
                <p className="font-serif" style={{ fontSize: '1.25rem', color: '#1A1A1A', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Looking to book a full consultation?
                </p>
                <Link
                  to="/book"
                  className="link-underline"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4B6B77', textDecoration: 'none', display: 'inline-block', paddingBottom: '0.25rem' }}
                >
                  Book Your Complimentary Consultation Call
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem', backgroundColor: '#F5F0E8' }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.875rem', color: '#1A1A1A', marginBottom: '1rem' }}>Thank You</h3>
                    <p style={{ color: '#3A3A3A' }}>
                      We've received your message and will be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', display: 'block', marginBottom: '0.5rem' }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0', paddingBottom: '0.75rem', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(26,26,26,0.2)', color: '#1A1A1A', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }}
                        onFocus={(e) => e.target.style.borderColor = '#4B6B77'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,26,0.2)'}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', display: 'block', marginBottom: '0.5rem' }}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0', paddingBottom: '0.75rem', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(26,26,26,0.2)', color: '#1A1A1A', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }}
                        onFocus={(e) => e.target.style.borderColor = '#4B6B77'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,26,0.2)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', display: 'block', marginBottom: '0.5rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0', paddingBottom: '0.75rem', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(26,26,26,0.2)', color: '#1A1A1A', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#4B6B77'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,26,0.2)'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', display: 'block', marginBottom: '0.5rem' }}>
                      Confirm Email *
                    </label>
                    <input
                      type="email"
                      name="confirmEmail"
                      required
                      value={formData.confirmEmail}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0', paddingBottom: '0.75rem', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(26,26,26,0.2)', color: '#1A1A1A', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#4B6B77'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,26,0.2)'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', display: 'block', marginBottom: '0.5rem' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0', paddingBottom: '0.75rem', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(26,26,26,0.2)', color: '#1A1A1A', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#4B6B77'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(26,26,26,0.2)'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,26,26,0.6)', display: 'block', marginBottom: '0.5rem' }}>
                      How Did You Hear About Us?
                    </label>
                    <select
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0', paddingBottom: '0.75rem', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(26,26,26,0.2)', color: '#1A1A1A', fontSize: '1rem', transition: 'border-color 0.3s ease', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#4B6B77'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26,26,26,0.2)'}
                    >
                      <option value="">Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="referral">Referral from a friend</option>
                      <option value="google">Google search</option>
                      <option value="event">Event or partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {error && (
                    <p style={{ color: '#B0453A', fontSize: '0.875rem', lineHeight: 1.5, marginTop: '0.5rem' }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ marginTop: '2rem', padding: '1rem 3rem', backgroundColor: loading ? '#8BA3AC' : '#4B6B77', color: 'white', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background-color 0.3s ease', width: 'fit-content' }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#2C4A56' }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#4B6B77' }}
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
