import { SOCIALS } from './Contact'

export default function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ padding: '2rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <span className="highlighted" style={{ background: 'var(--yellow)', border: '2px solid var(--navy)', padding: '0 .5rem', fontWeight: 700 }}>RAAFX</span>
          <span>Build · Learn · Grow</span>
        </div>
        <div style={{ display: 'flex', gap: '.8rem' }}>
          {SOCIALS.map(([Icon, label, href]) => <a key={label} href={href} aria-label={label} style={{ color: 'var(--navy)' }}><Icon size={20} /></a>)}
        </div>
        <small>© 2026 Ahmad Rafi. All rights reserved.</small>
      </div>
    </footer>
  )
}
