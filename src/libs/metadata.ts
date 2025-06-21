import { Metadata } from "next"
import { LanguageObject } from "./server/i18n"

export const getMetadata = (dict: LanguageObject): Metadata => {
  const metadataDict = dict["Metadata"]

  return {
    metadataBase: new URL("https://umeya.life/"),
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-96x96.png',
      apple: '/apple-icon.png',
    },
    title: metadataDict['title'],
    description: metadataDict['description'],
    keywords: metadataDict['keywords'],
    authors: [{ name: "taketo-eng", url: "https://github.com/taketo-eng" }],
    creator: "taketo-eng",
    publisher: "taketo-eng",
    alternates: {
      canonical: "https://umeya.life",
      languages: {
        ja: "https://umeya.life",
        en: "https://umeya.life/en",
        de: "https://umeya.life/de",
      },
    },
    // og
    openGraph: {
      title: metadataDict['title'],
      description: metadataDict['description'],
      emails: "shop@umeya.life",
      siteName: metadataDict['title'],
      locale: "ja",
      alternateLocale: ["en", "de"],
      type: "website",
      images: {
        url: "https://umeya.life/og.webp",
        alt: metadataDict['title'],
        width: "1200",
        height: "628",
      },
      url: "https://umeya.life",
      countryName: "Japan",
    },
    // twitter(X) card
    twitter: {
      card: "summary_large_image",
      // site: "@",
      title: metadataDict['title'],
      description: metadataDict['description'],
      images: [
        {
          url: "https://umeya.life/og.webp",
          alt: metadataDict['title'],
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    }
  }
}
