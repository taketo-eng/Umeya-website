export const getInstagramPosts = async () => {
    try {
        let query = `business_discovery.username(${process.env.INSTAGRAM_USER_NAME})`
        query += "{id,followers_count,media_count,ig_id,media{caption,media_url,permalink,media_type,like_count,comments_count,timestamp,id}}"

        const URL = "https://graph.facebook.com/v17.0/"
        const target = URL + process.env.INSTAGRAM_ID + "?fields=" + query + "&access_token=" + process.env.INSTAGRAM_ACCESS_TOKEN
        const res = await fetch(target)
        if (!res.ok) {
            throw new Error('Failed to fetch data; Message')
        }
        const data = await res.json()
        return data.business_discovery.media.data
    } catch (err) {
        return null
    }
}
