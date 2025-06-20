import { InstagramGallery } from '@/components/parts/InstagramGallery'
import { MainTitle } from '@/components/parts/MainTitle'
import { dictionary } from '@/libs/server/i18n'
import React from 'react'

export const InstagramSection = async () => {
    const dict = (await dictionary())["Instagram"]

    return (
        <section id="instagram" className="pb-16 pt-8 md:pb-20 md:pt-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={dict["title"]} titleEn={"Instagram"} />
                <InstagramGallery />
            </div>
        </section>
    )
}
