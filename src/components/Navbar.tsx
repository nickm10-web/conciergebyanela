import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  const showSolid = isScrolled || !isHome || isMobileOpen
  const textColor = (isScrolled || !isHome) ? '#1A1A1A' : 'white'

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.5s ease',
      backgroundColor: showSolid ? 'rgba(250,248,245,0.95)' : 'transparent',
      backdropFilter: showSolid ? 'blur(12px)' : 'none',
      boxShadow: showSolid ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>
          {/* Left group: Logo + Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src="/logo.svg"
                alt="Concierge by Anela"
                style={{
                  height: '3rem',
                  width: 'auto',
                  filter: (isScrolled || !isHome) ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.3s',
                }}
              />
            </Link>

            {/* Desktop Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="link-underline"
                  style={{
                    fontSize: '0.875rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: textColor,
                    opacity: location.pathname === link.to ? 1 : 0.7,
                    transition: 'opacity 0.3s, color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = location.pathname === link.to ? '1' : '0.7')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right group: CTA Button */}
          <div className="desktop-nav">
            <Link
              to="/book"
              style={{
                padding: '0.625rem 1.5rem',
                backgroundColor: '#4B6B77',
                color: 'white',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2C4A56')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4B6B77')}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: '6px', padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: textColor, transition: 'all 0.3s', transform: isMobileOpen ? 'rotate(45deg) translateY(3.5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: textColor, transition: 'all 0.3s', opacity: isMobileOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '1px', backgroundColor: textColor, transition: 'all 0.3s', transform: isMobileOpen ? 'rotate(-45deg) translateY(-3.5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{
        overflow: 'hidden',
        transition: 'max-height 0.5s ease',
        backgroundColor: '#FAF8F5',
        maxHeight: isMobileOpen ? '24rem' : '0',
        display: 'none',
      }}>
        <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontSize: '0.875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#1A1A1A',
                opacity: location.pathname === link.to ? 1 : 0.6,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4B6B77',
              color: 'white',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Book Consultation
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
