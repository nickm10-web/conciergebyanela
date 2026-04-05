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
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[450px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/services-hero.png"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)' }} />
        </div>
        <div className="container-main relative z-10 pb-8 md:pb-16 w-full">
          <span className="text-xs tracking-[0.4em] uppercase text-white/60 block mb-4">
            Services
          </span>
          <h1 className="font-serif text-white font-light" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
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
            subtitle="Our services are thoughtfully designed for individuals who value discretion, efficiency, and truly elevated experiences. Every journey is fully tailored to your unique preferences, ensuring seamless execution from the first flight to the final sunset. We help you curate unforgettable moments. Whether planning an intimate dinner for two or a grand celebration in an extraordinary setting, we bring your vision to life with precision and care. From restorative spa retreats and wellness escapes to personal lifestyle requests, every detail is handled with the utmost attention and confidentiality. For those who seek a trusted partner in luxury living and travel, we remain dedicated, discreet, and always one step ahead — anticipating your needs before you even have to ask."
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
                <h3 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#1A1A1A', fontWeight: 300, marginBottom: '2rem' }}>
                  {cat.title}
                </h3>
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
