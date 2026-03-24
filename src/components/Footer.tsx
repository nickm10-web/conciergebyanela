import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0C2922', color: 'rgba(255,255,255,0.8)' }}>
      <div className="container-main" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {/* Brand */}
          <div>
            <img
              src="/logo-white.svg"
              alt="Concierge by Anela"
              style={{ height: '10rem', width: 'auto', marginBottom: '1.5rem' }}
            />
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', maxWidth: '20rem' }}>
              Curated luxury travel and lifestyle experiences,
              designed for those who value discretion, efficiency,
              and elevated moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
              Navigate
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
                { to: '/book', label: 'Book Consultation' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <a href="mailto:anela@conciergebyanela.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                anela@conciergebyanela.com
              </a>
              <a href="tel:8059523200" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                805.952.3200
              </a>
              <a href="https://instagram.com/conciergebyanela" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                @conciergebyanela
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Concierge by Anela. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            Luxury is personal. So is every journey we create.
          </p>
        </div>
      </div>
    </footer>
  )
}
