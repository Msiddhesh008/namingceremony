import { motion } from 'framer-motion'

export function Garland() {
  const blooms = Array.from({ length: 11 }, (_, i) => i)

  return (
    <div className="garland" aria-hidden="true">
      <div className="garland-rope" />
      {blooms.map((i) => (
        <motion.span
          key={i}
          className={`garland-bloom bloom-${i % 3}`}
          style={{ left: `${8 + i * 8.4}%` }}
          animate={{ rotate: [ -8, 8, -8 ], y: [0, 3, 0] }}
          transition={{
            duration: 2.4 + (i % 3) * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.08,
          }}
        />
      ))}
      {[2, 5, 8].map((i) => (
        <motion.span
          key={`bell-${i}`}
          className="garland-bell"
          style={{ left: `${8 + i * 8.4}%` }}
          animate={{ rotate: [-12, 12, -12] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  )
}
