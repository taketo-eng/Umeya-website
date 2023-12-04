import Script from 'next/script'

export const StructuredData = () => {
    return (
        <>
            <Script type="application/ld+json" id="structured_data">{`
            {
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
                }
            }
            `}</Script>

            <Script type="application/ld+json" id="structured_data_2">{`
            {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "古民家梅屋",
                "url": "https://umeya.life",
                "alternateName": "梅屋"
            }
            `}</Script>
        </>
    )
}