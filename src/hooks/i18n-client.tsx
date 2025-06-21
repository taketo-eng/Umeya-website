'use client'

import { createContext, useContext } from 'react'
import { type LanguageObject } from '@/libs/server/i18n'
import { Language } from '@/types/common';

const I18nContext = createContext({} as {
  dictionary: LanguageObject;
  locale: Language;
})

export function I18nProvider({ children, dictionary, locale }: { children: React.ReactNode, dictionary: LanguageObject, locale: Language }) {
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