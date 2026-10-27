import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { invitationMeta } from '@/data/invitation'

export function Hosts() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="section hosts"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="section-title">{t.hostsLabel}</h2>
      <p className="hosts-names">{t.hostsNames}</p>
      <div className="hosts-phones">
        {invitationMeta.phones.map((phone, i) => (
          <a key={phone} className="host-rsvp" href={`tel:${phone}`}>
            {t.contactLabel} · {invitationMeta.phoneDisplay[i]}
          </a>
        ))}
      </div>
    </motion.section>
  )
}
