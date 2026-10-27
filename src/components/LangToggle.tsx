import { MusicToggle } from '@/components/MusicToggle'
import { useLanguage } from '@/context/LanguageContext'

export function LangToggle() {
  const { t, language, toggleLanguage } = useLanguage()

  return (
    <div className="floating-controls">
      <MusicToggle />
      <button
        type="button"
        className="premium-btn premium-btn-outline lang-toggle"
        onClick={toggleLanguage}
        aria-label={`Switch to ${t.languageToggle}`}
        title={t.languageToggle}
      >
        <span className="premium-btn-inner">
          <LangIcon active={language} />
        </span>
      </button>
    </div>
  )
}

function LangIcon({ active }: { active: 'mr' | 'en' }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 12h15M12 3.5c2.4 2.8 3.6 6 3.6 8.5s-1.2 5.7-3.6 8.5M12 3.5C9.6 6.3 8.4 9.5 8.4 12s1.2 5.7 3.6 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="14.2" y="14.2" width="7.2" height="7.2" rx="1.4" fill="currentColor" />
      <text
        x="17.8"
        y="19.5"
        textAnchor="middle"
        fontSize="5.2"
        fontWeight="700"
        fill="#fffaf2"
        fontFamily="system-ui, sans-serif"
      >
        {active === 'mr' ? 'A' : 'अ'}
      </text>
    </svg>
  )
}
