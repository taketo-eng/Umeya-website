import "@/styles/globals.scss"
import { ReactNode, Suspense } from "react"
import { Noto_Sans_JP } from "next/font/google"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"

import { AdobeFonts } from "@/components/fonts/AdobeFonts"
import { GoogleTagManager } from "@/components/seo/GTM"
import { StructuredData } from "@/components/seo/StructuredData"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"
import { getCurrentLocale } from "@/locales/server"

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const locale = getCurrentLocale()
  return (
    <html lang={locale}>
      <body>
        <Suspense>
          <GoogleTagManager />
        </Suspense>
        <StructuredData />
        <AdobeFonts />
        <div className={`${noto.variable} font-sans overflow-hidden`}>
          <div className="bg_wrapper"></div>
          <div id="top">
            <Header />
            <main className="font-noto">{children}</main>
            {/* @ts-expect-error Async Server Component */}
            <Footer />
            <Link scroll={true} className="ripple fixed right-4 bottom-4 w-8 md:w-10" href="#top">
              <Image className="w-full" src="/top_btn.svg" width={32} height={32} alt="top" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
