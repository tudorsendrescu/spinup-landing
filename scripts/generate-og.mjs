// Generates public/og.png (1200×630) — the social share card.
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp'

const W = 1200
const H = 630

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#00E87D" stop-opacity="0.20" />
      <stop offset="65%" stop-color="#00E87D" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M64 0 H0 V64" fill="none" stroke="#FFFFFF" stroke-opacity="0.03" stroke-width="1" />
    </pattern>
  </defs>

  <!-- base + texture -->
  <rect width="${W}" height="${H}" fill="#080B0F" />
  <rect width="${W}" height="${H}" fill="url(#grid)" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#FFFFFF" stroke-opacity="0.06" />

  <!-- wordmark -->
  <path d="M76 78 l16 16 -16 16" fill="none" stroke="#00E87D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
  <line x1="98" y1="110" x2="120" y2="110" stroke="#00E87D" stroke-width="5" stroke-linecap="round" />
  <text x="134" y="105" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" fill="#F0F2F5">SpinUp</text>

  <!-- kicker pill -->
  <rect x="74" y="158" width="338" height="46" rx="23" fill="#00E87D" fill-opacity="0.07" stroke="#00E87D" stroke-opacity="0.30" />
  <circle cx="100" cy="181" r="5" fill="#00E87D" />
  <text x="118" y="188" font-family="'JetBrains Mono', Consolas, monospace" font-size="19" font-weight="500" letter-spacing="1" fill="#00E87D">ZERO CONFIG. FULL SPEED.</text>

  <!-- headline -->
  <text x="72" y="316" font-family="Inter, Arial, sans-serif" font-size="92" font-weight="800" letter-spacing="-2" fill="#F0F2F5">Clone the repo.</text>
  <text x="72" y="416" font-family="Inter, Arial, sans-serif" font-size="92" font-weight="800" letter-spacing="-2" fill="#00E87D">We handle the rest.</text>

  <!-- subtext -->
  <text x="74" y="486" font-family="Inter, Arial, sans-serif" font-size="29" font-weight="400" fill="#9AA5B4">Automated local environments — .env, dependencies, Prisma</text>
  <text x="74" y="524" font-family="Inter, Arial, sans-serif" font-size="29" font-weight="400" fill="#9AA5B4">migrations &amp; seeding. From git clone to prod in 14 seconds.</text>

  <!-- ready pill -->
  <rect x="74" y="556" width="372" height="46" rx="8" fill="#00E87D" />
  <text x="96" y="586" font-family="'JetBrains Mono', Consolas, monospace" font-size="21" font-weight="600" fill="#080B0F">Ready in 14s → npm run dev</text>

  <!-- url -->
  <text x="${W - 72}" y="586" text-anchor="end" font-family="'JetBrains Mono', Consolas, monospace" font-size="21" fill="#6B7585">spinup-landing.vercel.app</text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile('public/og.png')
console.log('Wrote public/og.png')
