'use client'
import React, { FC } from "react"
import styles from "@/styles/common.module.scss"
import { FadeInUp } from "@/components/animations/FadeInUp"
import { VeilOpen } from "@/components/animations/VeilOpen"
import Image from "next/image"
import { Tenant } from "@/types/common"
import clsx from "clsx"
import { nl2br } from "@/helpers/converter"
import { useLocale } from "@/hooks/i18n-client"

type TenantItemProps = {
  data: Tenant
}

type LinkItemProps = {
  locale: string
  label: string
  labelEn: string
  url: string
}

const LinkButton: FC<LinkItemProps> = ({ locale, label, labelEn, url }) => {
  return (
    <a
      className="hover:opacity-60 relative md:flex md:justify-items-center md:items-center md:gap-2 duration-300 font-medium bg-white text-center text-lg px-6 md:px-4 py-2 text-main border-main border rounded"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {locale == "en" ? labelEn : label}
      <Image className="absolute md:relative right-3 top-1/2 md:right-0 md:top-0 -translate-y-1/2 md:translate-y-0 !w-3 h-3" width={30} height={30} src="/external-link.svg" alt="external-link" />
    </a>
  )
}

export const TenantItem = ({ data }: TenantItemProps) => {
  const locale = useLocale()

  const tenant_name = locale === "en" && data.tenant_name_en ? data.tenant_name_en : data.tenant_name
  const introduction = locale === "en" && data.introduction_en ? data.introduction_en : data.introduction
  const isVertical = data.tenant_image.height / data.tenant_image.width > 1

  return (
    <li className="md:px-8 mb-10">
      <h3 className="text-main font-bold mb-4 border-b border-main pb-2 text-xl">{tenant_name}</h3>
      <div className={`${styles.row} ${styles.reverse} ${styles.pad_col}`}>
        <VeilOpen className={clsx(isVertical && "md:!w-1/2 lg:!w-1/4")}>
          <Image className="md:hidden" src={data.tenant_image_sp.url} width={data.tenant_image_sp.width} height={data.tenant_image_sp.height} alt={tenant_name} />
          <Image className="hidden md:block" src={data.tenant_image.url} width={data.tenant_image.width} height={data.tenant_image.height} alt={tenant_name} />
        </VeilOpen>
        <div className="w-full">
          <FadeInUp>
            <p
              className={`${styles.text} ${styles.tenant_message} mb-8`}
              dangerouslySetInnerHTML={{
                __html: nl2br(introduction),
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