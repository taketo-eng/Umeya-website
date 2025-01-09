'use client'
import styles from "./ScheduleList.module.scss"
import { Schedule } from '@/types/common'
import { formatStartToEnd, nl2br } from '@/helpers/converter'
import { useCurrentLocale } from '@/locales/client'

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react"
import Image from "next/image"

type CardProps = {
    schedule: Schedule,
    category: 'open' | 'event'
}

const Card = ({schedule, category}:CardProps) => {
    const lang = useCurrentLocale()
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
    const bgColor = category === 'event' ? 'bg-main' : 'bg-sub'
    const cardColor = category === 'event' ? '!bg-main-light' : ''

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
        <div className={`keen-slider__slide ${styles.eventCard} ${cardColor}`}>
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



export const ScheduleList = ({schedules}: {schedules: Schedule[]}) => {
    const [currentSlide, useCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slideChanged(s) {
                useCurrentSlide(s.track.details.rel)
                console.log(s.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
            slides: {
                perView: 'auto',
                spacing: 24,
            },
            renderMode: "performance",
        },
        [

        ]
    )
    return (
        <div className="px-4 relative">
            <div ref={sliderRef} className="keen-slider py-3">
                {schedules.map((schedule, index) => <Card key={index} schedule={schedule} category={schedule.category[0] ? schedule.category[0] : 'open'}/>)}
            </div>
            {loaded && instanceRef.current && (
                <>
                    <Arrow
                    left
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    />

                    <Arrow
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled = {
                        currentSlide === instanceRef.current.track.details.slides.length - 1
                    }
                    />
                </>
            )}
        </div>
    )
}

type ArrowProps = {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}

function Arrow(props:ArrowProps) {
    const disabled = props.disabled ? styles.arrow_disabled : ""
    return (
        <button
            onClick={props.onClick}
            className = {`${styles.arrow} ${props.left ? styles.arrow_left : styles.arrow_right} ${disabled}`}
            disabled={props.disabled}
        >
            <Image src={props.left ? "/prev.svg" : "/next.svg"} alt={props.left ? "Previous Slide" : "Next Slide"} width={32} height={32} />
        </button>
    )
}