import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { copy, type InvitationCopy, type Language } from '@/data/invitation'

const STORAGE_KEY = 'namkaran-lang'

interface LanguageContextValue {
  language: Language
  t: InvitationCopy
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
)

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'mr' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  return 'mr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage)

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'mr' ? 'en' : 'mr')
  }, [language, setLanguage])

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en'
    document.title =
      language === 'mr'
        ? 'नामकरण सोहळा | Naming Ceremony'
        : 'Naming Ceremony | नामकरण सोहळा'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      t: copy[language],
      toggleLanguage,
      setLanguage,
    }),
    [language, toggleLanguage, setLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
