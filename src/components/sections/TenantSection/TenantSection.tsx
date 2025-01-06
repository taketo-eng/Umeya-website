import styles from "@/styles/common.module.scss"
import { MainTitle } from "@/components/parts/MainTitle"

import { getCurrentLocale } from "@/locales/server"
import { TenantList } from "@/components/parts/TenantList"

export const TenantSection = async () => {
  const lang = await getCurrentLocale()
  const title = lang == 'en' ? "Shops" : 'シェア店舗'
  const description = lang == 'en' ? "Umeya also rents out space so that stalls can be opened on a smaller scale." : '梅屋では、小さな規模で出店していただけるようにスペースも貸し出しています。'

  return (
    <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="w-base max-w-7xl mx-auto">
        <MainTitle isAnim title={title} titleEn="Shops" />
        <div className="md:px-4 px-0">
          <p className={`${styles.text} mb-8`}>{description}</p>
          <TenantList />
        </div>
      </div>
    </section>
  )
}
