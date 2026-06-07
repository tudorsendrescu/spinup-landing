import { useState } from 'react'
import { ArrowRight, Clock, KeyRound, AlertTriangle, Bell } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

const STATS = [
  { icon: Clock, stat: '72 hrs', label: 'Average onboarding time lost', body: 'Per engineer, before their first real commit.' },
  { icon: KeyRound, stat: '23 vars', label: 'Average .env variables per modern app', body: 'Each one a chance to silently break the build.' },
  { icon: AlertTriangle, stat: '$9,800', label: 'Cost of one broken Prisma migration', body: 'In lost hours across a single blocked team.' },
  { icon: Bell, stat: '11×', label: 'Interruptions per onboarding developer', body: '"Anyone know why seed is failing?"' },
]

function Stat({
  icon: Icon,
  stat,
  label,
  body,
  isLast,
}: {
  icon: typeof Clock
  stat: string
  label: string
  body: string
  isLast: boolean
}) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? c.cardHover : c.card,
        padding: 28,
        borderRight: isLast ? 'none' : `1px solid ${c.borderSoft}`,
        transition: 'background-color 150ms ease',
      }}
      className="stat-cell"
    >
      <Icon size={20} color={c.textMuted} />
      <div style={{ fontFamily: font.mono, fontWeight: 600, fontSize: 36, color: c.textPrimary, margin: '16px 0 8px' }}>
        {stat}
      </div>
      <div style={{ fontFamily: font.sans, fontWeight: 500, fontSize: 15, color: c.textLabel, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontFamily: font.sans, fontWeight: 400, fontSize: 15, color: c.textFaint, lineHeight: 1.5 }}>
        {body}
      </div>
    </div>
  )
}

export default function Problem() {
  const [linkHover, setLinkHover] = useState(false)

  return (
    <section style={{ padding: '104px 24px', borderTop: `1px solid ${c.borderSoft}` }}>
      <div style={{ maxWidth: SECTION_MAX, margin: '0 auto' }}>
        <div
          style={{ fontFamily: font.mono, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.textMuted }}
        >
          The problem
        </div>

        <div
          style={{ gap: 48, marginTop: 32 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left: headline + CTA */}
          <div>
            <h2
              style={{
                fontFamily: font.sans,
                fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 60px)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: c.textPrimary,
                margin: 0,
              }}
            >
              Every new hire costs you <span style={{ color: c.red }}>72 hours</span> of DevOps hell.
            </h2>
            <a
              href="#"
              onMouseEnter={() => setLinkHover(true)}
              onMouseLeave={() => setLinkHover(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: linkHover ? 11 : 7,
                marginTop: 32,
                fontFamily: font.sans,
                fontWeight: 600,
                fontSize: 16,
                color: c.accent,
                textDecoration: 'none',
                transition: 'gap 150ms ease',
              }}
            >
              Stop the bleeding — start your free trial
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Right: body copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <p style={{ fontFamily: font.sans, fontSize: 20, lineHeight: 1.6, color: c.textBody, margin: 0 }}>
              Manual environment setup isn't a developer rite of passage. It's a compounding
              liability — eating onboarding time, blocking PRs, breeding "works on my machine"
              incidents, and silently degrading your team's trust in the codebase.
            </p>
            <p style={{ fontFamily: font.sans, fontSize: 20, lineHeight: 1.6, color: c.textBody, margin: 0 }}>
              The problem isn't your engineers. It's that local environment setup has been left to
              chance, documentation, and tribal knowledge for too long.
            </p>
          </div>
        </div>

        {/* Stat grid */}
        <div
          style={{
            marginTop: 56,
            border: `1px solid ${c.borderSoft}`,
            borderRadius: 12,
            overflow: 'hidden',
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} isLast={i === STATS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
