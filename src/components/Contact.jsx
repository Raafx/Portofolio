import { Mail, Github, Linkedin } from 'lucide-react'
import { useReveal } from '../hooks'

export const SOCIALS = [
  [Mail, 'Email', 'mailto:your.email@example.com'],
  [Github, 'GitHub', 'https://github.com/'],
  [Linkedin, 'LinkedIn', 'https://www.linkedin.com/'],
]

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="sec" ref={ref}>
      <div className="wrap reveal" style={{ position: 'relative' }}>
        <span className="px" style={{ right: '8%', top: 0 }} aria-hidden="true" />
        <h2 className="sec-title">Let's Connect!</h2>
        <p className="sec-sub">Have an interesting idea or opportunity? Feel free to reach out!</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {SOCIALS.map(([Icon, label, href]) => (
            <a key={label} href={href} className="btn btn-hover" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon size={18} />{label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
