import styles from "@/styles/common.module.scss"
import { FadeInUp } from '@/components/animations/FadeInUp'
import { VeilOpen } from '@/components/animations/VeilOpen'
import { MainTitle } from '@/components/parts/MainTitle'
import Image from 'next/image'
import React from 'react'
import { getCurrentLocale } from "@/locales/server"
import { getSetting } from "@/helpers/getSetting"

export const BackgroundSection = async () => {
  const lang = await getCurrentLocale()
  const { bg_image, bg_content, bg_content_en } = await getSetting()

  let title = "再オープンの背景"
  switch(lang) {
    case "en":
      title = "Background"
      break;
  }

  return (
    <section id="background" className="py-8 md:py-10">
      <div className="w-base max-w-7xl mx-auto">
        <MainTitle isAnim title={title} titleEn="Background" />
        <div className="md:px-4 px-0">
          <div className={`${styles.row} ${styles.reverse}`}>
            <VeilOpen>
              <Image src={bg_image.url} width={bg_image.width} height={bg_image.height} alt={`Image of ${title}`} />
            </VeilOpen>
            <div>
              <FadeInUp>
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: lang == 'en' ? bg_content_en : bg_content,
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
