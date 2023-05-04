import { MainTitle } from "@/components/Titles/MainTitle"
import { Layout } from "@/components/common/Layout/Layout"
import styles from "@/styles/common.module.scss"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import Image from "next/image"
import { client } from "@/libs/microcms"
import { NextPage } from "next"
import { Schedule } from "@/types/common"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { TopPageSeo } from "@/components/seo/top"
import { useMemo } from "react"
import { useRouter } from "next/router"
import { MyDefaultSeo } from "@/components/seo/default"

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const data = await client.get({
    endpoint: "schedule",
  })
  return {
    props: {
      schedules: data.schedules,
      ...(await serverSideTranslations(locale, ["common", "seo"])),
    },
  }
}

type Props = {
  schedules: Schedule[]
}

const Home: NextPage<Props> = ({ schedules }) => {
  const { locale } = useRouter()
  const { t, i18n } = useTranslation("common")
  const lang = i18n.language
  const topPageSeo = useMemo(() => <TopPageSeo />, [locale])
  return (
    <Layout>
      <MyDefaultSeo />
      {topPageSeo}
      <div className="keyvisual">
        <picture>
          <source
            media="(max-width:767px)"
            width="500"
            height="800"
            srcSet="kv_sp.webp"
          />
          <img
            width="1920"
            height="1080"
            className="w-full"
            src="kv.webp"
            alt=""
          />
        </picture>
        <div className={`catch ${lang}`}>
          <p
            className="font-serif"
            dangerouslySetInnerHTML={{
              __html: t("info.catch_phrase"),
            }}
          />
        </div>
      </div>
      <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title={t("about.title")} titleEn="About" />
          <div className="md:px-4 px-0">
            <div className={`${styles.row}`}>
              <div className="open_anim" data-scroll>
                <Image src="/about.jpg" width={1200} height={675} alt="" />
              </div>
              <div>
                <p
                  data-scroll
                  className={`${styles.text} fadein_anim`}
                  dangerouslySetInnerHTML={{
                    __html: t("about.desc"),
                  }}
                />
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
              <ul data-scroll className={`${styles.history_list} fadein_anim`}>
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
              <div data-scroll className={`${styles.history_image} open_anim`}>
                <Image
                  src="/history.jpg"
                  width={1107}
                  height={792}
                  alt="history"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="background" className="py-8 md:py-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle
            isAnim
            title={t("background.title")}
            titleEn="Background"
          />
          <div className="md:px-4 px-0">
            <div className={`${styles.row} ${styles.reverse}`}>
              <div className="open_anim" data-scroll>
                <Image src="/yabe_river.jpg" width={1200} height={675} alt="" />
              </div>
              <div>
                <p
                  data-scroll
                  className={`${styles.text} fadein_anim`}
                  dangerouslySetInnerHTML={{
                    __html: t("background.desc"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle
            isAnim
            title={t("access_schedule.title")}
            titleEn="Access & Schedule"
          />
          <div className="md:px-4 px-0">
            <div data-scroll className="fadein_anim mb-8">
              <address
                className={`${styles.text} not-italic ${
                  lang === "en" ? "font-bold" : "font-medium"
                }`}
              >
                {t("access_schedule.address")}
              </address>
              <p>
                {t("access_schedule.note")}
                <br />
                {t("access_schedule.car_park")}
              </p>
            </div>
            <div>
              <div className={`${styles.access_wrapper}`}>
                <div>
                  <div className="w-full pt-[100%] relative md:pt-[72%]">
                    <iframe
                      className="absolute w-full h-full inset-0 border-none"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.5138870645227!2d130.67101151153!3d33.21263992720276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541087eea76d23d%3A0x93658f51ad481975!2z44CSODM0LTEyMTcg56aP5bKh55yM5YWr5aWz5biC6buS5pyo55S66buS5pyo77yT77yX!5e0!3m2!1sja!2sjp!4v1680924060602!5m2!1s${lang}!2sjp`}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <FullCalendar
                    allDayText={lang === "en" ? "All-day" : "日中"}
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    locale={lang}
                    events={
                      schedules && !!schedules.length
                        ? schedules.map((schedule) => {
                            if (!schedule.start_date && !schedule.start_time)
                              return []
                            return {
                              title: schedule.title
                                ? schedule.title
                                : // ? lang === "en"
                                  //   ? schedule.title_en
                                  //   : schedule.title
                                  "Open",

                              allDay:
                                !!schedule.start_date && !schedule.start_time,
                              start: schedule.start_date
                                ? schedule.start_date
                                : schedule.start_time
                                ? schedule.start_time
                                : undefined,
                              end: schedule.end_date
                                ? schedule.end_date
                                : schedule.end_time
                                ? schedule.end_time
                                : undefined,
                            }
                          })
                        : []
                    }
                    headerToolbar={{
                      left: "prev,next",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
