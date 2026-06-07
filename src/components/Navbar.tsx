import { useState } from 'react'
import { Terminal, ArrowRight } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

const LINKS = ['Docs', 'Pricing', 'Changelog', 'GitHub']

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(8, 11, 15, 0.8)',
        borderBottom: `1px solid ${c.borderSoft}`,
      }}
    >
      <nav
        style={{
          maxWidth: SECTION_MAX,
          margin: '0 auto',
          height: '100%',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}
        >
          <Terminal size={19} color={c.accent} />
          <span style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 18, color: c.textPrimary }}>
            SpinUp
          </span>
        </a>

        {/* Center links */}
        <div style={{ alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: font.sans,
                fontWeight: 400,
                fontSize: 16,
                color: hovered === link ? c.textPrimary : c.textMuted,
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontFamily: font.sans,
            fontWeight: 600,
            fontSize: 15,
            color: c.bg,
            backgroundColor: ctaHover ? c.accentHover : c.accent,
            padding: '9px 17px',
            borderRadius: 6,
            textDecoration: 'none',
            transition: 'background-color 150ms ease',
          }}
        >
          Start Free
          <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  )
}
