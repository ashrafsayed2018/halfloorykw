"use client"
import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext({ lang: 'ar', toggleLang: () => {} })

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    if (saved === 'en' || saved === 'ar') setLang(saved)
  }, [])

  const toggleLang = () => {
    const next = lang === 'ar' ? 'en' : 'ar'
    setLang(next)
    if (typeof window !== 'undefined') localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)