export type Setting = {
  tenant_data: Tenant[]
}

export type Tenant = {
  fieldId: string
  tenant_name: string
  tenant_name_en?: string
  tenant_name_de?: string
  introduction: string
  introduction_en?: string
  introduction_de?: string
  tenant_image: Image
  tenant_image_sp: Image
  instagram_url?: string
  facebook_url?: string
  site_url?: string
}

export type Schedule = {
  title?: string
  title_en?: string
  title_de?: string
  description: string,
  description_en?: string,
  description_de?: string,
  start_time: string
  end_time: string
  category: ('event' | 'open' | '')[]
}

export type InstagramPost = {
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  id: string,
  thumbnail_url?: string
  permalink: string
  caption: string
}

export type Image = {
  url: string
  height: number
  width: number
}

export type Language = 'ja' | 'en' | 'de'