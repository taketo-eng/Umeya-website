import { FC } from "react"
import styles from "./MainTitle.module.scss"

type Props = {
  title: string
  titleEn: string
  isAnim?: boolean
}

export const MainTitle: FC<Props> = ({ title, titleEn, isAnim }) => {
  if (isAnim) {
    return (
      <h2 data-scroll className={`title_anim ${styles.title}`}>
        <span data-titleen={titleEn}>
          {Array.from(titleEn).map((char: string, i: number) => (
            <span key={`${char}_titleEn_${titleEn}_${i}`}>{char}</span>
          ))}
        </span>
        <span data-title={title}>
          {Array.from(title).map((char: string, i: number) => (
            <span key={`${char}_title_${title}_${i}`}>{char}</span>
          ))}
        </span>
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
