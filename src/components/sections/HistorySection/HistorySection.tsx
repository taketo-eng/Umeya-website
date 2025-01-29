import { FadeInUp } from '@/components/animations/FadeInUp'
import { MainTitle } from '@/components/parts/MainTitle'
import React from 'react'
import styles from "@/styles/common.module.scss"
import { getCurrentLocale } from '@/locales/server'
import { VeilOpen } from '@/components/animations/VeilOpen'
import Image from 'next/image'
import { getSetting } from '@/helpers/getSetting'
import { HistoryItem } from '@/components/parts/HistoryItem'

export const HistorySection = async () => {
    const lang = await getCurrentLocale()
    const { history_data, history_image, history_image_sp } = await getSetting()

    let title = "梅屋の歴史"
    switch(lang) {
        case "en":
            title = "History"
            break;
    }

    return (
        <section id="history" className="py-8 md:py-10">
            <div className=" w-base max-w-7xl mx-auto">
            <MainTitle isAnim title={title} titleEn="History" />
            <div className="md:px-4 px-0">
                <div className={styles.history_container}>
                <FadeInUp>
                    <ul className={styles.history_list}>
                        {history_data && history_data.map((history, index) => <HistoryItem key={index} history={history} />)}
                    </ul>
                </FadeInUp>

                <VeilOpen moduleStyles={styles.history_image}>
                    <Image className="md:hidden" src={history_image_sp.url} width={history_image_sp.width} height={history_image_sp.height} alt="history" />
                    <Image className="hidden md:block" src={history_image.url} width={history_image.width} height={history_image.height} alt="history" />
                </VeilOpen>
                </div>
            </div>
            </div>
        </section>
    )
}
