import styles from "@/styles/common.module.scss"
import { FadeInUp } from '@/components/animations/FadeInUp'
import { VeilOpen } from '@/components/animations/VeilOpen'
import { MainTitle } from '@/components/parts/MainTitle'
import Image from 'next/image'
import React from 'react'
import { dictionary } from "@/libs/server/i18n"

export const BackgroundSection = async () => {
  const dict = (await dictionary())["Background"]

  return (
    <section id="background" className="py-8 md:py-10">
      <div className="w-base max-w-7xl mx-auto">
        <MainTitle isAnim title={dict["title"]} titleEn={"Background"} />
        <div className="md:px-4 px-0">
          <div className={`${styles.row} ${styles.reverse}`}>
            <VeilOpen>
              <Image className="md:hidden" src="/yabe_river_sp.webp" width={500} height={281} alt={`Image of ${dict['title']}`} />
              <Image className="hidden md:block" src="/yabe_river.webp" width={800} height={450} alt={`Image of ${dict["title"]}`} />
            </VeilOpen>
            <div>
              <FadeInUp>
                <div
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: dict["description"]
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
