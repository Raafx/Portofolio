import { GraduationCap, MapPin, Sparkles, School } from 'lucide-react'
import { useReveal } from '../hooks'

const FACTS = [
  [School, 'Universitas Mulawarman'],
  [GraduationCap, 'Informatics Student'],
  [MapPin, 'Samarinda, Indonesia'],
  [Sparkles, 'AI & Software Development Enthusiast'],
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="sec" ref={ref}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        <div className="reveal">
          <h2 className="sec-title">About <span style={{ display: 'inline-block', width: 18, height: 18, background: 'var(--blue)', marginLeft: 6 }} aria-hidden="true" /></h2>
          <p className="sec-sub">A little bit about myself.</p>
          <p style={{ fontSize: '1.15rem', maxWidth: '36rem' }}>Hi! I'm Ahmad Rafi, an Informatics student at Universitas Mulawarman. I'm interested in Artificial Intelligence, Machine Learning, and Software Development.</p>
          <p style={{ fontSize: '1.15rem', maxWidth: '36rem' }}>I enjoy exploring new technologies, learning through experimentation, and building practical solutions with code.</p>
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 1.5rem', borderLeft: '3px solid var(--blue)', display: 'grid', gap: '1.1rem', marginTop: '3.5rem' }}>
          {FACTS.map(([Icon, label], i) => (
            <li key={label} className="reveal" style={{ '--d': `${i * 120}ms`, display: 'flex', gap: '.8rem', alignItems: 'center', fontSize: '1.1rem' }}>
              <Icon className="fact-icon" size={22} />{label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
