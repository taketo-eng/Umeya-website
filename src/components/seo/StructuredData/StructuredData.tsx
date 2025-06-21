import Script from 'next/script'

const structuredData: Record<string, any> = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "古民家梅屋",
    "image": "https://umeya.life/logo.png",
    "url": "https://umeya.life",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "黒木町黒木37",
        "addressLocality": "八女市",
        "addressRegion": "福岡県",
        "postalCode": "834-1292",
        "addressCountry": "JP"
    },
    "description": "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は人々と伝統をテーマにし、コーヒーなどを提供し、時にはギャラリーや音楽イベントなどを開催しています。",
    "inLanguage": ["en", "ja", "de"],
    "browserRequirements": "Requires JavaScript",
    "creator": {
        "@type": "Person",
        "name": "taketo-eng",
        "url": "https://github.com/taketo-eng"
    }
}

const structuredData2: Record<string, any> = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "古民家梅屋",
    "url": "https://umeya.life",
    "alternateName": "梅屋"
}

export const StructuredData = () => {
    return (
        <>
            <Script type="application/ld+json" id="structured_data" data-json={JSON.stringify(structuredData)} />
            <Script type="application/ld+json" id="structured_data_2" data-json={JSON.stringify(structuredData2)} />
        </>
    )
}