import { MainTitle } from "@/components/parts/MainTitle"
import styles from "@/styles/common.module.scss"
import Image from "next/image"
import { client } from "@/libs/microcms"
import { Schedule } from "@/types/common"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { FadeInUp } from "@/components/animations/FadeInUp"
import { FadeIn } from "@/components/animations/FadeIn/FadeIn"
import { VeilOpen } from "@/components/animations/VeilOpen/VeilOpen"

import { getI18n, getCurrentLocale } from "@/locales/server"
import { ScheduleCalendar } from "@/components/parts/ScheduleCalendar"
import clsx from "clsx"
import { Metadata, ResolvingMetadata } from "next"
import { getMetadata } from "@/libs/metadata"
import { InstagramGallery } from "@/components/parts/InstagramGallery"

export function generateMetadata(): Metadata {
  const lang = getCurrentLocale()
  return getMetadata(lang)
}

const getSchedules = async () => {
  const data = await client.get({
    endpoint: "schedule",
  })
  return data.schedules
}

const Page = async () => {
  const t = await getI18n()
  const lang = getCurrentLocale()
  const schedules: Schedule[] = await getSchedules()

  return (
    <>
      <div className="keyvisual">
        <picture>
          <source media="(max-width:767px)" width="500" height="800" srcSet="kv_sp.webp" />
          <img width="1920" height="1080" className="w-full" src="kv.webp" alt="" />
        </picture>
        <div className={`catch ${lang}`}>
          <FadeIn>
            <p
              className="font-serif"
              dangerouslySetInnerHTML={{
                __html: t("info.catch_phrase"),
              }}
            />
          </FadeIn>
        </div>
      </div>
      <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title={t("about.title")} titleEn="About" />
          <div className="md:px-4 px-0">
            <div className={`${styles.row}`}>
              <VeilOpen>
                <Image src="/about.webp" width={1200} height={675} alt="" />
              </VeilOpen>
              <div>
                <FadeInUp>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                      __html: t("about.desc"),
                    }}
                  />
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="history" className="py-8 md:py-10">
        <div className=" w-base max-w-7xl mx-auto">
          <MainTitle isAnim title={t("history.title")} titleEn="History" />
          <div className="md:px-4 px-0">
            <div className={styles.history_container}>
              <FadeInUp>
                <ul className={styles.history_list}>
                  <li>
                    <h3>{t("history.meiji.title")}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t("history.meiji.desc"),
                      }}
                    />
                  </li>
                  <li>
                    <h3>{t("history.taisho.title")}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t("history.taisho.desc"),
                      }}
                    />
                  </li>
                  <li>
                    <h3>{t("history.showa.title")}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t("history.showa.desc"),
                      }}
                    />
                  </li>
                </ul>
              </FadeInUp>

              <VeilOpen moduleStyles={styles.history_image}>
                <Image src="/history.webp" width={1107} height={792} alt="history" />
              </VeilOpen>
            </div>
          </div>
        </div>
      </section>
      <section id="background" className="py-8 md:py-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title={t("background.title")} titleEn="Background" />
          <div className="md:px-4 px-0">
            <div className={`${styles.row} ${styles.reverse}`}>
              <VeilOpen>
                <Image src="/yabe_river.webp" width={1200} height={675} alt="" />
              </VeilOpen>
              <div>
                <FadeInUp>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                      __html: t("background.desc"),
                    }}
                  />
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title={t("access_schedule.title")} titleEn="Access & Schedule" />
          <div className="md:px-4 px-0">
            <FadeInUp>
              <div className="mb-8">
                <address
                  className={clsx(`${styles.text} not-italic`, {
                    "font-bold": lang === "en",
                    "font-medium": lang === "ja",
                  })}
                >
                  {t("access_schedule.address")}
                </address>
                <p>
                  {t("access_schedule.note")}
                  <br />
                  {t("access_schedule.car_park")}
                </p>
              </div>
            </FadeInUp>
            <div>
              <div className={`${styles.access_wrapper}`}>
                <div>
                  <div className="w-full pt-[100%] relative md:pt-[72%]">
                    <iframe
                      title="Umeya Google Map"
                      className="absolute w-full h-full inset-0 border-none"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.5138870645227!2d130.67101151153!3d33.21263992720276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541087eea76d23d%3A0x93658f51ad481975!2z44CSODM0LTEyMTcg56aP5bKh55yM5YWr5aWz5biC6buS5pyo55S66buS5pyo77yT77yX!5e0!3m2!1sja!2sjp!4v1680924060602!5m2!1s${lang}!2sjp`}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <ScheduleCalendar schedules={schedules} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title={t("insta_feed.title")} titleEn="Instagram" />
          {/* @ts-expect-error Async Server Component */}
          <InstagramGallery />
        </div>
      </section>
    </>
  )
}

export default Page
