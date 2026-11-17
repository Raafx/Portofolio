import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
  return ref
}

export function useTypewriter(words, { type = 90, del = 50, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  useEffect(() => {
    let i = 0, j = 0, deleting = false, t
    const tick = () => {
      const w = words[i]
      j += deleting ? -1 : 1
      setText(w.slice(0, j))
      let d = deleting ? del : type
      if (!deleting && j === w.length) { deleting = true; d = pause }
      else if (deleting && j === 0) { deleting = false; i = (i + 1) % words.length; d = 350 }
      t = setTimeout(tick, d)
    }
    t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [])
  return text
}
