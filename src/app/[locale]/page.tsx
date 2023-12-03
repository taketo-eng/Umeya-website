import { MainTitle } from "@/components/parts/MainTitle"
import styles from "@/styles/common.module.scss"
import Image from "next/image"
import { client } from "@/libs/microcms"
import { InstagramPost, Schedule } from "@/types/common"
//import { serverSideTranslations } from "next-i18next/serverSideTranslations"
//import { useTranslation } from "next-i18next"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
require("moment/locale/ja.js")
import "react-big-calendar/lib/css/react-big-calendar.css"
import { getInstagramPosts } from "@/libs/instagram"
import { FadeInUp } from "@/components/animations/FadeInUp"
import { FadeIn } from "@/components/animations/FadeIn/FadeIn"
import { VeilOpen } from "@/components/animations/VeilOpen/VeilOpen"

import { getI18n, getCurrentLocale } from "@/locales/server"

//const localizer = momentLocalizer(moment)

// export const getServerSideProps = async ({ locale }: { locale: string }) => {
//   const data = await client.get({
//     endpoint: "schedule",
//   })

//   const instagramData = await getInstagramPosts();

//   return {
//     props: {
//       schedules: data.schedules,
//       instagramData,
//       ...(await serverSideTranslations(locale, ["common", "seo"])),
//     },
//   }
// }

const NUM_OF_POST = 12

const Home = async () => {
  //const { t, i18n } = useTranslation("common")
  const t = await getI18n()
  const lang = getCurrentLocale()

  let count = 0

  const scheduleData = await client.get({
    endpoint: "schedule",
  })
  const schedules: Schedule[] = scheduleData.data
  const instagramData: InstagramPost[] = await getInstagramPosts()

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
                <address className={`${styles.text} not-italic ${lang === "en" ? "font-bold" : "font-medium"}`}>{t("access_schedule.address")}</address>
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
                      {/* <Calendar
                        formats={{
                          timeGutterFormat: "HH:mm",
                        }}
                        localizer={localizer}
                        views={["month", "week", "day"]}
                        defaultView="month"
                        messages={{
                          next: ">",
                          previous: "<",
                          today: lang === "en" ? "Today" : "今日",
                          month: lang === "en" ? "Month" : "月",
                          week: lang === "en" ? "Week" : "週",
                          day: lang === "en" ? "Day" : "日",
                        }}
                        eventPropGetter={() => {
                          let style = {
                            backgroundColor: "#c21244",
                            fontSize: "14px",
                            border: "none",
                          }
                          return {
                            style,
                          }
                        }}
                        toolbar
                        culture={lang === "en" ? "en-US" : "ja"}
                        events={
                          schedules && !!schedules.length
                            ? schedules.map((schedule) => {
                                if ((!schedule.start_date && !schedule.start_time) || (!schedule.end_date && !schedule.end_time)) {
                                  return []
                                }

                                return {
                                  title: schedule.title ? (lang === "en" ? schedule.title_en : schedule.title) : "Open",

                                  allDay: !!schedule.start_date && !schedule.start_time,
                                  start: schedule.start_date ? new Date(schedule.start_date) : new Date(schedule.start_time as string) ? new Date(schedule.start_time as string) : undefined,
                                  end: schedule.end_date ? new Date(schedule.end_date as string) : new Date(schedule.end_time as string) ? new Date(schedule.end_time as string) : undefined,
                                }
                              })
                            : []
                        }
                      /> */}
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
          <div className="md:px-4 px-0">
            {instagramData && (
              <ul className="flex flex-wrap justify-between">
                {instagramData.map((postData, idx) => {
                  if (count < NUM_OF_POST && postData.media_url) {
                    count++

                    return (
                      <li className="w-1/2 transition-opacity duration-300 hover:opacity-80 md:w-1/4" key={postData.id}>
                        <a href={postData.permalink} target="_blank" rel="noopener noreferrer">
                          <div className="w-full">
                            {postData.media_type == "VIDEO" ? (
                              <div className="relative h-0 w-full overflow-hidden pt-[100%]">
                                <video className="absolute left-0 right-0 top-0 bottom-0 block h-full w-full  object-cover" src={postData.media_url}></video>
                              </div>
                            ) : (
                              <div className="relative h-0 w-full overflow-hidden pt-[100%]">
                                <img className=" absolute left-0 right-0 top-0 bottom-0 block h-full w-full object-cover" src={postData.media_url} alt={postData.caption} />
                              </div>
                            )}
                          </div>
                        </a>
                      </li>
                    )
                  }
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
