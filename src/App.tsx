import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div style={{ backgroundColor: '#080B0F', minHeight: '100vh' }}>
      <Navbar />
      <main>
        {/* Hero animates itself (terminal typing) — no scroll reveal needed above the fold */}
        <Hero />
        <Reveal>
          <Problem />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <FinalCTA />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
