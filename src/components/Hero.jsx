import { ChevronRight, Download } from 'lucide-react'
import { SOCIALS } from './Contact'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <svg className="hero-pixel-folder" viewBox="0 0 16 14" shapeRendering="crispEdges" aria-hidden="true">
        <path d="M1 2h5l1 2h8v8H1z" fill="var(--navy)" />
        <path d="M2 5h12v6H2z" fill="var(--yellow)" />
        <path d="M2 3h4l1 2h7v1H2z" fill="var(--blue)" />
      </svg>
      <div className="wrap hero-grid" style={{ width: '100%' }}>
        <div>
          <h1 className="h-name rise" style={{ animationDelay: '.1s' }}>
            Ahmad <span className="hl">Rafi</span><br />Irsyad Nugraha<span className="cursor" aria-hidden="true">█</span>
          </h1>
          <p className="rise" style={{ animationDelay: '.2s', margin: '1rem 0 .2rem' }}>
            Informatics Student • AI Enthusiast • Software Developer
          </p>
          <div className="rise" style={{ animationDelay: '.4s', display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.8rem' }}>
            <a href="#portfolio" className="btn btn-yellow"><ChevronRight size={18} />Explore Portfolio</a>
            <a href="/assets/cv.pdf" download className="btn"><Download size={18} />Download CV</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <span className="px" style={{ top: '-1rem', left: '8%', background: 'var(--blue)', animationDelay: '.5s' }} aria-hidden="true" />
          <span className="px" style={{ bottom: '-1.5rem', right: '6%' }} aria-hidden="true" />
          <span className="hero-pixel-sparkle" aria-hidden="true" />

          <div className="os-window">
            <div className="os-titlebar">
              <span>raafx.exe</span>
              <div className="os-controls" aria-hidden="true">
                <span>_</span><span>□</span><span>X</span>
              </div>
            </div>
            <div className="avatar-card">
              <img src="/assets/images/avatar.png" alt="Portfolio avatar" />
            </div>
            <span className="work-badge"><span aria-hidden="true">●</span> Open to Intern</span>
          </div>
        </div>
      </div>
      <div className="hero-marquee" role="group" aria-label="Tech stack">
      </div>
    </section>
  )
}
