import { MainTitle } from "@/components/Titles/MainTitle"
import { Layout } from "@/components/common/Layout/Layout"
import styles from "@/styles/common.module.scss"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <div className="keyvisual">
        <picture>
          <source media="(max-width:767px)" srcSet="kv_sp.jpg" />
          <img className="w-full" src="kv.jpg" alt="" />
        </picture>
      </div>
      <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title="梅屋とは" titleEn="About" />
          <div className="md:px-4 px-0">
            <div className={`${styles.row}`}>
              <div className="open_anim" data-scroll>
                <Image src="/test.jpg" width={800} height={500} alt="" />
              </div>
              <div>
                <p data-scroll className={`${styles.text} fadein_anim`}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="history" className="py-8 md:py-10">
        <div className=" w-base max-w-7xl mx-auto">
          <MainTitle isAnim title="梅屋の歴史" titleEn="History" />
          <div className="md:px-4 px-0"></div>
        </div>
      </section>
      <section id="background" className="py-8 md:py-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title="再オープンの背景" titleEn="Background" />
          <div className="md:px-4 px-0">
            <div className={`${styles.row} ${styles.reverse}`}>
              <div className="open_anim" data-scroll>
                <Image src="/test.jpg" width={800} height={500} alt="" />
              </div>
              <div>
                <p data-scroll className={`${styles.text} fadein_anim`}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title="アクセス" titleEn="Access" />
          <div className="md:px-4 px-0"></div>
        </div>
      </section>
    </Layout>
  )
}
