"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { FC, ReactNode, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Props = {
  children: ReactNode
  isDebug?: boolean
}

export const FadeIn: FC<Props> = ({ children, isDebug = false }) => {
  const target = useRef(null)
  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(() => {
    if (target.current) {
      gsap.set(target.current, {
        opacity: 0,
      })

      gsap.to(target.current, {
        opacity: 1,
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
