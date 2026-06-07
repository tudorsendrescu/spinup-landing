import { useState } from 'react'
import { ArrowRight, BookOpen, Terminal, ShieldCheck } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

const PILLS = [
  { icon: Terminal, text: 'Installs in 30 seconds' },
  { icon: ShieldCheck, text: 'No credit card required' },
  { icon: ArrowRight, text: 'Works with your Git flow' },
]

export default function FinalCTA() {
  const [primaryHover, setPrimaryHover] = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)

  return (
    <section style={{ padding: '104px 24px', borderTop: `1px solid ${c.borderSoft}` }}>
      <div style={{ maxWidth: SECTION_MAX, margin: '0 auto' }}>
        <div
          style={{
            position: 'relative',
            border: `1px solid rgba(0,232,125,0.15)`,
            backgroundColor: c.card,
            borderRadius: 16,
            padding: '80px 24px',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0,232,125,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontFamily: font.mono, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.textMuted }}>
              Get started today
            </div>

            <h2
              style={{
                fontFamily: font.sans,
                fontWeight: 700,
                fontSize: 'clamp(36px, 6vw, 66px)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: c.textPrimary,
                maxWidth: 760,
                margin: '24px 0 0',
              }}
            >
              Your next hire shouldn't spend their first week fighting a terminal.
            </h2>

            <p
              style={{
                fontFamily: font.sans,
                fontSize: 20,
                lineHeight: 1.6,
                color: c.textBody,
                maxWidth: 580,
                margin: '24px 0 0',
              }}
            >
              Install SpinUp in 30 seconds. Free for teams up to 5 developers. No credit card
              required — and if it doesn't cut your onboarding time in half, we'll send a personally
              written apology.
            </p>

            {/* Guarantee pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', marginTop: 32 }}>
              {PILLS.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon size={16} color={c.accent} />
                  <span style={{ fontFamily: font.sans, fontSize: 15, color: c.textBody }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 36 }}>
              <a
                href="#"
                onMouseEnter={() => setPrimaryHover(true)}
                onMouseLeave={() => setPrimaryHover(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  fontFamily: font.sans,
                  fontWeight: 700,
                  fontSize: 18,
                  color: c.bg,
                  backgroundColor: c.accent,
                  padding: '16px 36px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  boxShadow: primaryHover ? `0 0 32px rgba(0,232,125,0.4)` : 'none',
                  transition: 'box-shadow 150ms ease',
                }}
              >
                Start Free Trial — No Card Needed
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                onMouseEnter={() => setSecondaryHover(true)}
                onMouseLeave={() => setSecondaryHover(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  fontFamily: font.sans,
                  fontWeight: 500,
                  fontSize: 18,
                  color: secondaryHover ? c.textPrimary : c.textMuted,
                  border: `1px solid ${c.borderHard}`,
                  padding: '16px 28px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
              >
                <BookOpen size={18} />
                Install the CLI
              </a>
            </div>

            {/* Install command */}
            <div
              style={{
                marginTop: 32,
                backgroundColor: c.bg,
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: 8,
                padding: '12px 18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
              }}
            >
              <span style={{ fontFamily: font.mono, fontSize: 15, color: c.textMuted }}>$</span>
              <span style={{ fontFamily: font.mono, fontSize: 15, color: c.textPrimary }}>npx spinup init</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
