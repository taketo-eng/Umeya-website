import { client } from "@/libs/microcms"
import { Setting } from "@/types/common"

export const getSetting = async (): Promise<Setting> => {
    const data = await client.get({
        endpoint: "setting"
    })

    return data
}