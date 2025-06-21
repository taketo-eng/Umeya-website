import { locales } from "@/helpers/constant"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://umeya.life'
  const lastModified = new Date("2025-06-10")

  const pages = [
    "",
  ]

  const urls: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      urls.push({
        url: locale === 'ja' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: page === "" ? "weekly" : "yearly",
        priority: page === "" ? 1 : 0.5,
      })
    }
  }

  return urls
}
