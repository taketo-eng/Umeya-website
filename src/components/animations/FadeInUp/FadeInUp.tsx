"use client"
import { FC, ReactNode, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Props = {
  children: ReactNode
  isDebug?: boolean
}

export const FadeInUp: FC<Props> = ({ children, isDebug = false }) => {
  const target = useRef(null)
  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(() => {
    if (target.current) {
      gsap.set(target.current, {
        opacity: 0,
        translateY: "40px",
      })

      gsap.to(target.current, {
        opacity: 1,
        translateY: "0",
        duration: 0.6,
        scrollTrigger: {
          trigger: target.current,
          start: "top 70%",
          markers: isDebug,
        },
      })
    }
  }, [isDebug])

  return <div ref={target}>{children}</div>
}
