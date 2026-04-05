import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    title: 'Travel Planning',
    description: 'Custom itineraries, luxury hotels, private villas, and seamless flight logistics crafted around your vision.',
    image: '/service-travel.png',
  },
  {
    title: 'Dining & Experiences',
    description: 'VIP restaurant reservations, exclusive culinary experiences, and access to the world\'s most coveted tables.',
    image: '/service-dining.png',
  },
  {
    title: 'Events & Celebrations',
    description: 'From intimate gatherings to grand celebrations, we design unforgettable moments in extraordinary settings.',
    image: '/service-events.png',
  },
]


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 className="font-serif animate-fade-in-up-delay-1" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', color: 'white', fontWeight: 300, lineHeight: 1.1, letterSpacing: '0.02em' }}>
            Effortless.
            <br />
            <em style={{ fontStyle: 'italic' }}>Elevated.</em>
            <br />
            Everywhere.
          </h1>
          <div className="animate-fade-in-up-delay-3" style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Link
              to="/book"
              style={{
                padding: '0.875rem 3rem',
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#1A1A1A',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                backdropFilter: 'blur(4px)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = '#1A1A1A'
                e.currentTarget.style.color = 'white'
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)'
                e.currentTarget.style.color = '#1A1A1A'
              }}
            >
              Book Your Consultation
            </Link>
            <Link
              to="/services"
              style={{
                padding: '0.875rem 3rem',
                border: '1px solid rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,1)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
          <div className="animate-pulse" style={{ width: '1px', height: '2rem', backgroundColor: 'rgba(255,255,255,0.3)' }} />
        </div>
      </section>

      {/* About Teaser */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#FAF8F5' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="img-zoom" style={{ borderRadius: '2px', overflow: 'hidden' }}>
              <img
                src="/about-teaser.png"
                alt="Luxury villa terrace with ocean view"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4B6B77', display: 'block', marginBottom: '1rem' }}>
                About
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', fontWeight: 300, lineHeight: 1.2 }}>
                Your journey,{' '}
                <em style={{ fontStyle: 'italic' }}>personally curated</em>
              </h2>
              <p style={{ marginTop: '1.5rem', color: '#3A3A3A', lineHeight: 1.7 }}>
                Our mission is to coordinate personalized, seamless, luxury travel
                experiences with concierge-level service, giving clients effortless,
                memorable journeys anywhere in the world.
              </p>
              <Link
                to="/about"
                className="link-underline"
                style={{ display: 'inline-block', marginTop: '2rem', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4B6B77', textDecoration: 'none', paddingBottom: '2px' }}
              >
                Learn More About Anela
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#F5F0E8' }}>
        <div className="container-main">
          <SectionHeading
            label="What We Do"
            title="Tailored to You"
            subtitle="Every experience is fully customized. Our services are designed for individuals who value discretion, efficiency, and elevated experiences."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {services.map((service) => (
              <Link
                to="/services"
                key={service.title}
                className="group"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div className="img-zoom" style={{ height: '24rem', marginBottom: '1.5rem' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)', color: '#1A1A1A', fontWeight: 300, marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#3A3A3A', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {service.description}
                </p>
                <span style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4B6B77' }}>
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/cta-bg.png"
            alt="Tropical coastline aerial view"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: 'white', fontWeight: 300, marginBottom: '1.5rem' }}>
            Ready to Begin?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
            Due to the bespoke nature of our services, we accept a limited
            number of clients each month.
          </p>
          <Link
            to="/book"
            style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'white', color: '#1A1A1A', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background-color 0.3s' }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#F5F0E8')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = 'white')}
          >
            Book Your Complimentary Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
