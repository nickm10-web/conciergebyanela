interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeading({ label, title, subtitle, light, center = true }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: '3rem', textAlign: center ? 'center' : 'left' }}>
      {label && (
        <span style={{
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: light ? 'rgba(255,255,255,0.5)' : '#4B6B77',
          display: 'block',
          marginBottom: '1rem'
        }}>
          {label}
        </span>
      )}
      <h2 className="font-serif" style={{
        fontSize: 'clamp(1.875rem, 5vw, 3.75rem)',
        fontWeight: 300,
        lineHeight: 1.1,
        color: light ? 'white' : '#1A1A1A'
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          marginTop: '1rem',
          fontSize: '1.0625rem',
          maxWidth: '42rem',
          marginLeft: center ? 'auto' : undefined,
          marginRight: center ? 'auto' : undefined,
          lineHeight: 1.7,
          color: light ? 'rgba(255,255,255,0.7)' : '#3A3A3A'
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
