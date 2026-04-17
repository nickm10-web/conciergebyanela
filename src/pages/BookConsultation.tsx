import { useState } from 'react'
import { submitForm } from '../lib/submitForm'

const serviceOptions = [
  'Custom travel planning',
  'Luxury villa & hotel sourcing',
  'VIP dining & experiences',
  'Event planning',
  'Lifestyle concierge requests',
  'Corporate or athlete travel',
  'Ongoing concierge membership',
  "Not sure yet, but I'd love guidance",
]

const experienceTypes = [
  'Relaxation / beach escape',
  'Adventure & activities',
  'Food & wine experiences',
  'Cultural exploration',
  'Celebration or special occasion',
  'Nightlife & entertainment',
  'Wellness & spa',
  'Shopping',
  'Business travel',
  'Family travel',
]

const partySizes = ['1–2', '3–5', '6–10', '10+']

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: '',
    services: [] as string[],
    location: '',
    travelDates: '',
    partySize: '',
    experienceTypes: [] as string[],
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckbox = (field: 'services' | 'experienceTypes', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await submitForm(
        {
          'Full Name': formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          'Preferred Contact Method': formData.preferredContact,
          'Services of Interest': formData.services.join(', '),
          'Location & Destination': formData.location,
          'Travel Dates': formData.travelDates,
          'Party Size': formData.partySize,
          'Experience Types': formData.experienceTypes.join(', '),
        },
        'New consultation booking request — Concierge by Anela'
      )
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError(
        'Something went wrong sending your request. Please email us directly at anela@conciergebyanela.com.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <>
        <div style={{ paddingTop: '5rem' }} />
        <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF8F5' }}>
          <div style={{ textAlign: 'center', padding: '0 1.5rem', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: '#4B6B77', display: 'block', marginBottom: '1.5rem' }}>
              Thank You
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: '#1A1A1A', marginBottom: '1.5rem' }}>
              We've Received Your Inquiry
            </h2>
            <p className="leading-relaxed" style={{ color: '#3A3A3A', marginBottom: '1rem' }}>
              Once your inquiry is received, you will hear from me within 24–48 hours.
              I look forward to assisting you!
            </p>
            <div style={{ width: '4rem', height: '1px', backgroundColor: '#C4B198', margin: '2rem auto 0' }} />
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '50vh', minHeight: '400px', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/book-hero.png"
            alt="Book your consultation"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', paddingBottom: '4rem', width: '100%' }}>
          <span className="text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '1rem' }}>
            Begin Your Journey
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight" style={{ color: 'white' }}>
            Book Your Complimentary
            <br />
            <em className="italic">Consultation Call</em>
          </h1>
        </div>
      </section>

      {/* Form */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#FAF8F5' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="leading-relaxed" style={{ color: '#3A3A3A', maxWidth: '28rem', margin: '0 auto' }}>
              Tell us about your dream experience and we'll take it from there.
              Every detail helps us craft something truly extraordinary for you.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Basic Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="font-serif text-2xl" style={{ color: '#1A1A1A', borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '1rem' }}>
                Your Information
              </h3>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(26,26,26,0.2)',
                    color: '#1A1A1A',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#4B6B77'}
                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(26,26,26,0.2)'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(26,26,26,0.2)',
                      color: '#1A1A1A',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#4B6B77'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(26,26,26,0.2)'}
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(26,26,26,0.2)',
                      color: '#1A1A1A',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#4B6B77'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(26,26,26,0.2)'}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                  Preferred Method of Communication *
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem' }}>
                  {['Phone', 'Email', 'Text message'].map((method) => (
                    <label
                      key={method}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1.25rem',
                        border: `1px solid ${formData.preferredContact === method ? '#4B6B77' : 'rgba(26,26,26,0.15)'}`,
                        backgroundColor: formData.preferredContact === method ? 'rgba(75,107,119,0.05)' : 'transparent',
                        color: formData.preferredContact === method ? '#4B6B77' : '#3A3A3A',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (formData.preferredContact !== method) {
                          e.currentTarget.style.borderColor = 'rgba(26,26,26,0.3)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (formData.preferredContact !== method) {
                          e.currentTarget.style.borderColor = 'rgba(26,26,26,0.15)'
                        }
                      }}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                      />
                      <div style={{
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '50%',
                        border: `2px solid ${formData.preferredContact === method ? '#4B6B77' : 'rgba(26,26,26,0.3)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {formData.preferredContact === method && (
                          <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#4B6B77' }} />
                        )}
                      </div>
                      <span style={{ fontSize: '0.875rem' }}>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="font-serif text-2xl" style={{ color: '#1A1A1A', borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '1rem' }}>
                Services of Interest
              </h3>
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: 'rgba(26,26,26,0.6)' }}>
                Select all that apply
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1.25rem',
                      border: `1px solid ${formData.services.includes(service) ? '#4B6B77' : 'rgba(26,26,26,0.15)'}`,
                      backgroundColor: formData.services.includes(service) ? 'rgba(75,107,119,0.05)' : 'transparent',
                      color: formData.services.includes(service) ? '#4B6B77' : '#3A3A3A',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!formData.services.includes(service)) {
                        e.currentTarget.style.borderColor = 'rgba(26,26,26,0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!formData.services.includes(service)) {
                        e.currentTarget.style.borderColor = 'rgba(26,26,26,0.15)'
                      }
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckbox('services', service)}
                      style={{ display: 'none' }}
                    />
                    <div style={{
                      width: '1rem',
                      height: '1rem',
                      border: `2px solid ${formData.services.includes(service) ? '#4B6B77' : 'rgba(26,26,26,0.3)'}`,
                      backgroundColor: formData.services.includes(service) ? '#4B6B77' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {formData.services.includes(service) && (
                        <svg style={{ width: '0.625rem', height: '0.625rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span style={{ fontSize: '0.875rem' }}>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Trip Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="font-serif text-2xl" style={{ color: '#1A1A1A', borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '1rem' }}>
                Trip Details
              </h3>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                  Where are you located and where would you like to go?
                </label>
                <textarea
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(26,26,26,0.2)',
                    color: '#1A1A1A',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderBottomColor = '#4B6B77'}
                  onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(26,26,26,0.2)'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                    When are you looking to travel?
                  </label>
                  <input
                    type="text"
                    name="travelDates"
                    placeholder="e.g. June 2026, flexible dates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(26,26,26,0.2)',
                      color: '#1A1A1A',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderBottomColor = '#4B6B77'}
                    onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(26,26,26,0.2)'}
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase block" style={{ color: 'rgba(26,26,26,0.6)', marginBottom: '0.5rem' }}>
                    How many people are traveling?
                  </label>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                    {partySizes.map((size) => (
                      <label
                        key={size}
                        style={{
                          flex: 1,
                          textAlign: 'center',
                          padding: '0.75rem 0.75rem',
                          border: `1px solid ${formData.partySize === size ? '#4B6B77' : 'rgba(26,26,26,0.15)'}`,
                          backgroundColor: formData.partySize === size ? 'rgba(75,107,119,0.05)' : 'transparent',
                          color: formData.partySize === size ? '#4B6B77' : '#3A3A3A',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontSize: '0.875rem'
                        }}
                        onMouseEnter={(e) => {
                          if (formData.partySize !== size) {
                            e.currentTarget.style.borderColor = 'rgba(26,26,26,0.3)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (formData.partySize !== size) {
                            e.currentTarget.style.borderColor = 'rgba(26,26,26,0.15)'
                          }
                        }}
                      >
                        <input
                          type="radio"
                          name="partySize"
                          value={size}
                          checked={formData.partySize === size}
                          onChange={handleChange}
                          style={{ display: 'none' }}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Type */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 className="font-serif text-2xl" style={{ color: '#1A1A1A', borderBottom: '1px solid rgba(26,26,26,0.1)', paddingBottom: '1rem' }}>
                Type of Experience
              </h3>
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: 'rgba(26,26,26,0.6)' }}>
                Select all that apply
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {experienceTypes.map((exp) => (
                  <label
                    key={exp}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1.25rem',
                      border: `1px solid ${formData.experienceTypes.includes(exp) ? '#4B6B77' : 'rgba(26,26,26,0.15)'}`,
                      backgroundColor: formData.experienceTypes.includes(exp) ? 'rgba(75,107,119,0.05)' : 'transparent',
                      color: formData.experienceTypes.includes(exp) ? '#4B6B77' : '#3A3A3A',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!formData.experienceTypes.includes(exp)) {
                        e.currentTarget.style.borderColor = 'rgba(26,26,26,0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!formData.experienceTypes.includes(exp)) {
                        e.currentTarget.style.borderColor = 'rgba(26,26,26,0.15)'
                      }
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.experienceTypes.includes(exp)}
                      onChange={() => handleCheckbox('experienceTypes', exp)}
                      style={{ display: 'none' }}
                    />
                    <div style={{
                      width: '1rem',
                      height: '1rem',
                      border: `2px solid ${formData.experienceTypes.includes(exp) ? '#4B6B77' : 'rgba(26,26,26,0.3)'}`,
                      backgroundColor: formData.experienceTypes.includes(exp) ? '#4B6B77' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {formData.experienceTypes.includes(exp) && (
                        <svg style={{ width: '0.625rem', height: '0.625rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span style={{ fontSize: '0.875rem' }}>{exp}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div style={{ paddingTop: '2rem', textAlign: 'center' }}>
              {error && (
                <p style={{ color: '#B0453A', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '1rem 4rem',
                  backgroundColor: loading ? '#8BA3AC' : '#4B6B77',
                  color: 'white',
                  fontSize: '0.75rem',
                  letterSpacing: '0.25em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#2C4A56' }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#4B6B77' }}
              >
                {loading ? 'Sending…' : 'Book Now'}
              </button>
              <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'rgba(58,58,58,0.6)' }}>
                Once your inquiry is received, you will hear from me within 24–48 hours.
                I look forward to assisting you!
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
