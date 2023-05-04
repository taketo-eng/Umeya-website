import { DefaultSeo, DefaultSeoProps } from "next-seo"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import Script from "next/script"

const defaultOrigin = "https://umeya.life"
const defaultLocale = "ja"
const supportedLocales = ["ja", "en"]
const ogImageWidth = 1200
const ogImageHeight = 628

type LanguageAlternate = Exclude<
  DefaultSeoProps["languageAlternates"],
  undefined
>[number]

function buildLocalizedUrlFromLocale(path: string, locale: string): string {
  return `${defaultOrigin}${locale === defaultLocale ? "" : `/${locale}`}${
    path === "/" ? "" : path
  }`
}

function buildLanguageAlternate(
  bathPath: string,
  hrefLang: string
): LanguageAlternate {
  return {
    hrefLang,
    href: buildLocalizedUrlFromLocale(bathPath, hrefLang),
  }
}

function buildLanguageAlternates(
  bathPath: string,
  hrefLangs: string[]
): LanguageAlternate[] {
  const xDefault: LanguageAlternate = {
    hrefLang: "x-default",
    href: buildLocalizedUrlFromLocale(bathPath, defaultLocale),
  }
  return [
    ...hrefLangs.map((hrefLang) => buildLanguageAlternate(bathPath, hrefLang)),
    xDefault,
  ]
}

export const MyDefaultSeo = () => {
  const { t } = useTranslation("seo")
  const { locale, pathname } = useRouter()
  const siteName = t("site_name")
  const titleTemplate = `${siteName} | %s`
  const description = t("site_desc")
  const ogImageUrl = `${defaultOrigin}${t("og_path")}`

  const canonical = buildLocalizedUrlFromLocale(pathname, locale!)
  const languageAlternates = buildLanguageAlternates(pathname, supportedLocales)

  return (
    <>
      <DefaultSeo
        defaultTitle={siteName}
        titleTemplate={titleTemplate}
        description={description}
        canonical={canonical}
        languageAlternates={languageAlternates}
        openGraph={{
          title: siteName,
          description,
          site_name: siteName,
          locale,
          url: canonical,
          type: "website",
          images: [
            {
              url: ogImageUrl,
              height: ogImageHeight,
              width: ogImageWidth,
              alt: siteName,
            },
          ],
        }}
      />
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
