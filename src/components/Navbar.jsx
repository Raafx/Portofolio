import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../ThemeContext'

const LINKS = [['home', 'Home'], ['about', 'About'], ['portfolio', 'Portfolio'], ['contact', 'Contact']]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  const items = (cls) => LINKS.map(([id, label]) => (
    <a key={id} href={`#${id}`} className={`${cls} ${active === id ? 'active' : ''}`} aria-current={active === id ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>
  ))

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <a href="#home" aria-label="RAAFX home" style={{ display: 'flex' }}>
          <svg width="28" height="28" viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
            <rect width="10" height="10" fill="var(--yellow)" /><rect x="2" y="1" width="2" height="8" fill="var(--highlight-text)" />
            <rect x="4" y="1" width="4" height="2" fill="var(--highlight-text)" /><rect x="4" y="4" width="4" height="2" fill="var(--highlight-text)" />
            <rect x="6" y="6" width="2" height="3" fill="var(--highlight-text)" />
          </svg>
        </a>
        <div className="desktop-links" style={{ display: 'flex', gap: '.2rem' }}>{items('link')}</div>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'night' : 'light'} mode`}
          aria-pressed={theme === 'night'}
          title={`Switch to ${theme === 'light' ? 'night' : 'light'} mode`}
        >
          {theme === 'light' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </button>
        <button className="burger tab" style={{ padding: '.2rem .5rem' }} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && <div className="mobile-menu">{items('')}</div>}
    </>
  )
}
