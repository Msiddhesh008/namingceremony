import { useLanguage } from '@/context/LanguageContext'
import { useMusic } from '@/context/MusicContext'

export function MusicToggle() {
  const { t } = useLanguage()
  const { isMuted, toggleMute } = useMusic()

  return (
    <button
      type="button"
      className="premium-btn premium-btn-outline music-toggle"
      onClick={toggleMute}
      aria-label={isMuted ? t.playMusic : t.muteMusic}
      title={isMuted ? t.playMusic : t.muteMusic}
    >
      <span className="premium-btn-inner">{isMuted ? <MutedIcon /> : <SoundIcon />}</span>
    </button>
  )
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" />
    </svg>
  )
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="m22 9-6 6M16 9l6 6" />
    </svg>
  )
}
