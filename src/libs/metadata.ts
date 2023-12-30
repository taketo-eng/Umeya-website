import { Metadata } from "next"

export const getMetadata = (lang: "ja" | "en"): Metadata => {
  return {
    metadataBase: new URL("https://umeya.life/"),
    icons: {
      apple: {
        url: "/apple-touch-icon.png",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    title: lang == "ja" ? "古民家梅屋 | 八女市黒木町" : "Umeya | Traditional Japanese House in Kurogi Town, Yame City",
    description:
      lang == "ja"
        ? "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は人々と伝統をテーマにし、コーヒーなどを提供し、時にはギャラリーや音楽イベントなどを開催しています。"
        : "This is the official page of Umeya, located in Kurogi Town, Yame, Fukuoka Prefecture, Japan. People and tradition are the themes at Umeya. It offers coffee and retro crockery from Umeya, and occasionally hosts galleries and music events.",
    keywords: lang == "ja" ? "梅屋,古民家,矢部川,黒木町,八女市,福岡" : "Umeya,Traditional Japanese House,Kurogi Town,Yabe River,Yame City,Fukuoka,Japan",
    alternates: {
      canonical: "/",
      languages: {
        ja: "/",
        en: "/en",
      },
    },
    // og
    openGraph: {
      title: lang == "ja" ? "古民家梅屋 | 八女市黒木町" : "Umeya",
      description:
        lang == "ja"
          ? "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は人々と伝統をテーマにし、コーヒーなどを提供し、時にはギャラリーや音楽イベントなどを開催しています。"
          : "This is the official page of Umeya, located in Kurogi Town, Yame, Fukuoka Prefecture, Japan. People and tradition are the themes at Umeya. It offers coffee and retro crockery from Umeya, and occasionally hosts galleries and music events.",
      emails: "shop@umeya.life",
      siteName: lang == "ja" ? "古民家梅屋" : "Umeya",
      locale: lang == "ja" ? "ja" : "en",
      type: "website",
      images: {
        url: "/og.jpg",
        alt: lang == "ja" ? "古民家梅屋" : "Umeya",
        width: "1200",
        height: "628",
      },
      url: "https://umeya.life/",
      countryName: "Japan",
    },
    // twitter(X) card
    twitter: {
      card: "summary_large_image",
      site: "@",
      title: lang == "ja" ? "古民家梅屋" : "Umeya",
      description:
        lang == "ja"
          ? "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は人々と伝統をテーマにし、コーヒーなどを提供し、時にはギャラリーや音楽イベントなどを開催しています。"
          : "This is the official page of Umeya, located in Kurogi Town, Yame, Fukuoka Prefecture, Japan. People and tradition are the themes at Umeya. It offers coffee and retro crockery from Umeya, and occasionally hosts galleries and music events.",
    },
  }
}
