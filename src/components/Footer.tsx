import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <motion.footer
      className="section footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <p className="footer-blessing">{t.blessing}</p>
      <p className="footer-note">{t.footerNote}</p>
    </motion.footer>
  )
}
