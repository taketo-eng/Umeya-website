import styles from "@/styles/common.module.scss"
import { MainTitle } from "@/components/parts/MainTitle"
import { TenantList } from "@/components/parts/TenantList"
import { dictionary } from "@/libs/server/i18n"

export const TenantSection = async () => {
  const dict = (await dictionary())["Tenant"]

  return (
    <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="w-base max-w-7xl mx-auto">
        <MainTitle isAnim title={dict["title"]} titleEn="Shops" />
        <div className="md:px-4 px-0">
          <p className={`${styles.text} mb-8`}>{dict["description"]}</p>
          <TenantList />
        </div>
      </div>
    </section>
  )
}
