import { MainTitle } from "@/components/Titles/MainTitle"
import { Layout } from "@/components/common/Layout/Layout"
import styles from "@/styles/common.module.scss"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <div className="keyvisual">
        <picture>
          <source media="(max-width:767px)" width="500" height="800" srcSet="kv_sp.jpg" />
          <img width="1920" height="1080" className="w-full" src="kv.jpg" alt="" />
        </picture>
      </div>
      <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title="梅屋とは" titleEn="About" />
          <div className="md:px-4 px-0">
            <div className={`${styles.row}`}>
              <div className="open_anim" data-scroll>
                <Image src="/about.jpg" width={1200} height={675} alt="" />
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
                <Image src="/yabe_river.jpg" width={1200} height={675} alt="" />
              </div>
              <div>
                <p data-scroll className={`${styles.text} fadein_anim`}>
                  梅屋は、前の持ち主の計画により人々が集えるようなカフェになる予定でした。
                  <br />
                  ところが、道半ばに他界してしまい、そのまま計画はストップしてしまいました。
                  <br />
                  そこからおよそ10年後、私たちはよく八女に訪れて地元の方々と交流していました。そんなある日、この古民家の話を聞き、持ち主が当時思い描いていた集う場所を作りたいという思いを引き継ぎ、利活用することを決断しました。
                  <br />
                  それだけでなく、人々の良さ、建ち並ぶ伝統建築、そして梅屋の後ろにある広大な矢部川に惹かれて、この黒木を知ってもらいたいという気持ちも背中を押してくれました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access" className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="w-base max-w-7xl mx-auto">
          <MainTitle isAnim title="アクセス" titleEn="Access" />
          <div className="md:px-4 px-0">
            <div data-scroll className="fadein_anim mb-6">
              <address className={`${styles.text} not-italic font-medium`}>福岡県八女市黒木町黒木37</address>
              <p>
                駐車場から徒歩5分
                <br />※ 駐車場：黒木体育センター隣の黒木町無料駐車場
              </p>
            </div>

            <div className="w-full pt-[40%] relative">
              <iframe
                className="absolute w-full h-full inset-0 border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834.5138870645227!2d130.67101151153!3d33.21263992720276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541087eea76d23d%3A0x93658f51ad481975!2z44CSODM0LTEyMTcg56aP5bKh55yM5YWr5aWz5biC6buS5pyo55S66buS5pyo77yT77yX!5e0!3m2!1sja!2sjp!4v1680924060602!5m2!1sja!2sjp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
