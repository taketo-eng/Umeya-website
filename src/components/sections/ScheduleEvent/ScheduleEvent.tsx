import { MainTitle } from '@/components/parts/MainTitle'
import { ScheduleList } from '@/components/parts/ScheduleList'
import { client } from '@/libs/microcms'
import { dictionary } from '@/libs/server/i18n'
import { Schedule } from '@/types/common'

import React from 'react'

const getSchedules = async (): Promise<Schedule[]> => {
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

const getPastEvents = async (): Promise<Schedule[]> => {
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
    const dict = (await dictionary())["Schedule"]
    const scheduleList = await getSchedules()
    const eventList = await getPastEvents()

    return (
        <section id="event" className="pb-16 pt-8 md:pb-20 md:pt-10">
            <div className="w-base max-w-7xl mx-auto">
                <MainTitle isAnim title={dict["title"]} titleEn="Schedule & Event" />
                <ScheduleList schedules={scheduleList} />
                <h3 className="font-bold text-main text-lg md:text-xl mt-6 mb-2">{dict["pastEventTitle"]}</h3>
                <ScheduleList schedules={eventList} />
            </div>
        </section>
    )
}
