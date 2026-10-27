import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { enterFullscreen } from '@/utils/fullscreen'

const MUTE_KEY = 'namkaran-music-muted'

interface MusicContextValue {
  isOpen: boolean
  isPlaying: boolean
  isMuted: boolean
  openInvitation: () => void
  toggleMute: () => void
}

const MusicContext = createContext<MusicContextValue | undefined>(undefined)

function readMuted(): boolean {
  try {
    return localStorage.getItem(MUTE_KEY) === '1'
  } catch {
    return false
  }
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(readMuted)

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/bg-music.mp3`)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.18
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = isMuted
  }, [isMuted])

  const openInvitation = useCallback(() => {
    setIsOpen(true)
    setIsMuted(false)
    try {
      localStorage.setItem(MUTE_KEY, '0')
    } catch {
      /* ignore */
    }
    void enterFullscreen()
    const audio = audioRef.current
    if (!audio) return
    audio.muted = false
    void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev
      try {
        localStorage.setItem(MUTE_KEY, next ? '1' : '0')
      } catch {
        /* ignore */
      }
      const audio = audioRef.current
      if (audio) {
        audio.muted = next
        if (!next && isOpen) {
          void audio.play().then(() => setIsPlaying(true)).catch(() => undefined)
        }
      }
      return next
    })
  }, [isOpen])

  const value = useMemo(
    () => ({ isOpen, isPlaying, isMuted, openInvitation, toggleMute }),
    [isOpen, isPlaying, isMuted, openInvitation, toggleMute],
  )

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
