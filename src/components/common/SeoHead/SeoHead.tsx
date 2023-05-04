import Head from "next/head"
import Script from "next/script"
import { useTranslation } from "react-i18next"

export const SeoHead = () => {
  const originalUrl = "https://umeya.life"
  const { t, i18n } = useTranslation("seo")
  const lang = i18n.language
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="ja" href={originalUrl} />
        <link rel="alternate" hrefLang="en" href={`${originalUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={originalUrl} />
        {/* <title>{t("top.title")}</title>
        <meta name="description" content={`${t("site_desc")}`} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />

        {/* OG */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        {/* <meta property="og:locale" content={lang} />
        <meta property="og:title" content={`${t("top.title")}`} /> */}
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:url"
          content={`https://umeya.life/${lang == "en" ? "en" : ""}`}
        /> */}
        {/* <meta property="og:description" content={`${t("site_desc")}`} />
        <meta property="og:image" content={`${originalUrl}/og.jpg`} />
        <meta property="og:image:alt" content={`${t("site_name")}`} />
        <meta property="og:site_name" content={`${t("site_name")}`} /> */}

        {/* <link
          rel="canonical"
          href={`https://umeya.life/${lang == "en" ? "en" : ""}`}
        ></link> */}

        <meta name="robots" content="index,follow" />
      </Head>
      <Script type="application/ld+json" id="structerd_data">{`
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "梅屋",
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
    </>
  )
}
