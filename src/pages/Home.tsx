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

const testimonials = [
  {
    quote: "Anela transformed our anniversary trip into something beyond what we could have imagined. Every detail was flawless.",
    author: "Sarah & Michael",
    location: "Amalfi Coast, Italy"
  },
  {
    quote: "The level of personal attention and insider access is unlike anything I've experienced. Truly a white-glove service.",
    author: "James R.",
    location: "Tokyo, Japan"
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
                border: '1px solid rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.4s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
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
                I'm a passionate hospitality professional with over five years in
                luxury hospitality, travel, and wine. Having lived in and travelled
                to some of the most sought-out destinations, I bring firsthand
                knowledge and genuine care to every experience I create.
              </p>
              <p style={{ marginTop: '1rem', color: '#3A3A3A', lineHeight: 1.7 }}>
                I curate seamless, personalized luxury travel experiences so my
                clients can explore the world effortlessly and with complete confidence.
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

      {/* Testimonial */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#2C4A56' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '1rem' }}>
              Client Experiences
            </span>
            <div style={{ width: '3rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <blockquote key={i} style={{
                padding: '3rem',
                backgroundColor: 'white',
                border: '1px solid rgba(196,177,152,0.3)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{ fontSize: '3rem', lineHeight: 1, color: '#C4B198', marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>"</div>
                <p className="font-serif" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300, lineHeight: 1.6, fontStyle: 'italic', color: '#1A1A1A' }}>
                  {t.quote}
                </p>
                <footer style={{ marginTop: '2rem' }}>
                  <div style={{ width: '2rem', height: '1px', backgroundColor: '#C4B198', margin: '0 auto 1rem' }} />
                  <cite style={{ fontStyle: 'normal', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3A3A3A', fontWeight: 500 }}>
                    {t.author}
                  </cite>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(58,58,58,0.5)', marginTop: '0.25rem', letterSpacing: '0.1em' }}>
                    {t.location}
                  </div>
                </footer>
              </blockquote>
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
