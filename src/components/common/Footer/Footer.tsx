import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="font-noto bg-main text-white py-12">
      <div className="w-base max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between gap-6">
          <small className="text-xs font-medium">©2023 梅屋 All rights reserved.</small>
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
                ACCESS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
