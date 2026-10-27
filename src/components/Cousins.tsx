import { motion } from 'framer-motion'
import { Divider } from '@/components/Divider'
import { useLanguage } from '@/context/LanguageContext'
import { cousinNames } from '@/data/invitation'

export function Cousins() {
  const { t, language } = useLanguage()
  const names = cousinNames[language]

  return (
    <motion.section
      className="section cousins"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      <Divider />
      <p className="cousins-text">{t.cousinsRibbon}</p>
      <div className="cousin-chips">
        {names.map((name) => (
          <span key={name} className="cousin-chip">
            {name}
          </span>
        ))}
      </div>
    </motion.section>
  )
}
