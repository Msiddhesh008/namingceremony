import { motion } from 'framer-motion'
import { Divider } from '@/components/Divider'
import { useLanguage } from '@/context/LanguageContext'

export function Message() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="section message"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <p className="message-greeting">{t.greeting}</p>
      <p className="message-poem">{t.poem}</p>
      <p className="message-fairy">{t.fairyLabel}</p>
      <p className="message-quote">{t.babyQuote}</p>
      <Divider />
    </motion.section>
  )
}
