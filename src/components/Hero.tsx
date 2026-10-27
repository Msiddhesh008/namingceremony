import { motion, useAnimationControls } from 'framer-motion'
import { useCallback, useEffect, useRef, type KeyboardEvent } from 'react'
// import coupleImg from '@/assets/couple.png'
import cradleImg from '@/assets/cradle-baby.jpg'
// import ganeshaImg from '@/assets/ganesha.jpg'
import { Divider } from '@/components/Divider'
import { Petals } from '@/components/Petals'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const cradleControls = useAnimationControls()
  const isSwinging = useRef(false)

  const startIdleRock = useCallback(() => {
    void cradleControls.start({
      rotate: [-1.4, 1.4, -1.4],
      transition: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
    })
  }, [cradleControls])

  useEffect(() => {
    startIdleRock()
  }, [startIdleRock])

  const swingCradle = useCallback(async () => {
    if (isSwinging.current) return
    isSwinging.current = true
    cradleControls.stop()
    await cradleControls.start({
      rotate: [-8, 8, -5, 5, -2, 2, 0],
      transition: { duration: 3.6, ease: 'easeInOut' },
    })
    isSwinging.current = false
    startIdleRock()
  }, [cradleControls, startIdleRock])

  const onCradleKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      void swingCradle()
    }
  }

  return (
    <header className="hero" id="top">
      <Petals />
      {/* <motion.div
        className="hero-ganesha-wrap"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65 }}
      >
        <img src={ganeshaImg} alt="Lord Ganesha" className="hero-ganesha" />
      </motion.div> */}

      <motion.p
        className="hero-ganesh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        {t.ganesh}
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55 }}
      >
        {t.title}
      </motion.h1>
      <p className="hero-title-en">{t.titleEnglish}</p>

      <Divider />

      <p className="hero-tagline">{t.tagline}</p>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.65 }}
      >
        <div className="hero-glow" aria-hidden="true" />
        {/* Couple photo kept for later use
        <motion.img
          src={coupleImg}
          alt="Ashish and Minal Yerunkar"
          className="hero-couple"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        */}
        <motion.img
          src={cradleImg}
          alt={`${t.fairyLabel}. ${t.tapToSwing}`}
          title={t.tapToSwing}
          className="hero-cradle"
          role="button"
          tabIndex={0}
          animate={cradleControls}
          onClick={() => void swingCradle()}
          onKeyDown={onCradleKeyDown}
        />
      </motion.div>
    </header>
  )
}
