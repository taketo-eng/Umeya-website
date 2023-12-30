import styles from "@/styles/common.module.scss"
import { MainTitle } from "@/components/parts/MainTitle"

import { getI18n } from "@/locales/server"
import { TenantList } from "@/components/parts/TenantList"
import { Suspense } from "react"

export const TenantSection = async () => {
  const t = await getI18n()

  return (
    <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="w-base max-w-7xl mx-auto">
        <MainTitle isAnim title={t("tenant.title")} titleEn="Shops" />
        <div className="md:px-4 px-0">
          <p className={`${styles.text} mb-8`}>{t("tenant.desc")}</p>
          <Suspense>
            {/* @ts-expect-error Async Server Component */}
            <TenantList />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
