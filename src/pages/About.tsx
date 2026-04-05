import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[450px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/about-hero.png"
            alt="About Anela"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)' }} />
        </div>
        <div className="container-main relative z-10 pb-8 md:pb-16 w-full">
          <span className="text-xs tracking-[0.4em] uppercase text-white/60 block mb-4">
            About
          </span>
          <h1 className="font-serif text-white font-light" style={{ fontSize: 'clamp(2rem, 10vw, 3.5rem)' }}>
            The Story Behind <em className="italic">the Journey</em>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Image */}
            <div className="lg:sticky lg:top-8">
              <div className="img-zoom">
                <img
                  src="/about-vineyard.jpeg"
                  alt="Anela at a vineyard wine tasting"
                  className="w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[600px] object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="pt-0 lg:pt-8">
              <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: '#4B6B77' }}>
                Meet Anela
              </span>
              <h2 className="font-serif font-light mb-8" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', color: '#1A1A1A', lineHeight: 1.2 }}>
                A passion for creating{' '}
                <em className="italic">unforgettable experiences</em>
              </h2>

              <div className="flex flex-col gap-6" style={{ color: '#3A3A3A', lineHeight: 1.6 }}>
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
              <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                    <h3 className="font-serif text-xl mb-2" style={{ color: '#1A1A1A' }}>{value.title}</h3>
                    <p className="text-sm" style={{ color: '#3A3A3A', lineHeight: 1.6 }}>{value.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 md:mt-16 p-6 md:p-8 border-l-2" style={{ backgroundColor: '#F5F0E8', borderColor: '#C4B198' }}>
                <p className="font-serif text-lg md:text-xl italic" style={{ color: '#1A1A1A', lineHeight: 1.6 }}>
                  "I believe luxury travel should feel effortless. My role is to handle every detail so you can simply arrive, exhale, and enjoy."
                </p>
              </div>

              {/* Photo strip */}
              <div className="mt-10 md:mt-12 grid grid-cols-2 gap-3">
                <div className="img-zoom">
                  <img
                    src="/about-hotel.jpeg"
                    alt="Luxury hotel interior"
                    className="w-full h-[160px] sm:h-[200px] object-cover"
                  />
                </div>
                <div className="img-zoom">
                  <img
                    src="/about-rome.jpeg"
                    alt="Anela at the Trevi Fountain, Rome"
                    className="w-full h-[160px] sm:h-[200px] object-cover"
                    style={{ objectPosition: 'center bottom' }}
                  />
                </div>
              </div>

              <Link
                to="/book"
                className="inline-block mt-10 md:mt-12 px-8 md:px-10 py-4 text-xs tracking-[0.25em] uppercase text-white no-underline transition-colors duration-300"
                style={{ backgroundColor: '#4B6B77' }}
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
