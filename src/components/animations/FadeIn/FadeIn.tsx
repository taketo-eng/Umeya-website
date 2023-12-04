"use client"
import gsap from "@/libs/gsap"
import { FC, ReactNode, useEffect, useRef } from "react"

type Props = {
  children: ReactNode
  isDebug?: boolean
}
export const FadeIn: FC<Props> = ({ children, isDebug = false }) => {
  const target = useRef(null)

  useEffect(() => {
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
  }, [])

  return <div ref={target}>{children}</div>
}
