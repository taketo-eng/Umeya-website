import Head from "next/head"

export const EnSeoHead = () => {
    return (
        <>
            <Head>
                <link rel="alternate" hrefLang="ja" href="https://umeya.life" />
                <link rel="alternate" hrefLang="en" href="https://umeya.life/en" />
                <link rel="alternate" hrefLang="x-default" href="https://umeya.life" />
                <title>Umeya | Traditional Japanese House in Kurogi Town, Yame City</title>
                <meta
                    name="description"
                    content="This is the official page of Umeya, located in Kurogi town, Yame City, Fukuoka, Japan. The theme is Gathering, Connecting, and Preserving. It is a place to share tenants, shared offices, sometimes a gallery, and music events."
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@" />

                {/* OG */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:locale" content="en" />
                <meta property="og:title" content="Umeya | Traditional Japanese House in Kurogi Town, Yame City" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://umeya.life/en" />
                <meta
                    property="og:description"
                    content="This is the official page of Umeya, located in Kurogi town, Yame City, Fukuoka, Japan. The theme is Gathering, Connecting, and Preserving. It is a place to share tenants, shared offices, sometimes a gallery, and music events."
                />
                <meta property="og:image" content="https://umeya.life/og.jpg" />
                <meta property="og:image:alt" content="Umeya" />
                <meta property="og:site_name" content="Umeya" />

                <link rel="canonical" href="https://umeya.life/en"></link>

                <meta name="robots" content="index,follow" />
            </Head>
        </>
    )
}
