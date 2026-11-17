import { ChevronRight, Download } from 'lucide-react'
import { useTypewriter } from '../hooks'
import PixelGhost from './PixelGhost'

const ROLES = ['AI Enthusiast', 'Machine Learning Explorer', 'Software Developer', 'Informatics Student']

export default function Hero() {
  const role = useTypewriter(ROLES)
  return (
    <section id="home" className="hero">
      <div className="hero-panel" aria-hidden="true" />
      <div className="wrap hero-grid" style={{ width: '100%' }}>
        <div>
          <p className="rise" style={{ margin: '0 0 .5rem', fontSize: '1.2rem' }}>Hello, World!</p>
          <h1 className="h-name rise" style={{ animationDelay: '.1s' }}>
            Ahmad <span className="hl">Rafi</span><br />Isyad Nugraha
          </h1>
          <p className="rise" style={{ animationDelay: '.2s', margin: '1rem 0 .2rem' }}>Informatics Student · AI Enthusiast · Software Developer</p>
          <p className="rise type-line" style={{ animationDelay: '.3s', margin: 0, fontWeight: 600 }} aria-live="off">
            {role}<span className="cursor" aria-hidden="true">_</span>
          </p>
          <div className="rise" style={{ animationDelay: '.4s', display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.8rem' }}>
            <a href="#portfolio" className="btn btn-yellow"><ChevronRight size={18} />Explore Portfolio</a>
            <a href="/assets/cv.pdf" download className="btn"><Download size={18} />Download CV</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <span className="px" style={{ top: '-1rem', left: '8%', background: 'var(--blue)', animationDelay: '.5s' }} aria-hidden="true" />
          <span className="px" style={{ bottom: '-1.5rem', right: '6%' }} aria-hidden="true" />

          <div className="avatar-card"><img className="border rounded-2xl" src="/assets/images/avatar.png" /></div>
        </div>
      </div>
    </section>
  )
}
