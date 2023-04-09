import { FC, ReactNode, useEffect, useRef } from "react"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { SeoHead } from "../SeoHead"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const ref = useRef(null)

  return (
    <>
      <SeoHead />
      <Script id="preload" strategy="lazyOnload">
        {`
          const wrapper = document.querySelector(".top_wrapper")
          wrapper.classList.remove("preload")
        `}
      </Script>
      <LocomotiveScrollProvider
        options={{
          smooth: false,
          offset: ["25%", 0],
        }}
        watch={[]}
        containerRef={ref}
      >
        <div className="bg_wrapper"></div>
        <div className="preload top_wrapper" data-scroll-container id="top" ref={ref}>
          <Header />
          <main className="font-noto">{children}</main>
          <Footer />
          <Link scroll={false} className="ripple fixed right-4 bottom-4 w-8 md:w-10" href="#top">
            <Image className="w-full" src="/top_btn.svg" width={32} height={32} alt="top" />
          </Link>
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}
