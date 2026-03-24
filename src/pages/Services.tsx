import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const serviceCategories = [
  {
    title: 'Travel & Logistics',
    services: [
      'Custom itinerary design',
      'Luxury hotel & private villa sourcing',
      'Flight support & logistics',
      'Private transportation coordination',
      'Yacht charters & exclusive excursions',
    ],
    image: '/service-travel-jet.png',
    description: 'From the first flight to the final sunset, every detail of your journey is meticulously planned and flawlessly executed.',
  },
  {
    title: 'Dining & Culinary',
    services: [
      'Restaurant & experience reservations',
      'VIP dining reservations',
      'Food & wine experiences',
      'Private chef arrangements',
    ],
    image: '/service-dining-alt.png',
    description: 'Access to the world\'s most coveted tables, exclusive tastings, and culinary journeys that awaken the senses.',
  },
  {
    title: 'Events & Celebrations',
    services: [
      'Special occasion planning',
      'Event & celebration planning',
      'Corporate or athlete travel',
      'Private gatherings',
    ],
    image: '/service-events-alt.png',
    description: 'Whether an intimate dinner for two or a grand celebration, we bring your vision to life in extraordinary settings.',
  },
  {
    title: 'Lifestyle & Wellness',
    services: [
      'Wellness bookings',
      'Personal requests & sourcing',
      'Last-minute arrangements',
      'On-trip messaging support',
    ],
    image: '/service-lifestyle.png',
    description: 'Spa retreats, wellness escapes, and personal lifestyle requests handled with care and discretion.',
  },
  {
    title: 'Ongoing Concierge',
    services: [
      'Ongoing concierge memberships',
      'Priority booking access',
      'Year-round travel management',
      'Dedicated lifestyle support',
    ],
    image: '/service-ongoing.png',
    description: 'For those who desire a trusted partner in luxury living — always available, always anticipating your needs.',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '450px', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/services-hero.png"
            alt="Services"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', paddingBottom: '4rem', width: '100%' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '1rem' }}>
            Services
          </span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', fontWeight: 300 }}>
            What We <em className="italic">Offer</em>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ paddingTop: 'clamp(3rem, 10vw, 6rem)', paddingBottom: 'clamp(3rem, 10vw, 6rem)', backgroundColor: '#FAF8F5' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <SectionHeading
            label="Our Services"
            title="Stress-Free, Fully Tailored"
            subtitle="Our services are designed for individuals who value discretion, efficiency, and elevated experiences. Every experience is fully tailored to your needs."
          />
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((cat, i) => (
        <section
          key={cat.title}
          style={{ paddingTop: 'clamp(3rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 8vw, 7rem)', backgroundColor: i % 2 === 0 ? '#F5F0E8' : '#FAF8F5' }}
        >
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
              <div className="img-zoom" style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{ width: '100%', height: 'clamp(300px, 60vw, 500px)', objectFit: 'cover' }}
                />
              </div>
              <div style={{ order: i % 2 !== 0 ? 1 : 2 }}>
                <h3 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#1A1A1A', fontWeight: 300, marginBottom: '1rem' }}>
                  {cat.title}
                </h3>
                <p style={{ color: '#3A3A3A', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {cat.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cat.services.map((service) => (
                    <div
                      key={service}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#3A3A3A' }}
                    >
                      <span style={{ width: '1.5rem', height: '1px', backgroundColor: '#A89272', flexShrink: 0 }} />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ paddingTop: 'clamp(3rem, 10vw, 6rem)', paddingBottom: 'clamp(3rem, 10vw, 6rem)', backgroundColor: '#2C4A56', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '42rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 300, marginBottom: '1.5rem' }}>
            Let's Create Your <em className="italic">Experience</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Every journey begins with a conversation. Book your complimentary
            consultation and let's start designing something extraordinary.
          </p>
          <Link
            to="/book"
            style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'white', color: '#1A1A1A', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F0E8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            Book Your Complimentary Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
