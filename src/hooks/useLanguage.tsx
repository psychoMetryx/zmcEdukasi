import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Lang } from '../i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLanguage(): Lang {
  if (typeof window === 'undefined') {
    return 'id'
  }

  return (window.localStorage.getItem('ui:lang') as Lang) || 'id'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('ui:lang', lang)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
