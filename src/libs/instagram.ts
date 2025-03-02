export const getInstagramPosts = async () => {
    try {
        const URL = "https://graph.facebook.com/v22.0/"
        const target = `${URL}${process.env.INSTAGRAM_ID}/media?fields=caption,permalink,thumbnail_url,media_type,media_url&limit=12&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
        const res = await fetch(target)
        if (!res.ok) {
            throw new Error('Failed to fetch data; Message')
        }
        const json = await res.json()
        return json.data
    } catch (err) {
        return null
    }
}
