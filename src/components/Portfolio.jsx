import { useEffect, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects } from '../data/projects'
import { certificates } from '../data/certificates'
import { techStack } from '../data/techStack'
import { useReveal } from '../hooks'
import PixelGhost from './PixelGhost'

const TABS = ['Projects', 'Certificates', 'Tech Stack']

function Media({ src, alt }) {
  return src ? <img src={src} alt={alt} loading="lazy" /> : <PixelGhost className="w-16 h-16" title={`${alt} placeholder`} />
}

function Projects() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
      {projects.map((p, i) => (
        <article key={p.id} className="item panel" style={{ animationDelay: `${i * 80}ms` }}>
          <div className="thumb"><Media src={p.thumbnail} alt={p.name} /></div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '.6rem', flex: 1 }}>
            <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{p.name}</h3>
            <p style={{ margin: 0, flex: 1 }}>{p.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
              <a className="btn btn-hover" style={{ padding: '.3rem .9rem', fontSize: '.9rem' }} href={p.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
              {p.demo && <a className="btn btn-hover" style={{ padding: '.3rem .9rem', fontSize: '.9rem' }} href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live demo</a>}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function Certificates() {
  const [open, setOpen] = useState(null)
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {certificates.map((c, i) => (
          <button key={c.id} className="item panel" style={{ animationDelay: `${i * 80}ms`, cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }} onClick={() => setOpen(c)} aria-label={`View ${c.title}`}>
            <div className="thumb" style={{ width: '100%' }}><Media src={c.image} alt={c.title} /></div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{c.title}</h3>
              <p style={{ margin: '.2rem 0 0' }}>{c.issuer}</p>
              <p style={{ margin: 0, opacity: .7, fontSize: '.9rem' }}>{c.date}</p>
            </div>
          </button>
        ))}
      </div>
      {open && (
        <div className="overlay" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={open.title}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.8rem', gap: '1rem' }}>
              <div><strong style={{ fontSize: '1.2rem' }}>{open.title}</strong><div>{open.issuer} · {open.date}</div></div>
              <button className="tab" style={{ padding: '.3rem' }} onClick={() => setOpen(null)} aria-label="Close" autoFocus><X size={20} /></button>
            </div>
            <div className="thumb" style={{ border: '2px solid var(--navy)', borderRadius: '.8rem' }}><Media src={open.image} alt={open.title} /></div>
            {open.link && <p><a className="btn btn-hover" href={open.link} target="_blank" rel="noreferrer"><ExternalLink size={16} />View credential</a></p>}
          </div>
        </div>
      )}
    </>
  )
}

function TechStack() {
  return (
    <div style={{ display: 'grid', gap: '1.8rem' }}>
      {techStack.map((g, i) => (
        <div key={g.category} className="panel" style={{ animationDelay: `${i * 80}ms` }}>
          <h3 style={{ margin: '0 0 .7rem', fontSize: '1.2rem' }}>{g.category}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem' }}>
            {g.items.map(([name, Icon]) => <div key={name} className="chip"><span className="ic"><Icon size={16} /></span>{name}</div>)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [tab, setTab] = useState(0)
  const ref = useReveal()
  return (
    <section id="portfolio" className="sec" ref={ref}>
      <div className="wrap">
        <div className="reveal">
          <h2 className="sec-title">Portfolio</h2>
          <p className="sec-sub">Things I've built, earned, and use.</p>
          <div role="tablist" aria-label="Portfolio categories" style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem', marginBottom: '2rem' }}>
            {TABS.map((t, i) => <button key={t} role="tab" id={`tab-${i}`} aria-selected={tab === i} aria-controls="tabpanel" className="tab" onClick={() => setTab(i)}>{t}</button>)}
          </div>
        </div>
        <div id="tabpanel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
          {tab === 0 && <Projects />}{tab === 1 && <Certificates />}{tab === 2 && <TechStack />}
        </div>
      </div>

    </section>
  )
}
