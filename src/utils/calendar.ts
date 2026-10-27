import { invitationMeta } from '@/data/invitation'

export function downloadIcs() {
  const { icsStart, icsEnd, mapsQuery, timezone } = invitationMeta

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Namkaran Sohala//Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART;TZID=${timezone}:${icsStart}`,
    `DTEND;TZID=${timezone}:${icsEnd}`,
    'SUMMARY:Namkaran Sohala / Naming Ceremony',
    `DESCRIPTION:Naming ceremony of our little fairy. Venue: ${mapsQuery}`,
    `LOCATION:${mapsQuery.replace(/,/g, '\\,')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'namkaran-sohala.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function getWhatsAppShareUrl(message: string) {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
  const text = `${message}\n\n${pageUrl}`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}
