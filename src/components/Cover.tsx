import { motion } from 'framer-motion'
import ganeshaImg from '@/assets/ganesha.jpg'
import { useLanguage } from '@/context/LanguageContext'
import { useMusic } from '@/context/MusicContext'

export function Cover() {
  const { t, toggleLanguage } = useLanguage()
  const { openInvitation } = useMusic()

  return (
    <motion.div
      className="cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        className="cover-lang"
        onClick={(e) => {
          e.stopPropagation()
          toggleLanguage()
        }}
      >
        {t.languageToggle}
      </button>

      <button type="button" className="cover-open" onClick={openInvitation} aria-label={t.tapToOpen}>
        <div className="cover-inner">
          <motion.div
            className="cover-ganesha-wrap"
            animate={{
              scale: [1, 1.04, 1],
              filter: ['brightness(1)', 'brightness(1.12)', 'brightness(1)'],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={ganeshaImg} alt="" className="cover-ganesha" />
            <span className="cover-ganesha-glow" aria-hidden="true" />
          </motion.div>

          <p className="cover-ganesh-text">{t.ganesh}</p>
          <h1 className="cover-title">{t.title}</h1>
          <p className="cover-hint">{t.coverHint}</p>

          <motion.span
            className="cover-cta"
            animate={{ opacity: [0.65, 1, 0.65], y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t.tapToOpen}
          </motion.span>
        </div>
      </button>
    </motion.div>
  )
}
