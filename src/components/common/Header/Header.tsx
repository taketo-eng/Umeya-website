import Image from "next/image"
import styles from "./Header.module.scss"
import { useState } from "react"
import Link from "next/link"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link scroll={false} href="#top">
            <Image alt="梅屋" src="/logo_square_w.svg" width={100} height={100} />
          </Link>
        </h1>
      </div>
      <div onClick={toggle} className={`${styles.nav_icon} ${isOpen ? styles.active : ""}`}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.nav_bg} ${isOpen ? styles.active : ""}`}></div>
      <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link scroll={false} onClick={close} href="#top">
              TOP
            </Link>
          </li>
          <li>
            <Link scroll={false} onClick={close} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link scroll={false} onClick={close} href="#history">
              History
            </Link>
          </li>
          <li>
            <Link scroll={false} onClick={close} href="#background">
              Background
            </Link>
          </li>
          <li>
            <Link scroll={false} onClick={close} href="#access">
              Access
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
