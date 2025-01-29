import { getSetting } from '@/helpers/getSetting'
import { getCurrentLocale } from '@/locales/server'
import Image from 'next/image'
import React from 'react'



export const KeyVisual = async () => {
    const lang = await getCurrentLocale()
    const settings = await getSetting()

    return (
        <div className="keyvisual">
            {/* <picture>
                <source media="(max-width:767px)" width="500" height="800" srcSet={settings.kv_sp.url} />
                <img loading="lazy" width="1920" height="1080" className="w-full" src={settings.kv_pc.url} alt="" />
            </picture> */}
            <div>
                <Image className="w-full md:hidden" alt="古民家梅屋キービジュアル SP" width={settings.kv_sp.width} height={settings.kv_sp.height} src={settings.kv_sp.url} blurDataURL={`${settings.kv_sp.url}?w=10&q=10`} />
                <Image className="w-full hidden md:block" alt="古民家梅屋キービジュアル PC" width={settings.kv_pc.width} height={settings.kv_pc.height} src={settings.kv_pc.url} blurDataURL={`${settings.kv_pc.url}?w=10&q=10`} />
            </div>
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
