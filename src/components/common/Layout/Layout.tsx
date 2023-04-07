import { FC, ReactNode } from "react"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
