import { useEffect, useState, useCallback } from 'react'
import { ArrowRight, BookOpen, XCircle, CheckCircle2, RotateCcw } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'

type Line = { text: string; color: string; icon?: 'x' | 'check' }

const BEFORE: Line[] = [
  { text: '$ git clone git@github.com:acme/api.git', color: c.textPrimary },
  { text: '# now read the 40-step README...', color: c.textMuted },
  { text: '$ cp .env.example .env', color: c.textPrimary },
  { text: 'Error: missing DATABASE_URL', color: c.red, icon: 'x' },
  { text: '$ npx prisma migrate dev', color: c.textPrimary },
  { text: 'Error: P3009 failed migrations', color: c.red, icon: 'x' },
  { text: '# 3 hours later, still debugging', color: c.textMuted },
]

const AFTER: Line[] = [
  { text: '$ git clone git@github.com:acme/api.git', color: c.textPrimary },
  { text: '$ npx spinup', color: c.textPrimary },
  { text: 'Resolved .env (23 vars)', color: c.accent, icon: 'check' },
  { text: 'Installed dependencies (pnpm)', color: c.accent, icon: 'check' },
  { text: 'Applied 12 Prisma migrations', color: c.accent, icon: 'check' },
  { text: 'Seeded database', color: c.accent, icon: 'check' },
]

function useReveal(total: number, runId: number, stepMs = 550) {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    setShown(0)
    const id = setInterval(() => {
      setShown((s) => {
        if (s >= total) {
          clearInterval(id)
          return s
        }
        return s + 1
      })
    }, stepMs)
    return () => clearInterval(id)
  }, [total, runId, stepMs])
  return shown
}

function TerminalLine({ line }: { line: Line }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, minHeight: 22 }}>
      {line.icon === 'x' && <XCircle size={15} color={c.red} style={{ flexShrink: 0 }} />}
      {line.icon === 'check' && <CheckCircle2 size={15} color={c.accent} style={{ flexShrink: 0 }} />}
      <span style={{ fontFamily: font.mono, fontSize: 14, color: line.color }}>{line.text}</span>
    </div>
  )
}

function Panel({
  label,
  labelColor,
  lines,
  shown,
  accent,
  showReadyBadge,
  ready,
}: {
  label: string
  labelColor: string
  lines: Line[]
  shown: number
  accent?: boolean
  showReadyBadge?: boolean
  ready?: boolean
}) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: c.card,
        border: `1px solid ${accent ? c.accentBorderSoft : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 12,
        padding: 22,
        overflow: 'hidden',
      }}
    >
      {accent && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,232,125,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            fontFamily: font.sans,
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: labelColor,
            marginBottom: 16,
          }}
        >
          {label}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {lines.slice(0, shown).map((line, i) => (
            <TerminalLine key={i} line={line} />
          ))}
        </div>
        {showReadyBadge && ready && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginTop: 14,
              backgroundColor: c.accent,
              color: c.bg,
              fontFamily: font.mono,
              fontWeight: 600,
              fontSize: 13,
              padding: '5px 12px',
              borderRadius: 9999,
            }}
          >
            Ready in 14s → npm run dev
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const [runId, setRunId] = useState(0)
  const [primaryHover, setPrimaryHover] = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)
  const [replayHover, setReplayHover] = useState(false)

  const beforeShown = useReveal(BEFORE.length, runId)
  const afterShown = useReveal(AFTER.length, runId)
  const replay = useCallback(() => setRunId((r) => r + 1), [])

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 144,
        paddingBottom: 104,
        paddingLeft: 24,
        paddingRight: 24,
        overflow: 'hidden',
      }}
    >
      {/* grid texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />
      {/* green glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,232,125,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: SECTION_MAX,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Kicker */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: `1px solid ${c.accentBorder}`,
            backgroundColor: c.accentBg,
            borderRadius: 9999,
            padding: '7px 16px',
          }}
        >
          <span
            className="pulse-dot"
            style={{ width: 7, height: 7, borderRadius: 9999, backgroundColor: c.accent }}
          />
          <span style={{ fontFamily: font.mono, fontWeight: 500, fontSize: 14, color: c.accent }}>
            Zero config. Full speed.
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: font.sans,
            fontWeight: 700,
            fontSize: 'clamp(52px, 8vw, 100px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            color: c.textPrimary,
            margin: '30px 0 0',
          }}
        >
          Clone the repo.
          <br />
          <span style={{ color: c.accent }}>We handle the rest.</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: font.sans,
            fontWeight: 400,
            fontSize: 22,
            lineHeight: 1.55,
            color: c.textBody,
            maxWidth: 660,
            margin: '28px 0 0',
          }}
        >
          From{' '}
          <code
            style={{
              fontFamily: font.mono,
              fontSize: 18,
              backgroundColor: c.surface,
              color: c.textPrimary,
              padding: '2px 7px',
              borderRadius: 4,
            }}
          >
            git clone
          </code>{' '}
          to pushing code in 14 seconds. SpinUp automates .env setup, package installs, Prisma
          migrations, and database seeding — so your team ships instead of debugging local
          environments.
        </p>

        {/* CTAs */}
        <div
          style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#"
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: font.sans,
              fontWeight: 600,
              fontSize: 18,
              color: c.bg,
              backgroundColor: c.accent,
              padding: '14px 28px',
              borderRadius: 6,
              textDecoration: 'none',
              boxShadow: primaryHover ? `0 0 24px ${c.accentGlow}` : 'none',
              transition: 'box-shadow 150ms ease',
            }}
          >
            Start Free Trial
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
              padding: '14px 28px',
              borderRadius: 6,
              textDecoration: 'none',
              transition: 'color 150ms ease',
            }}
          >
            <BookOpen size={18} />
            Read the Docs
          </a>
        </div>

        {/* Split-screen terminal demo */}
        <div
          style={{
            marginTop: 72,
            width: '100%',
            maxWidth: 980,
            gap: 16,
          }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <Panel
            label="Before SpinUp"
            labelColor={c.red}
            lines={BEFORE}
            shown={beforeShown}
          />
          <Panel
            label="With SpinUp"
            labelColor={c.accent}
            lines={AFTER}
            shown={afterShown}
            accent
            showReadyBadge
            ready={afterShown >= AFTER.length}
          />
        </div>

        {/* Replay */}
        <button
          onClick={replay}
          onMouseEnter={() => setReplayHover(true)}
          onMouseLeave={() => setReplayHover(false)}
          style={{
            marginTop: 18,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: font.mono,
            fontSize: 14,
            color: replayHover ? c.accent : c.textMuted,
            transition: 'color 150ms ease',
          }}
        >
          <RotateCcw size={14} />
          replay demo
        </button>
      </div>
    </section>
  )
}
