import { useState } from 'react'
import { Terminal } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

const LINKS = ['Privacy', 'Terms', 'Status', 'GitHub']

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <footer style={{ borderTop: `1px solid ${c.borderSoft}`, padding: '44px 24px' }}>
      <div
        style={{
          maxWidth: SECTION_MAX,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Terminal size={16} color={c.accent} />
          <span style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 16, color: c.textPrimary }}>SpinUp</span>
        </div>

        <span style={{ fontFamily: font.sans, fontSize: 15, color: c.textMuted, textAlign: 'center' }}>
          © 2025 SpinUp Technologies, Inc. Built for engineers who value their time.
        </span>

        <div style={{ display: 'flex', gap: 22 }}>
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: font.sans,
                fontSize: 15,
                color: hovered === link ? c.textPrimary : c.textMuted,
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
