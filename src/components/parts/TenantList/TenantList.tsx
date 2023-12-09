import React, { FC } from "react"
import styles from "@/styles/common.module.scss"
import { FadeInUp } from "@/components/animations/FadeInUp"
import { VeilOpen } from "@/components/animations/VeilOpen/VeilOpen"
import Image from "next/image"
import { Tenant } from "@/types/common"
import { getCurrentLocale } from "@/locales/server"
import { client } from "@/libs/microcms"
import clsx from "clsx"
import { nl2br } from "@/helpers/converter"

type TenantItemProps = {
  data: Tenant
}

type LinkItemProps = {
  locale: "ja" | "en"
  label: string
  labelEn: string
  url: string
}

const LinkButton: FC<LinkItemProps> = ({ locale, label, labelEn, url }) => {
  return (
    <a
      className="hover:opacity-60 flex justify-items-center items-center gap-2 duration-300 font-medium bg-white text-center text-lg px-4 py-2 text-main border-main border rounded"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {locale == "en" ? labelEn : label}
      <Image className="w-3 h-3" width={30} height={30} src="/external-link.svg" alt="external-link" />
    </a>
  )
}

const TenantItem: FC<TenantItemProps> = ({ data }) => {
  const locale = getCurrentLocale()

  const tenant_name = locale == "en" ? (data.tenant_name_en ? data.tenant_name_en : data.tenant_name) : data.tenant_name
  const isVertical = data.tenant_image.height / data.tenant_image.width > 1

  return (
    <li className="md:px-8 mb-10">
      <h3 className="text-main font-bold mb-4 border-b border-main pb-2 text-xl">{tenant_name}</h3>
      <div className={`${styles.row} ${styles.reverse}`}>
        <VeilOpen className={clsx(isVertical && "md:!w-1/5")}>
          <Image src={data.tenant_image.url} width={data.tenant_image.width} height={data.tenant_image.height} alt={tenant_name} />
        </VeilOpen>
        <div className="w-full">
          <FadeInUp>
            <p
              className={`${styles.text} mb-8`}
              dangerouslySetInnerHTML={{
                __html: nl2br(data.introduction),
              }}
            />
            <div className="flex flex-col md:flex-row gap-4">
              {data.site_url && <LinkButton label="公式サイト" labelEn="Website" url={data.site_url} locale={locale} />}
              {data.instagram_url && <LinkButton label="Instagram" labelEn="Instagram" url={data.instagram_url} locale={locale} />}
              {data.facebook_url && <LinkButton label="Facebook" labelEn="Facebook" url={data.facebook_url} locale={locale} />}
            </div>
          </FadeInUp>
        </div>
      </div>
    </li>
  )
}

const getData = async (): Promise<Array<Tenant>> => {
  const data = await client.get({
    endpoint: "tenants",
  })
  return data.contents
}

export const TenantList = async () => {
  const tenants = await getData()

  return <ul>{tenants && tenants.length > 0 && tenants.map((tenant) => <TenantItem key={tenant.id} data={tenant} />)}</ul>
}
