import { MainTitle } from '@/components/parts/MainTitle'
import { ScheduleList } from '@/components/parts/ScheduleList'
import { client } from '@/libs/microcms'
import { getCurrentLocale } from '@/locales/server'
import { Schedule } from '@/types/common'

import React from 'react'

const getSchedules = async () : Promise<Schedule[]> => {
    const data = await client.get({
        endpoint: "schedules",
        queries: {
            limit: 10,
            orders: "-start_time"
        }
    })
    // get only latest 10 items
    return data.contents
}

const getPastEvents = async () : Promise<Schedule[]> => {
    const data = await client.get({
        endpoint: "schedules",
        queries: {
            limit: 10,
            orders: "-start_time",
            // get finished past events
            filters: `category[contains]event[and]end_time[less_than]${new Date().toISOString()}`
        }
    })

    return data.contents
}

export const ScheduleEvent = async () => {
    const lang = await getCurrentLocale()
    const scheduleList = await getSchedules()
    const eventList = await getPastEvents()

    let title = "スケジュール・イベント"
    switch(lang) {
        case "en":
            title = "Schedule & Event"
            break;
    }

    return (
        <section id="event" className="pb-16 pt-8 md:pb-20 md:pt-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={title} titleEn="Schedule & Event" />
                <ScheduleList schedules={scheduleList} />
                <h3 className="font-bold text-main text-lg md:text-xl mt-6 mb-2">{lang === "ja" ? "過去のイベント" : "Past Events"}</h3>
                <ScheduleList schedules={eventList} />
            </div>
        </section>
    )
}
