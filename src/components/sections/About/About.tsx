import React from 'react'
import styles from "@/styles/common.module.scss"
import { MainTitle } from '@/components/parts/MainTitle'
import { VeilOpen } from '@/components/animations/VeilOpen'
import Image from 'next/image'
import { FadeInUp } from '@/components/animations/FadeInUp'
import { dictionary, getLocale } from '@/libs/server/i18n'

export const About = async () => {
    const dict = (await dictionary())["About"]
    const locale = await getLocale()

    return (

        <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={dict["title"]} titleEn={locale === 'de' ? "Über uns" : "About"} />
                <div className="md:px-4 px-0">
                    <div className={`${styles.row}`}>
                        <VeilOpen>
                            <Image className="w-full md:hidden" alt="梅屋とは SP" width={500} height={316} src="/about_sp.webp" />
                            <Image className="w-full hidden md:block" alt="梅屋とは PC" width={800} height={505} src="/about.webp" />
                        </VeilOpen>
                        <div>
                            <FadeInUp>
                                <div>
                                    <p className={styles.text}>
                                        {dict["description"]}
                                    </p>
                                </div>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
