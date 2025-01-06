import { MainTitle } from '@/components/parts/MainTitle'
import { ScheduleList } from '@/components/parts/ScheduleList'
import { client } from '@/libs/microcms'
import { getCurrentLocale } from '@/locales/server'
import { Schedule } from '@/types/common'

import React from 'react'

const getSchedules = async () : Promise<Schedule[]> => {
    const data = await client.get({
        endpoint: "schedule",
    })
    // get only latest 10 items
    return data.schedules.slice(0, 10)
}

export const ScheduleEvent = async () => {
    const lang = await getCurrentLocale()
    const scheduleList = await getSchedules()

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
            </div>
        </section>
    )
}
