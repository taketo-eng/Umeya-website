import axios from "axios"

export const getInstagramPosts = async () => {
    try {
        let query = `business_discovery.username(${process.env.NEXT_PUBLIC_INSTAGRAM_USER_NAME})`
        query += "{id,followers_count,media_count,ig_id,media{caption,media_url,permalink,media_type,like_count,comments_count,timestamp,id}}"

        const URL = "https://graph.facebook.com/v17.0/"
        const target = URL + process.env.NEXT_PUBLIC_INSTAGRAM_ID + "?fields=" + query + "&access_token=" + process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
        const res = await axios.get(target)
        return res.data.business_discovery.media.data
    } catch (err) {
        return null
    }
}
