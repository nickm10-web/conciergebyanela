import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '450px', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Elegant villa with palm trees"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)' }} />
        </div>
        <div className="container-main" style={{ position: 'relative', zIndex: 10, paddingBottom: '4rem', width: '100%' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '1rem' }}>
            About
          </span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2rem, 10vw, 3.5rem)', color: 'white', fontWeight: 300 }}>
            The Story Behind <em className="italic">the Journey</em>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#FAF8F5' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Image */}
            <div style={{ position: 'sticky', top: '2rem' }}>
              <div className="img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                  alt="Luxury resort infinity pool overlooking mountains"
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Text */}
            <div style={{ paddingTop: '2rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4B6B77', display: 'block', marginBottom: '1.5rem' }}>
                Meet Anela
              </span>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', color: '#1A1A1A', fontWeight: 300, lineHeight: 1.2, marginBottom: '2rem' }}>
                A passion for creating{' '}
                <em className="italic">unforgettable experiences</em>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#3A3A3A', lineHeight: 1.6 }}>
                <p>
                  My mission is to coordinate personalized, seamless, luxury travel
                  experiences with concierge-level service, giving clients effortless,
                  memorable journeys anywhere in the world.
                </p>
                <p>
                  I am a passionate hospitality professional with over five years in
                  luxury hospitality, travel, and wine. I have lived in and travelled
                  to some of the most sought-out destinations and I am excited to share
                  my travel knowledge and help you plan the perfect trip.
                </p>
                <p>
                  I curate seamless, personalized luxury travel experiences so my
                  clients can explore the world effortlessly and with complete confidence.
                </p>
              </div>

              {/* Values */}
              <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {[
                  {
                    title: 'Discretion',
                    text: 'Your privacy and preferences are always protected with the utmost care.',
                  },
                  {
                    title: 'Personalization',
                    text: 'No two journeys are alike. Every detail is tailored uniquely to you.',
                  },
                  {
                    title: 'Efficiency',
                    text: 'We handle the complexity so you can simply enjoy the experience.',
                  },
                  {
                    title: 'Excellence',
                    text: 'Only the finest accommodations, experiences, and service standards.',
                  },
                ].map((value) => (
                  <div key={value.title}>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{value.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#3A3A3A', lineHeight: 1.6 }}>{value.text}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#F5F0E8', borderLeft: '2px solid #C4B198' }}>
                <p className="font-serif" style={{ fontSize: '1.25rem', color: '#1A1A1A', fontStyle: 'italic', lineHeight: 1.6 }}>
                  "I believe luxury travel should feel effortless. My role is to handle every detail so you can simply arrive, exhale, and enjoy."
                </p>
              </div>

              <Link
                to="/book"
                style={{ display: 'inline-block', marginTop: '3rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '1rem', paddingBottom: '1rem', backgroundColor: '#4B6B77', color: 'white', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', transition: 'background-color 0.3s', cursor: 'pointer', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2C4A56'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4B6B77'}
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
