import "@/styles/globals.scss"
import { ReactNode } from "react"
import { Noto_Sans_JP } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { AdobeFonts } from "@/components/fonts/AdobeFonts"
import { StructuredData } from "@/components/seo/StructuredData"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"
import { type Metadata } from "next"
import { dictionary } from "@/libs/server/i18n"
import { getMetadata } from "@/libs/metadata"
import { I18nProvider } from "@/hooks/i18n-client"

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
})

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = (await dictionary())
  return getMetadata(dict);
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  const dict = (await dictionary())
  return (
    <html lang={locale}>
      <body>
        <SpeedInsights />
        <StructuredData />
        <AdobeFonts />
        <div className={`${noto.variable} font-sans overflow-hidden`}>
          <I18nProvider dictionary={dict} locale={locale}>
            <div className="bg_wrapper"></div>
            <div id="top">
              <Header />
              <main className="font-noto">{children}</main>
              <Footer />
              <Link scroll={true} className="ripple fixed right-4 bottom-4 w-8 md:w-10" href="#top">
                <Image className="w-full" src="/top_btn.svg" width={32} height={32} alt="top" />
              </Link>
            </div>
          </I18nProvider>
        </div>
      </body>
    </html>
  )
}
