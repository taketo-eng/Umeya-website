import React from 'react'
import styles from "@/styles/common.module.scss"
import { MainTitle } from '@/components/parts/MainTitle'
import { FadeInUp } from '@/components/animations/FadeInUp'
import clsx from 'clsx'
import { dictionary, getLocale } from '@/libs/server/i18n'

export const Access = async () => {
    const dict = (await dictionary())["Access"]
    const locale = await getLocale()

    return (
        <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={dict["title"]} titleEn={locale === 'de' ? 'Anfahrt' : "Access"} />
                <div className="md:px-4 px-0">
                    <FadeInUp>
                        <div className="mb-8">
                            <address
                                className={clsx(`${styles.text} not-italic`, {
                                    "font-bold": locale === "en" || locale === "de",
                                    "font-medium": locale === "ja",
                                })}
                            >
                                {dict["address"]}
                            </address>
                            <p>
                                {dict["accessMethod"]}
                                <br />
                                {dict["parking"]}
                            </p>
                        </div>
                    </FadeInUp>
                    <div>
                        <div className={`${styles.access_wrapper}`}>
                            <div className="w-full pt-[100%] relative md:pt-[72%]">
                                <iframe
                                    title="Umeya Google Map"
                                    className="absolute w-full h-full inset-0 border-none"
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.5138870645227!2d130.67101151153!3d33.21263992720276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541087eea76d23d%3A0x93658f51ad481975!2z44CSODM0LTEyMTcg56aP5bKh55yM5YWr5aWz5biC6buS5pyo55S66buS5pyo77yT77yX!5e0!3m2!1sja!2sjp!4v1680924060602!5m2!1s${locale}!2sjp`}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
