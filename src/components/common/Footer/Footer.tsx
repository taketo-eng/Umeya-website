import Link from "next/link"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation("common")
  return (
    <footer className="font-noto bg-main text-white py-12">
      <div className="w-base max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-6">
          <small
            className="text-xs font-medium text-center md:text-left"
            suppressHydrationWarning
          >
            ©2023 {t("info.umeya_name")} All rights reserved.{" "}
            <br className="md:hidden" />
            Operated by{" "}
            <a
              href="https://yui-r.design"
              target="_blank"
              rel="noopener noreferrer"
              suppressHydrationWarning
            >
              {t("info.company_name")}
            </a>
          </small>
          <ul className="flex flex-col md:flex-row gap-5 text-xs md:text-sm items-center">
            <li>
              <Link scroll={false} href="#about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link scroll={false} href="#history">
                HISTORY
              </Link>
            </li>
            <li>
              <Link scroll={false} href="#background">
                BACKGROUND
              </Link>
            </li>
            <li>
              <Link scroll={false} href="#access">
                ACCESS & SCHEDULE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
