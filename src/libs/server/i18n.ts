import { cache } from 'react'
import { headers } from 'next/headers'
import ja from '@/locales/ja.json'
import en from '@/locales/en.json'
import de from '@/locales/de.json'

export const getLocale = cache(async () => {
  const h = await headers()
  return h.get('x-locale') || 'en'
})

export const setLocale = cache(async (locale: string) => {
  const h = await headers()
  h.set('x-locale', locale)
})

export const dictionary = cache(async () => {
  const locale = await getLocale()
  switch (locale) {
    case 'ja':
      return ja
    case 'en':
      return en
    case 'de':
      return de
    default:
      return en
  }
})

export type LanguageObject = typeof ja