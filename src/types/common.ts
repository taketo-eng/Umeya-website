export type Schedule = Partial<{
    title: string
    title_en: string
    start_time: string
    end_time: string
    start_date: string
    end_date: string
}>

export type InstagramPost = {
    id: string
    caption: string
    comments_count: number
    like_count: number
    media_type: string
    media_url: string
    permalink: string
    timestamp: string
}
