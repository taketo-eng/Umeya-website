import { FC, ReactNode, useEffect, useRef } from "react"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import Head from "next/head"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const ref = useRef(null)

  useEffect(() => {
    const wrapper = document.querySelector(".top_wrapper")
    wrapper?.classList.remove("preload")
  }, [])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: false,
        }}
        watch={[]}
        containerRef={ref}
      >
        <div className="preload top_wrapper" data-scroll-container id="top" ref={ref}>
          <Header />
          <main className="font-noto">{children}</main>
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}
