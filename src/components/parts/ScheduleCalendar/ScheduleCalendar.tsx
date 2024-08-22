"use client"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import { Schedule } from "@/types/common"
import { useCurrentLocale } from "@/locales/client"
import { FC, Suspense } from "react"
require("moment/locale/ja.js")

type Props = {
  schedules: Schedule[]
}

const localizer = momentLocalizer(moment)
export const ScheduleCalendar: FC<Props> = ({ schedules }) => {
  const lang = useCurrentLocale()

  return (
    <Suspense>
      <Calendar
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
                if (!schedule.start_time || !schedule.end_time) {
                  return []
                }

                return {
                  title: schedule.title ? (lang === "en" ? schedule.title_en : schedule.title) : "Open",

                  start: new Date(schedule.start_time as string),
                  end: new Date(schedule.end_time as string),
                }
              })
            : []
        }
      />
    </Suspense>
  )
}
