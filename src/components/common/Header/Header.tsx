"use client"
import Image from "next/image"
import styles from "./Header.module.scss"
import { FC, useRef, useState } from "react"
import Link from "next/link"
import clsx from "clsx"
import gsap from "gsap"
import { useDictionary, useLocale } from "@/hooks/i18n-client"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { locales } from "@/helpers/constant"
import { Language } from "@/types/common"

const DURATION = 0.4

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navBg = useRef(null)
  const nav = useRef(null)
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const otherLocales = locales.filter(l => l !== locale) as Language[]
  const dict = useDictionary()["Nav"]

  const toggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    toggleAnim(newState)
  }

  const close = () => {
    setIsOpen(false)
    toggleAnim(false)
  }

  const toggleAnim = (newState: boolean) => {
    if (navBg.current) {
      if (newState) {
        gsap.to(navBg.current, {
          scale: 1,
          pointerEvents: "auto",
          duration: DURATION,
        })
      } else {
        gsap.to(navBg.current, {
          scale: 0,
          pointerEvents: "none",
          duration: DURATION,
          delay: DURATION,
        })
      }
    }

    if (nav.current) {
      if (newState) {
        gsap.to(nav.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: DURATION,
          delay: DURATION,
        })
      } else {
        gsap.to(nav.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: DURATION,
        })
      }
    }
  }

  const changeLang = (newLocale: Language) => {
    document.cookie = `preferred-locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`

    close()

    const newPathname = pathname.startsWith(`/${locale}`)
      ? pathname.substring(`/${locale}`.length) || "/"
      : pathname

    // return
    if (newLocale === 'ja') {
      router.push(newPathname)
      // window.location.href = '/'
    }
    else {
      router.push(`/${newLocale}${newPathname}`)
      // window.location.href = `/${newLocale}${newPathname}`
    }
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
      <div ref={navBg} className={styles.nav_bg}></div>
      <nav ref={nav} className={styles.nav}>
        <ul>
          <li>
            <Link scroll={true} onClick={close} href="#top">
              TOP
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#shop">
              {dict["shops"]}
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#about">
              {dict["about"]}
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#history">
              {dict["history"]}
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#background">
              {dict["background"]}
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#event">
              {dict["schedule"]}
            </Link>
          </li>
          <li>
            <Link scroll={true} onClick={close} href="#access">
              {dict["access"]}
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
            {otherLocales.map(l => (
              <button key={l} onClick={() => changeLang(l)}>
                {l === "ja" ? "日本語" : l === 'en' ? "English" : "Deutsch"}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  )
}
