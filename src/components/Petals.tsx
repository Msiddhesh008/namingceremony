import { motion } from 'framer-motion'
import marigold from '@/assets/flowers/marigold.svg'
import marigold2 from '@/assets/flowers/marigold2.svg'
import rose from '@/assets/flowers/rose.svg'

const FLOWERS = [marigold, rose, marigold2]

const FALLING = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  src: FLOWERS[i % FLOWERS.length],
  left: `${3 + ((i * 5) % 94)}%`,
  delay: (i % 10) * 0.35,
  duration: 5.5 + (i % 6) * 0.9,
  size: 22 + (i % 6) * 6,
  drift: (i % 2 === 0 ? 1 : -1) * (18 + (i % 5) * 8),
  fall: 520 + (i % 5) * 40,
}))

export function Petals() {
  return (
    <div className="hero-petals" aria-hidden="true">
      {FALLING.map((p) => (
        <motion.img
          key={p.id}
          src={p.src}
          alt=""
          className="petal-img"
          style={{ left: p.left, width: p.size, height: p.size }}
          initial={{ y: -120, opacity: 0, rotate: 0 }}
          animate={{
            y: [-120, p.fall],
            opacity: [0, 1, 1, 0],
            rotate: [0, p.drift, p.drift * 2.4],
            x: [0, p.drift * 0.6, p.drift * -0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.1, 0.85, 1],
          }}
        />
      ))}
    </div>
  )
}
