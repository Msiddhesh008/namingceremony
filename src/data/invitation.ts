export type Language = 'mr' | 'en'

export interface InvitationCopy {
  ganesh: string
  title: string
  titleEnglish: string
  tagline: string
  greeting: string
  blessing: string
  poem: string
  babyQuote: string
  fairyLabel: string
  tapToSwing: string
  dateLabel: string
  dateValue: string
  timeLabel: string
  timeValue: string
  venueLabel: string
  venueValue: string
  addToCalendar: string
  openMaps: string
  cousinsRibbon: string
  cousinsNames: string
  hostsLabel: string
  hostsNames: string
  contactLabel: string
  shareWhatsApp: string
  shareMessage: string
  languageToggle: string
  footerNote: string
  tapToOpen: string
  muteMusic: string
  playMusic: string
  coverHint: string
}

export const invitationMeta = {
  startISO: '2026-11-01T17:30:00+05:30',
  endISO: '2026-11-01T19:30:00+05:30',
  icsStart: '20261101T173000',
  icsEnd: '20261101T193000',
  timezone: 'Asia/Kolkata',
  phones: ['+919004440992', '+918291495598'],
  phoneDisplay: ['+91 90044 40992', '+91 82914 95598'],
  mapsQuery:
    'Ganesh Niwas, 707, 7th Floor, New Link Road, Near Oshiwara Metro, Jogeshwari West, Mumbai 400102',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Ganesh Niwas, 707, New Link Road, Near Oshiwara Metro, Jogeshwari West, Mumbai 400102',
    ),
} as const

export const cousinNames: Record<Language, string[]> = {
  mr: ['अमायरा', 'सार्वा', 'माऊ', 'रुद्र', 'शौर्य'],
  en: ['Amayra', 'Sarvi', 'Mau', 'Rudra', 'Shaurya'],
}

export const copy: Record<Language, InvitationCopy> = {
  mr: {
    ganesh: '|| श्री गणेशाय नम: ||',
    title: 'नामकरण सोहळा',
    titleEnglish: 'NAMING CEREMONY',
    tagline: 'आमची लाडकी परी घरात अवतरली आहे',
    greeting: 'सस्नेह नमस्कार,',
    blessing: 'तुमचे आशीर्वादच सर्वात मोठं दान',
    poem:
      'घरात अवतरली चिमूकली परी,\nआता वेळ आली आहे तिच्या नामकरणाची!',
    babyQuote:
      'माझं नाव काय ठेवणार? गुपित अजून उघड व्हायचंय… चला तर मग, माझ्या बारशाच्या दिवशी भेटूया!',
    fairyLabel: 'आमची लाडकी परी',
    tapToSwing: 'पलना हलवण्यासाठी स्पर्श करा',
    dateLabel: 'दिनांक',
    dateValue: 'रविवार, ०१/११/२०२६',
    timeLabel: 'वेळ',
    timeValue: 'सायंकाळी ५.३० वाजता',
    venueLabel: 'पत्ता',
    venueValue:
      'गणेश निवास, ७०७, ७ मजला, न्यू लिंक रोड, ओशिवरा मेट्रो जवळ, जोगेश्वरी पश्चिम, मुंबई ४००१०२',
    addToCalendar: 'कॅलेंडरमध्ये जोडा',
    openMaps: 'नकाशा उघडा',
    cousinsRibbon: 'आमच्या छोट्या बहिणीचं नाव ठेवायला यायचं हा',
    cousinsNames: '(अमायरा, सार्वा, माऊ, रुद्र आणि शौर्य)',
    hostsLabel: 'निमंत्रक',
    hostsNames:
      'श्री. आशिष अजित येरुणकर आणि सौ. मिनल आशिष येरुणकर',
    contactLabel: 'संपर्क',
    shareWhatsApp: 'WhatsApp वर शेअर करा',
    shareMessage:
      'नामकरण सोहळा निमंत्रण — रविवार, ०१/११/२०२६ सायं. ५.३० वाजता, जोगेश्वरी पश्चिम. आमोदाची वाट पहात आहोत!',
    languageToggle: 'English',
    footerNote: 'प्रेमाने निमंत्रित',
    tapToOpen: 'उघडण्यासाठी स्पर्श करा',
    muteMusic: 'संगीत बंद',
    playMusic: 'संगीत चालू',
    coverHint: 'डिजिटल निमंत्रण पत्रिका',
  },
  en: {
    ganesh: '|| Shri Ganeshaya Namah ||',
    title: 'Naming Ceremony',
    titleEnglish: 'NAMKARAN SOHALA',
    tagline: 'Our little fairy has arrived home',
    greeting: 'With warm regards,',
    blessing: 'Your blessings are the most precious gift',
    poem:
      'A little fairy has arrived in our home,\nNow it is time for her naming ceremony!',
    babyQuote:
      'What will my name be? The secret is yet to be revealed… Come, meet me on my naming day!',
    fairyLabel: 'Our beloved fairy',
    tapToSwing: 'Tap to swing the cradle',
    dateLabel: 'Date',
    dateValue: 'Sunday, 01/11/2026',
    timeLabel: 'Time',
    timeValue: '5:30 PM',
    venueLabel: 'Venue',
    venueValue:
      'Ganesh Niwas, 707, 7th Floor, New Link Road, Near Oshiwara Metro, Jogeshwari West, Mumbai 400102',
    addToCalendar: 'Add to Calendar',
    openMaps: 'Open in Maps',
    cousinsRibbon: 'Come help name our little sister',
    cousinsNames: '(Amayra, Sarvi, Mau, Rudra & Shaurya)',
    hostsLabel: 'Hosted by',
    hostsNames: 'Mr. Ashish Ajit Yerunkar & Mrs. Minal Ashish Yerunkar',
    contactLabel: 'Contact',
    shareWhatsApp: 'Share on WhatsApp',
    shareMessage:
      "You're invited to our Naming Ceremony — Sunday, 01/11/2026 at 5:30 PM, Jogeshwari West. We look forward to celebrating with you!",
    languageToggle: 'मराठी',
    footerNote: 'With love, you are invited',
    tapToOpen: 'Tap to open',
    muteMusic: 'Mute music',
    playMusic: 'Play music',
    coverHint: 'Digital invitation card',
  },
}
