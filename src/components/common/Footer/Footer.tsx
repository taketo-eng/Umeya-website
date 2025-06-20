import { getLocale } from "@/libs/server/i18n"
import Link from "next/link"

export const Footer = async () => {
  const locale = await getLocale()
  const name = locale === "en" ? "Umeya" : "梅屋"
  const companyName = locale === "en" ? "YUI Renova. Design" : "結リノベデザイン"

  return (
    <footer className="font-noto bg-main text-white py-12">
      <div className="w-base max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-6">
          <small className="text-xs font-medium text-center md:text-left" suppressHydrationWarning>
            ©2023 {name} All rights reserved. <br className="md:hidden" />
            Operated by{" "}
            <a href="https://yui-r.design" target="_blank" rel="noopener noreferrer" suppressHydrationWarning>
              {companyName}
            </a>
          </small>
          <ul className="flex flex-col md:flex-row gap-5 text-xs md:text-sm items-center">
            <li>
              <Link scroll={true} href="#about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link scroll={true} href="#history">
                HISTORY
              </Link>
            </li>
            <li>
              <Link scroll={true} href="#background">
                BACKGROUND
              </Link>
            </li>
            <li>
              <Link scroll={true} href="#event">
                SCHEDULE & EVENT
              </Link>
            </li>
            <li>
              <Link scroll={true} href="#access">
                ACCESS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
