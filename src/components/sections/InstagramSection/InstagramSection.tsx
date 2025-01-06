import { InstagramGallery } from '@/components/parts/InstagramGallery'
import { MainTitle } from '@/components/parts/MainTitle'
import { getCurrentLocale } from '@/locales/server'
import React from 'react'

export const InstagramSection = async () => {
    const lang = await getCurrentLocale()

    let title = "インスタグラム"
    switch(lang) {
        case "en":
            title = "Instagram"
            break;
    }

    return (
        <section id="instagram" className="pb-16 pt-8 md:pb-20 md:pt-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={title} titleEn="Instagram" />
                <InstagramGallery />
            </div>
        </section>
    )
}
