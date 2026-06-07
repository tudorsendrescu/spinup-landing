import { useState } from 'react'
import { ArrowRight, Copy, Check } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

const STEPS = [
  { cmd: 'npx spinup init', desc: 'Generate a spinup.config.ts that maps your env, ORM, and seed scripts. One file, committed to the repo.' },
  { cmd: 'git push', desc: 'Commit the config alongside your code. From now on, the repo carries its own setup instructions.' },
  { cmd: 'npx spinup', desc: 'Any teammate runs one command after cloning. Env, deps, migrations, and seed data — done in seconds.' },
]

const TAGS = ['Prisma', 'Drizzle', 'TypeORM', 'Sequelize', 'pnpm', 'npm', 'yarn', 'bun', 'Doppler', '1Password', 'GitHub Actions', 'Railway']

// Syntax-highlighted config: [text, colorKey]
type Tok = { t: string; c: string }
const CODE: Tok[][] = [
  [{ t: 'import', c: c.purple }, { t: ' { defineConfig } ', c: '#9BAFC4' }, { t: 'from', c: c.purple }, { t: ' ', c: '#9BAFC4' }, { t: "'spinup'", c: c.accent }],
  [],
  [{ t: 'export default', c: c.purple }, { t: ' defineConfig({', c: '#9BAFC4' }],
  [{ t: '  // Resolve secrets at clone time', c: '#4A5568' }],
  [{ t: '  env: ', c: '#9BAFC4' }, { t: '{ provider: ', c: '#9BAFC4' }, { t: "'doppler'", c: c.accent }, { t: ' },', c: '#9BAFC4' }],
  [],
  [{ t: '  // Run + seed your database', c: '#4A5568' }],
  [{ t: '  database: ', c: '#9BAFC4' }, { t: '{', c: '#9BAFC4' }],
  [{ t: '    orm: ', c: '#9BAFC4' }, { t: "'prisma'", c: c.accent }, { t: ',', c: '#9BAFC4' }],
  [{ t: '    migrate: ', c: '#9BAFC4' }, { t: 'true', c: c.purple }, { t: ',', c: '#9BAFC4' }],
  [{ t: '    seed: ', c: '#9BAFC4' }, { t: "'prisma/seed.ts'", c: c.accent }, { t: ',', c: '#9BAFC4' }],
  [{ t: '  },', c: '#9BAFC4' }],
  [{ t: '})', c: '#9BAFC4' }],
]

function Step({ index, cmd, desc, isLast }: { index: number; cmd: string; desc: string; isLast: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 18, position: 'relative' }}>
      {/* timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 9999,
            border: `1px solid ${c.accentBorder}`,
            backgroundColor: c.accentBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontFamily: font.mono, fontWeight: 600, fontSize: 13, color: c.accent }}>{index + 1}</span>
        </div>
        {!isLast && <div style={{ width: 1, flex: 1, backgroundColor: c.borderSoft, marginTop: 4 }} />}
      </div>

      <div style={{ paddingBottom: isLast ? 0 : 32 }}>
        <div style={{ fontFamily: font.mono, fontWeight: 600, fontSize: 18, color: c.textPrimary, marginBottom: 7 }}>
          <span style={{ color: c.textMuted }}>$ </span>
          {cmd}
        </div>
        <p style={{ fontFamily: font.sans, fontSize: 18, lineHeight: 1.6, color: c.textBody, margin: 0 }}>{desc}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [copied, setCopied] = useState(false)
  const [ctaHover, setCtaHover] = useState(false)

  const copyConfig = () => {
    const text = CODE.map((line) => line.map((tok) => tok.t).join('')).join('\n')
    navigator.clipboard?.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section style={{ padding: '104px 24px', borderTop: `1px solid ${c.borderSoft}` }}>
      <div style={{ maxWidth: SECTION_MAX, margin: '0 auto' }}>
        <div style={{ fontFamily: font.mono, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.textMuted }}>
          How it works
        </div>
        <h2
          style={{
            fontFamily: font.sans,
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: c.textPrimary,
            margin: '24px 0 0',
          }}
        >
          One config. One command. <span style={{ color: c.textMuted }}>Infinitely reproducible.</span>
        </h2>

        <div
          style={{ marginTop: 56, gap: 56, alignItems: 'start' }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Steps */}
          <div>
            <div>
              {STEPS.map((s, i) => (
                <Step key={s.cmd} index={i} cmd={s.cmd} desc={s.desc} isLast={i === STEPS.length - 1} />
              ))}
            </div>
            <a
              href="#"
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                marginTop: 32,
                border: `1px solid ${c.accentBorder}`,
                backgroundColor: ctaHover ? 'rgba(0,232,125,0.10)' : c.accentBg,
                color: c.accent,
                fontFamily: font.sans,
                fontWeight: 600,
                fontSize: 16,
                padding: '12px 20px',
                borderRadius: 6,
                textDecoration: 'none',
                transition: 'background-color 150ms ease',
              }}
            >
              Try it on your repo — takes 60 seconds
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Code block */}
          <div
            style={{
              backgroundColor: c.codeBg,
              border: `1px solid rgba(255,255,255,0.08)`,
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {/* header bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderBottom: `1px solid ${c.borderSoft}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: '#FF5F57' }} />
                <span style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: '#FEBC2E' }} />
                <span style={{ width: 12, height: 12, borderRadius: 9999, backgroundColor: '#28C840' }} />
                <span style={{ fontFamily: font.mono, fontSize: 14, color: c.textMuted, marginLeft: 8 }}>
                  spinup.config.ts
                </span>
              </div>
              <button
                onClick={copyConfig}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: font.mono,
                  fontSize: 14,
                  color: copied ? c.accent : c.textMuted,
                  transition: 'color 150ms ease',
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* code */}
            <div style={{ padding: '18px 0', overflowX: 'auto' }}>
              {CODE.map((line, i) => (
                <div key={i} style={{ display: 'flex', padding: '0 18px', minHeight: 24 }}>
                  <span
                    style={{
                      fontFamily: font.mono,
                      fontSize: 15,
                      color: '#2A3340',
                      width: 32,
                      flexShrink: 0,
                      textAlign: 'right',
                      paddingRight: 18,
                      userSelect: 'none',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontFamily: font.mono, fontSize: 15, whiteSpace: 'pre' }}>
                    {line.map((tok, j) => (
                      <span key={j} style={{ color: tok.c }}>
                        {tok.t}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compatibility strip */}
        <div style={{ marginTop: 56, display: 'flex', flexWrap: 'wrap', gap: 9 }}>
          {TAGS.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: font.mono,
                fontSize: 14,
                color: c.textMuted,
                border: `1px solid rgba(255,255,255,0.08)`,
                backgroundColor: c.card,
                borderRadius: 6,
                padding: '7px 14px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
