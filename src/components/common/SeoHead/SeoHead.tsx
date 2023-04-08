import Head from "next/head"
import Script from "next/script"

export const SeoHead = () => {
  return (
    <>
      <Head>
        <title>梅屋 | 八女市黒木町の伝統建築</title>
        <meta name="description" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta property="og:title" content="梅屋" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umeya.life/" />
        <meta property="og:description" content="description" />
        <meta property="og:image" content="https://umeya.life/test.jpg" />
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <Script type="application/ld+json" id="structerd_data">{`
      {{
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "梅屋",
        "image": "https://umeya.life/logo.png",
        "url": "https://umeya.life",
        "address': {
            "@type": "PostalAddress",
            "streetAddress": "黒木町黒木37",
            "addressLocality": "八女市",
            "addressRegion": "福岡県",
            "postalCode": "834-1292",
            "addressCountry": "JP"
        }
      }}
      `}</Script>
    </>
  )
}
