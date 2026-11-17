const ROWS = [
  '.....######.....',
  '...##......##...',
  '..#..........#..',
  '..#..........#..',
  '.#............#.',
  '.#...##..##...#.',
  '.#...##..##...#.',
  '.#............#.',
  '.#.....##.....#.',
  '.#............#.',
  '.#............#.',
  '.#............#.',
  '.#............#.',
  '.#.##..##..##.#.',
  '.##..##..##..##.',
]
export default function PixelGhost({ className = '', title = 'RAAFX pixel ghost mascot' }) {
  return (
    <svg viewBox="0 0 16 15" className={className} role="img" aria-label={title} shapeRendering="crispEdges" style={{ imageRendering: 'pixelated' }}>
      {ROWS.map((row, y) => row.padEnd(16, '.').split('').map((c, x) => {
        if (c === '#') return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="var(--navy)" />
        if (c === '.' && y > 1 && x > 1 && x < 14 && y < 14) return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="var(--cream)" />
        return null
      }))}
    </svg>
  )
}
