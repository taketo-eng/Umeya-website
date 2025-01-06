'use client'
import React from 'react'
import styles from "@/styles/common.module.scss"
import { Schedule } from '@/types/common'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

import { Keyboard, A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { formatStartToEnd, nl2br } from '@/helpers/converter'

type CardProps = {
    schedule: Schedule,
    lang: string,
    category: 'open' | 'event'
}

const Card = ({schedule, lang, category}:CardProps) => {
    let title = schedule.title ? schedule.title : lang == 'en' ? 'Open Day' : 'オープン日'
    if (schedule.title_en && lang == 'en') {
        title = schedule.title_en
    }

    let description = schedule.description
    if (schedule.description_en && lang == 'en') {
        description = schedule.description_en
    }
    const {period, start, end} = formatStartToEnd(schedule.start_time, schedule.end_time)
    let categoryText = category as string
    let bgColor = category === 'event' ? 'bg-main' : 'bg-sub'
    if (lang === 'ja') {
        switch (category) {
            case 'open':
                categoryText = 'オープン日'
                break
            case 'event':
                categoryText = 'イベント'
                break
        }
    }

    return (
        <div>
            <span className={`${styles.category_tag} ${bgColor}`}>{categoryText}</span>
            <h3>{title}</h3>
            <p>{lang == 'en' ? 'Date' : '日付'} : {period}</p>
            <time dateTime={schedule.start_time}>{lang == 'en' ? 'Time' : '時間'}: {start} ~ {end}</time>
            {description && (
                <p className={styles.card_description}
                dangerouslySetInnerHTML={{__html: nl2br(description)}}
                />
            )}
        </div>
    )
}



export const ScheduleList = ({schedules, lang}: {schedules: Schedule[], lang:string}) => {
    return (
        <div className="md:px-4 px-0">
            <Swiper
            modules={[Navigation, Keyboard, A11y]}
            slidesPerView='auto'
            spaceBetween={24}
            width={100}
            style={{
                paddingBottom: '12px',
                paddingTop: '12px',
            }}
            keyboard={{
                enabled: true,
            }}
            navigation
            >
                {schedules.map((schedule, index) => {
                    let category = schedule.category[0]
                    if (!category) {
                        category = 'open'
                    }
                    const cardColor = category === 'event' ? '!bg-main-light' : ''
                    return (
                        <SwiperSlide key={index} className={`${styles.eventCard} ${cardColor}`} >
                            <Card schedule={schedule} lang={lang} category={category}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
