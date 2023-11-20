import { FC, useRef, useEffect } from "react"
import SplitType from "split-type"
import gsap from "@/libs/gsap"

type Props = {
  text: string
  scrollTarget?: gsap.DOMTarget
  isDebug?: boolean
}

export const FadeInText: FC<Props> = ({ text, scrollTarget, isDebug = false }) => {
  const target = useRef(null)

  useEffect(() => {
    if (target.current) {
      gsap.set(target.current, { visibility: "visible" })
      const text = new SplitType(target.current, { types: "words,chars", tagName: "span" })
      gsap.from(text.chars, {
        opacity: 0,
        duration: 0.6,
        stagger: {
          from: "start",
          each: 0.1,
        },
        scrollTrigger: {
          trigger: scrollTarget ? scrollTarget : target.current,
          start: "top 70%",
          markers: isDebug,
        },
      })
    }
  }, [])

  return (
    <span className="invisible" ref={target}>
      {text}
    </span>
  )
}
