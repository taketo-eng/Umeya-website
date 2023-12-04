"use client"
import Image from "next/image"
import styles from "./Header.module.scss"
import { FC, useState } from "react"
import Link from "next/link"
import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import clsx from "clsx"

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  const toggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
  }

  const close = () => {
    setIsOpen(false)
  }

  const changeLang = () => {
    changeLocale(locale == "en" ? "ja" : "en")
    close()
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
      <div onClick={toggle} className={clsx(styles.nav_icon, isOpen && styles.active)}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={clsx(styles.nav_bg, isOpen && styles.active)}></div>
      <nav className={clsx(styles.nav, isOpen && styles.active)}>
        <ul>
          <li>
            <Link scroll={true} onClick={close} href="#top">
              TOP
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#history">
              History
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#background">
              Background
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#access">
              Access & Schedule
            </Link>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" onClick={close} href="https://www.facebook.com/umeya.kurogi">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" onClick={close} href="https://www.instagram.com/umeya_kurogi/">
              Instagram
            </a>
          </li>
          <li>
            <button onClick={changeLang}>
              {locale == "en" ? "日本語" : "English"}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
