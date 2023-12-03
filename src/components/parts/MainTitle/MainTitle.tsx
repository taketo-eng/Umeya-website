'use client'

import { FC, useEffect, useRef } from "react"
import styles from "./MainTitle.module.scss"
import { FadeInText } from "@/components/animations/FadeInText/FadeInText"

type Props = {
  title: string
  titleEn: string
  isAnim?: boolean
}

export const MainTitle: FC<Props> = ({ title, titleEn, isAnim }) => {
  const target = useRef(null)

  if (isAnim) {
    return (
      <h2 ref={target} className={styles.title}>
        <FadeInText text={titleEn} scrollTarget={target.current} />
        <FadeInText text={title} scrollTarget={target.current} />
      </h2>
    )
  }
  return (
    <h2 className={styles.title}>
      <span>{titleEn}</span>
      <span>{title}</span>
    </h2>
  )
}
