import { getSetting } from '@/helpers/getSetting'
import { getCurrentLocale } from '@/locales/server'
import React from 'react'



export const KeyVisual = async () => {
    const lang = await getCurrentLocale()
    const settings = await getSetting()

    return (
        <div className="keyvisual">
            <picture>
            <source media="(max-width:767px)" width="500" height="800" srcSet={settings.kv_sp.url} />
            <img width="1920" height="1080" className="w-full" src={settings.kv_pc.url} alt="" />
            </picture>
            <div className={`catch ${lang}`}>
            <p
                className="font-serif"
                dangerouslySetInnerHTML={{
                __html: lang == 'en' ? settings.catch_phrase_en : settings.catch_phrase,
                }}
            />
            </div>
        </div>
    )
}
