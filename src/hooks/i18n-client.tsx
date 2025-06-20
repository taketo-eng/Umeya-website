'use client'

import { createContext, useContext } from 'react'
import { type LanguageObject } from '@/libs/server/i18n'

const I18nContext = createContext({} as {
  dictionary: LanguageObject;
  locale: string;
})

export function I18nProvider({ children, dictionary, locale }: { children: React.ReactNode, dictionary: LanguageObject, locale: string }) {
  return (
    <I18nContext.Provider value={{ dictionary, locale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useDictionary() {
  return useContext(I18nContext).dictionary
}

export function useLocale() {
  return useContext(I18nContext).locale
}