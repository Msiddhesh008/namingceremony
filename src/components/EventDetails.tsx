import { motion } from 'framer-motion'
import { PremiumButton, PremiumLink } from '@/components/PremiumButton'
import { useLanguage } from '@/context/LanguageContext'
import { invitationMeta } from '@/data/invitation'
import { downloadIcs } from '@/utils/calendar'

export function EventDetails() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="section details"
      id="details"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="details-split">
        <div className="details-col">
          <span className="details-kicker">{t.dateLabel}</span>
          <strong className="details-main">{t.dateValue}</strong>
        </div>
        <div className="details-rule" aria-hidden="true" />
        <div className="details-col">
          <span className="details-kicker">{t.timeLabel}</span>
          <strong className="details-main">{t.timeValue}</strong>
        </div>
      </div>

      <div className="details-venue">
        <span className="details-kicker">{t.venueLabel}</span>
        <strong className="details-venue-text">{t.venueValue}</strong>
      </div>

      <div className="btn-row">
        <PremiumButton variant="magenta" onClick={downloadIcs}>
          {t.addToCalendar}
        </PremiumButton>
        <PremiumLink
          as="a"
          variant="outline"
          href={invitationMeta.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.openMaps}
        </PremiumLink>
      </div>
    </motion.section>
  )
}
