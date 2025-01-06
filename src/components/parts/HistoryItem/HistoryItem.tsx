'use client'
import { useCurrentLocale } from '@/locales/client'
import { History } from '@/types/common'
import React from 'react'

export const HistoryItem = ({history}: {history: History}) => {
    const lang = useCurrentLocale()
    return (
        <li>
            <h3>{lang == 'en' ? history.title_en : history.title}</h3>
            <div
            dangerouslySetInnerHTML={{
                __html: lang == 'en' ? history.content_en : history.content,
            }}
            />
        </li>
    )
}
