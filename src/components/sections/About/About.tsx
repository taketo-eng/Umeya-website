import React from 'react'
import styles from "@/styles/common.module.scss"
import { MainTitle } from '@/components/parts/MainTitle'
import { VeilOpen } from '@/components/animations/VeilOpen'
import Image from 'next/image'
import { FadeInUp } from '@/components/animations/FadeInUp'
import { getSetting } from '@/helpers/getSetting'
import { getCurrentLocale } from '@/locales/server'

export const About = async () => {
    const lang = await getCurrentLocale()
    const setting = await getSetting()

    let title = "梅屋とは"
    switch(lang) {
        case "en":
            title = "About"
            break;
    }

    return (
        <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={title} titleEn="About" />
                <div className="md:px-4 px-0">
                    <div className={`${styles.row}`}>
                        <VeilOpen>
                            <Image src={setting.about_image.url} width={setting.about_image.height} height={setting.about_image.width} alt="梅屋とは" />
                        </VeilOpen>
                        <div>
                            <FadeInUp>
                                <div
                                    className={styles.text}
                                    dangerouslySetInnerHTML={{
                                    __html: lang == 'en' ? setting.about_content_en : setting.about_content,
                                    }}
                                />
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    }
