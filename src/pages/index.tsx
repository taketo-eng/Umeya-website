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
          <h2 className={styles.title}>
            <span>About</span>
            <span>梅屋とは</span>
          </h2>
          <div className="md:px-4 px-0">
            <div className={`${styles.row}`}>
              <div>
                <Image src="/test.jpg" width={800} height={500} alt="" />
              </div>
              <div>
                <p className={styles.text}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="history" className="py-8 md:py-10">
        <div className=" w-base max-w-7xl mx-auto">
          <h2 className={styles.title}>
            <span>History</span>
            <span>梅屋の歴史</span>
          </h2>
          <div className="md:px-4 px-0"></div>
        </div>
      </section>
      <section id="background" className="py-8 md:py-10">
        <div className="w-base max-w-7xl mx-auto">
          <h2 className={styles.title}>
            <span>Background</span>
            <span>再オープンの背景</span>
          </h2>
          <div className="md:px-4 px-0">
            <div className={`${styles.row} ${styles.reverse}`}>
              <div>
                <Image src="/test.jpg" width={800} height={500} alt="" />
              </div>
              <div>
                <p className={styles.text}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="w-base max-w-7xl mx-auto">
          <h2 className={styles.title}>
            <span>Access</span>
            <span>アクセス</span>
          </h2>
          <div className="md:px-4 px-0"></div>
        </div>
      </section>
    </Layout>
  )
}
