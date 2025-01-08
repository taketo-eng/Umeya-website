"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { FC, ReactNode, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Props = {
  children: ReactNode
  isDebug?: boolean
  className?: string
  moduleStyles?: string
}



export const VeilOpen: FC<Props> = ({ children, moduleStyles, className, isDebug = false }) => {
  const target = useRef(null)
  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(() => {
    if (target.current) {
      gsap.set(target.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })

      gsap.to(target.current, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 0.6,
        scrollTrigger: {
          trigger: target.current,
          start: "top 70%",
          markers: isDebug,
        },
      })
    }
  }, [isDebug])

  return (
    <div className={`relative overflow-hidden ${moduleStyles ?? ""} ${className ?? ""}`}>
      <div ref={target} className="block absolute inset-0 bg-main" />
      {children}
    </div>
  )
}
