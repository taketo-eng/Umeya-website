import { FC, ReactNode } from "react"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { SeoHead } from "../../seo/SeoHead"
import { useTranslation } from "react-i18next"
import { EnSeoHead } from "@/components/seo/EnSeoHead"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const { i18n } = useTranslation("common")
  const lang = i18n.language
  return (
    <>
      {lang == "en" ? <EnSeoHead /> : <SeoHead />}
      <Script id="preload" strategy="lazyOnload">
        {`
          const wrapper = document.querySelector(".top_wrapper")
          wrapper.classList.remove("preload")
        `}
      </Script>
      <div className="bg_wrapper"></div>
      <div className="preload top_wrapper" id="top">
        <Header />
        <main className="font-noto">{children}</main>
        <Footer />
        <Link scroll={false} className="ripple fixed right-4 bottom-4 w-8 md:w-10" href="#top">
          <Image className="w-full" src="/top_btn.svg" width={32} height={32} alt="top" />
        </Link>
      </div>
    </>
  )
}
