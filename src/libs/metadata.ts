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
        ? "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は集い・繋がり・残すをテーマにし、シェアテナントやシェアオフィス、時にはギャラリーや音楽イベントなどをおこなっていく場所です。"
        : "This is the official page of Umeya, located in Kurogi town, Yame City, Fukuoka, Japan. The theme is Gathering, Connecting, and Preserving. It is a place to share tenants, shared offices, sometimes a gallery, and music events.",
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
          ? "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は集い・繋がり・残すをテーマにし、シェアテナントやシェアオフィス、時にはギャラリーや音楽イベントなどをおこなっていく場所です。"
          : "This is the official page of Umeya, located in Kurogi town, Yame City, Fukuoka, Japan. The theme is Gathering, Connecting, and Preserving. It is a place to share tenants, shared offices, sometimes a gallery, and music events.",
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
          ? "福岡県八女市黒木町にある古民家梅屋の公式ページです。梅屋は集い・繋がり・残すをテーマにし、シェアテナントやシェアオフィス、時にはギャラリーや音楽イベントなどをおこなっていく場所です。"
          : "This is the official page of Umeya, located in Kurogi town, Yame City, Fukuoka, Japan. The theme is Gathering, Connecting, and Preserving. It is a place to share tenants, shared offices, sometimes a gallery, and music events.",
    },
  }
}
