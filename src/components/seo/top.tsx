import { NextSeo } from "next-seo"
import { useTranslation } from "react-i18next"

export const TopPageSeo = () => {
  const { t } = useTranslation("seo")
  const title = t("top.title")
  return <NextSeo title={title} />
}
