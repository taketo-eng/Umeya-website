import { FadeInUp } from '@/components/animations/FadeInUp'
import { MainTitle } from '@/components/parts/MainTitle'
import React from 'react'
import styles from "@/styles/common.module.scss"
import { getCurrentLocale } from '@/locales/server'
import { VeilOpen } from '@/components/animations/VeilOpen/VeilOpen'
import Image from 'next/image'
import { History } from '@/types/common'
import { getSetting } from '@/helpers/getSetting'

const HistoryItem = ({history, lang}: {history: History, lang: string}) => {
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

export const HistorySection = async () => {
    const lang = await getCurrentLocale()
    const { history_data, history_image } = await getSetting()

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
                        {history_data && history_data.map((history, index) => <HistoryItem key={index} history={history} lang={lang} />)}
                    </ul>
                </FadeInUp>

                <VeilOpen moduleStyles={styles.history_image}>
                    <Image src={history_image.url} width={history_image.width} height={history_image.height} alt="history" />
                </VeilOpen>
                </div>
            </div>
            </div>
        </section>
    )
}
