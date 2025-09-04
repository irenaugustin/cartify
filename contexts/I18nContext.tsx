'use client'

import { createContext, useContext, useState, ReactNode } from "react"

type I18nContextType = {
  language: "en" | "sw"
  toggleLanguage: () => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "sw">("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en")
  }

  return (
    <I18nContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
