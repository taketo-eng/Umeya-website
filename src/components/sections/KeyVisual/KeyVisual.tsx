import { dictionary, getLocale } from '@/libs/server/i18n'
import Image from 'next/image'
import React from 'react'



export const KeyVisual = async () => {
    const locale = await getLocale()
    const dict = (await dictionary())["KeyVisual"]

    return (
        <div className="keyvisual">
            <div>
                <Image className="w-full md:hidden" alt="古民家梅屋キービジュアル SP" width={500} height={756} src="/kv/kv_sp.webp" loading="eager" priority />
                <Image className="w-full hidden md:block" alt="古民家梅屋キービジュアル PC" width={1915} height={957} src="/kv/kv.webp" loading="eager" priority />
            </div>
            <div className={`catch ${locale !== "ja" ? "non-jp" : ''}`}>
                <p
                    className="font-serif"
                    dangerouslySetInnerHTML={{
                        __html: dict["title"]
                    }}
                />
            </div>
        </div>
    )
}
