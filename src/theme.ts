// Single source of truth for the SpinUp palette (from the design brief).
export const c = {
  bg: '#080B0F',
  textPrimary: '#F0F2F5',
  textBody: '#9AA5B4',
  textMuted: '#6B7585',
  textFaint: '#7A8898',
  textLabel: '#A0AABB',

  accent: '#00E87D',
  accentHover: '#00d472',
  accentBg: 'rgba(0, 232, 125, 0.06)',
  accentBgSoft: 'rgba(0, 232, 125, 0.04)',
  accentBorder: 'rgba(0, 232, 125, 0.25)',
  accentBorderSoft: 'rgba(0, 232, 125, 0.18)',
  accentGlow: 'rgba(0, 232, 125, 0.35)',
  accentIconBg: 'rgba(0, 232, 125, 0.12)',

  card: '#0E1217',
  cardHover: '#111820',
  surface: '#141A22',
  codeBg: '#0A0E13',

  border: 'rgba(255, 255, 255, 0.07)',
  borderSoft: 'rgba(255, 255, 255, 0.05)',
  borderHard: 'rgba(255, 255, 255, 0.10)',

  red: '#FF5F57',
  purple: '#9B7FE8',
} as const

export const font = {
  sans: 'Inter, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const

// Shared section wrapper styles
export const SECTION_MAX = 1152
