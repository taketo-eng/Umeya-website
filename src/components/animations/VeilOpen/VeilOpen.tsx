'use client'
import gsap from "@/libs/gsap"
import { FC, ReactNode, useEffect, useRef } from "react"

type Props = {
  children: ReactNode
  isDebug?: boolean
  className?: string
  moduleStyles?: string
}

export const VeilOpen: FC<Props> = ({ children, moduleStyles, className, isDebug = false }) => {
  const target = useRef(null)

  useEffect(() => {
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
  }, [])

  return (
    <div className={`relative overflow-hidden ${moduleStyles ?? ""} ${className ?? ""}`}>
      <div ref={target} className="block absolute inset-0 bg-main" />
      {children}
    </div>
  )
}
