import { motion } from 'framer-motion'
import { CardDecor } from '@/components/CardDecor'
import { Cover } from '@/components/Cover'
import { Cousins } from '@/components/Cousins'
import { EventDetails } from '@/components/EventDetails'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Hosts } from '@/components/Hosts'
import { LangToggle } from '@/components/LangToggle'
import { Message } from '@/components/Message'
import { LanguageProvider } from '@/context/LanguageContext'
import { MusicProvider, useMusic } from '@/context/MusicContext'

function InvitationCard() {
  const { isOpen } = useMusic()

  return (
    <div className="app-shell">
      {!isOpen ? (
        <Cover />
      ) : (
        <motion.div
          className="app-column invite-card"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <CardDecor />
          <LangToggle />
          <div className="invite-body">
            <Hero />
            <Message />
            <EventDetails />
            <Cousins />
            <Hosts />
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MusicProvider>
        <InvitationCard />
      </MusicProvider>
    </LanguageProvider>
  )
}
