import Head from "next/head"
import { useTranslation } from "react-i18next"

export const SeoHead = () => {
    return (
        <>
            <Head>
                <link rel="alternate" hrefLang="ja" href="https://umeya.life" />
                <link rel="alternate" hrefLang="en" href="https://umeya.life/en" />
                <link rel="alternate" hrefLang="x-default" href="https://umeya.life" />
                <title>古民家梅屋 | 八女市黒木町</title>
                <meta
                    name="description"
                    content="福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は集い・繋がり・残すをテーマにし、シェアテナントやシェアオフィス、時にはギャラリーや音楽イベントなどをおこなっていく場所です。"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@" />

                {/* OG */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:locale" content="ja" />
                <meta property="og:title" content="古民家梅屋 | 八女市黒木町" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://umeya.life/" />
                <meta
                    property="og:description"
                    content="福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は集い・繋がり・残すをテーマにし、シェアテナントやシェアオフィス、時にはギャラリーや音楽イベントなどをおこなっていく場所です。"
                />
                <meta property="og:image" content="https://umeya.life/og.jpg" />
                <meta property="og:image:alt" content="古民家梅屋" />
                <meta property="og:site_name" content="古民家梅屋" />

                <link rel="canonical" href="https://umeya.life/"></link>

                <meta name="robots" content="index,follow" />
            </Head>
        </>
    )
}
