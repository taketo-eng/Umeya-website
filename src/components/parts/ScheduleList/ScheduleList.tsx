'use client'
import styles from "./ScheduleList.module.scss"
import { Schedule } from '@/types/common'
import { formatStartToEnd, nl2br } from '@/helpers/converter'
import "keen-slider/keen-slider.min.css"
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react'
import { useState } from "react"
import Image from "next/image"
import { useLocale } from "@/hooks/i18n-client"

type CardProps = {
    schedule: Schedule,
    category: 'open' | 'event'
}

const Card = ({ schedule, category }: CardProps) => {
    const locale = useLocale()
    // default text
    let title = ""
    switch (locale) {
        case 'en':
            title = 'Open Day'
            if (schedule.title_en) title = schedule.title_en
            break
        case 'de':
            title = 'Öffnungstag'
            if (schedule.title_de) title = schedule.title_de
            break
        default:
            title = "オープン日"
            if (schedule.title) title = schedule.title
            break
    }

    let description = schedule.description
    if (schedule.description_en && locale === 'en') {
        description = schedule.description_en
    }
    if (schedule.description_de && locale === 'de') {
        description = schedule.description_de
    }

    const { period, start, end } = formatStartToEnd(schedule.start_time, schedule.end_time)
    let categoryText = category as string
    const bgColor = category === 'event' ? 'bg-main' : 'bg-sub'
    const cardColor = category === 'event' ? '!bg-main-light' : ''

    if (locale === 'ja') {
        switch (category) {
            case 'open':
                categoryText = 'オープン日'
                break
            case 'event':
                categoryText = 'イベント'
                break
        }
    }

    if (locale === 'en') {
        switch (category) {
            case 'open':
                categoryText = 'Open Day'
                break
            case 'event':
                categoryText = 'Event'
                break
        }
    }

    if (locale == 'de') {
        switch (category) {
            case 'open':
                categoryText = 'Öffnungstag'
                break
            case 'event':
                categoryText = 'Event'
                break
        }
    }

    // Date title
    let dateTitle = locale === 'en' ? 'Date' : '日付'
    if (locale === 'de') dateTitle = 'Datum'

    let timeTitle = locale === 'en' ? 'Time' : '時間'
    if (locale === 'de') timeTitle = 'Zeit'

    return (
        <div className={`keen-slider__slide ${styles.eventCard} ${cardColor}`}>
            <span className={`${styles.category_tag} ${bgColor}`}>{categoryText}</span>
            <h3>{title}</h3>
            <p>{dateTitle} : {period}</p>
            <time dateTime={schedule.start_time}>{timeTitle}: {start} ~ {end}</time>
            {description && (
                <p className={styles.card_description}
                    dangerouslySetInnerHTML={{ __html: nl2br(description) }}
                />
            )}
        </div>
    )
}

const KeyboardControls = (slider: KeenSliderInstance) => {
    let focused = false;

    function eventFocus() {
        focused = true;
    }

    function eventBlur() {
        focused = false;
    }

    function eventKeydown(e: globalThis.KeyboardEvent) {
        if (!focused) return;
        switch (e.key) {
            default:
                break;
            case "Left":
            case "ArrowLeft":
                slider.prev();
                break;
            case "Right":
            case "ArrowRight":
                slider.next();
                break;
        }
    }

    slider.on("created", () => {
        slider.container.setAttribute("tabindex", "0");
        slider.container.addEventListener("focus", eventFocus);
        slider.container.addEventListener("blur", eventBlur);
        slider.container.addEventListener("keydown", eventKeydown);
    });
};




export const ScheduleList = ({ schedules }: { schedules: Schedule[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
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
            KeyboardControls,
        ]
    )
    return (
        <div className="px-4 relative">
            <div ref={sliderRef} className="keen-slider py-3">
                {schedules.map((schedule, index) => <Card key={index} schedule={schedule} category={schedule.category[0] ? schedule.category[0] : 'open'} />)}
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
                        disabled={
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

function Arrow(props: ArrowProps) {
    const disabled = props.disabled ? styles.arrow_disabled : ""
    return (
        <button
            onClick={props.onClick}
            className={`${styles.arrow} ${props.left ? styles.arrow_left : styles.arrow_right} ${disabled}`}
            disabled={props.disabled}
        >
            <Image src={props.left ? "/prev.svg" : "/next.svg"} alt={props.left ? "Previous Slide" : "Next Slide"} width={32} height={32} />
        </button>
    )
}