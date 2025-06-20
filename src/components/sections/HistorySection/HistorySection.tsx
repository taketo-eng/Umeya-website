import { FadeInUp } from '@/components/animations/FadeInUp'
import { MainTitle } from '@/components/parts/MainTitle'
import React from 'react'
import styles from "@/styles/common.module.scss"
import { VeilOpen } from '@/components/animations/VeilOpen'
import Image from 'next/image'
import { HistoryItem } from '@/components/parts/HistoryItem'
import { dictionary } from '@/libs/server/i18n'

export const HistorySection = async () => {
    const dict = (await dictionary())["History"]

    return (
        <section id="history" className="py-8 md:py-10">
            <div className=" w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={dict["title"]} titleEn={"History"} />
                <div className="md:px-4 px-0">
                    <div className={styles.history_container}>
                        <FadeInUp>
                            <ul className={styles.history_list}>
                                {dict["historyList"] && dict["historyList"].map((history) => <HistoryItem key={history["title"]} title={history["title"]} content={history["content"]} />)}
                            </ul>
                        </FadeInUp>

                        <VeilOpen moduleStyles={styles.history_image}>
                            <Image className="md:hidden" src="/history_sp.webp" width={500} height={358} alt="history" />
                            <Image className="hidden md:block" src="/history.webp" width={800} height={572} alt="history" />
                        </VeilOpen>
                    </div>
                </div>
            </div>
        </section>
    )
}
