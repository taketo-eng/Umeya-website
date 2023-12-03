type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = 'GTM-5F7QWL8'

export const pageview = (url: string) => {
    if(typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        })
    } else {
        console.log({
            event:'pageview',
            page: url
        })
    }
}