import { useState } from 'react'
import { KeyRound, Database, Package, GitPullRequest, ArrowRight } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

type Card = {
  icon: typeof KeyRound
  tag: string
  headline: string
  body: string
  bullets: string[]
  accent?: boolean
}

const CARDS: Card[] = [
  {
    icon: KeyRound,
    tag: 'Zero-Config .env Sync',
    headline: 'Stop hunting for secrets.',
    body: 'SpinUp resolves every environment variable straight from Doppler or 1Password at clone time, validates them against your schema, and writes a complete .env before the app ever runs.',
    bullets: ['pulls from doppler / 1password', 'validates against schema', 'catches missing keys pre-runtime'],
  },
  {
    icon: Database,
    tag: 'Automated Prisma Migrations',
    headline: 'Deterministic DB state. Every time.',
    body: 'Migrations run in order, recover from failed states, and seed realistic data — so every developer boots into the exact same working database, not an empty schema.',
    bullets: ['runs migrations in order', 'auto-recovers P3009 states', 'seeds realistic fixtures'],
    accent: true,
  },
  {
    icon: Package,
    tag: 'Instant Dependency Install',
    headline: 'Your package manager. Your rules.',
    body: 'SpinUp detects pnpm, npm, yarn, or bun and installs the exact dependency tree your CI already trusts. No version roulette, no peer-dependency archaeology.',
    bullets: ['detects lockfile + manager', 'matches CI exactly', 'cached for instant re-runs'],
  },
  {
    icon: GitPullRequest,
    tag: 'PR-Ready Isolated Environments',
    headline: 'Test every PR on real data.',
    body: 'Spin up a fully-seeded, isolated environment for any pull request in seconds. Reviewers test real behavior instead of taking the description’s word for it.',
    bullets: ['isolated per branch', 'seeded with real fixtures', 'tears down automatically'],
  },
]

function FeatureCard({ card }: { card: Card }) {
  const [hover, setHover] = useState(false)
  const { icon: Icon, tag, headline, body, bullets, accent } = card
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        border: `1px solid ${accent ? 'rgba(0,232,125,0.20)' : c.border}`,
        backgroundColor: accent ? c.accentBgSoft : hover ? c.cardHover : c.card,
        borderRadius: 12,
        padding: 36,
        transition: 'background-color 150ms ease',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          borderRadius: 9,
          backgroundColor: accent ? c.accentIconBg : 'rgba(255,255,255,0.04)',
          marginBottom: 20,
        }}
      >
        <Icon size={21} color={accent ? c.accent : c.textMuted} />
      </div>

      <div
        style={{
          fontFamily: font.mono,
          fontWeight: 500,
          fontSize: 13,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: accent ? c.accent : c.textMuted,
          marginBottom: 12,
        }}
      >
        {tag}
      </div>

      <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 22, color: c.textPrimary, margin: '0 0 12px' }}>
        {headline}
      </h3>
      <p style={{ fontFamily: font.sans, fontSize: 18, lineHeight: 1.6, color: c.textBody, margin: '0 0 20px' }}>
        {body}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {bullets.map((b) => (
          <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 5, height: 5, borderRadius: 9999, backgroundColor: c.accent, flexShrink: 0 }} />
            <span style={{ fontFamily: font.mono, fontSize: 14, color: c.textFaint }}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Features() {
  const [btnHover, setBtnHover] = useState(false)

  return (
    <section style={{ padding: '104px 24px', borderTop: `1px solid ${c.borderSoft}` }}>
      <div style={{ maxWidth: SECTION_MAX, margin: '0 auto' }}>
        <div style={{ fontFamily: font.mono, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.textMuted }}>
          What SpinUp does
        </div>

        <div
          style={{ gap: 20, alignItems: 'end', marginTop: 24 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <h2
            style={{
              fontFamily: font.sans,
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: c.textPrimary,
              margin: 0,
            }}
          >
            Every repetitive setup task,
            <br />
            automated in one command.
          </h2>
          <p
            style={{
              fontFamily: font.sans,
              fontSize: 18,
              lineHeight: 1.6,
              color: c.textBody,
              margin: 0,
            }}
            className="md:text-right"
          >
            SpinUp handles the setup so your engineers handle the product.
          </p>
        </div>

        {/* 2x2 grid */}
        <div
          style={{ marginTop: 48, gap: 16 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {CARDS.map((card) => (
            <FeatureCard key={card.tag} card={card} />
          ))}
        </div>

        {/* Callout bar */}
        <div
          style={{
            marginTop: 16,
            border: `1px solid ${c.border}`,
            backgroundColor: c.card,
            borderRadius: 12,
            padding: '22px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontFamily: font.sans, fontSize: 18, color: c.textBody }}>
            All features included in every plan. Free for teams up to 5 developers.
          </span>
          <a
            href="#"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: font.sans,
              fontWeight: 600,
              fontSize: 16,
              color: c.bg,
              backgroundColor: btnHover ? c.accentHover : c.accent,
              padding: '12px 20px',
              borderRadius: 6,
              textDecoration: 'none',
              transition: 'background-color 150ms ease',
            }}
          >
            Get started free
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
