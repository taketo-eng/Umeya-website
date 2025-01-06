import { Metadata } from "next"
import { getCurrentLocale } from "@/locales/server"
import { getMetadata } from "@/libs/metadata"
import { TenantSection } from "@/components/sections/TenantSection"
import { KeyVisual } from "@/components/sections/KeyVisual"
import { About } from "@/components/sections/About"
import { HistorySection } from "@/components/sections/HistorySection"
import { BackgroundSection } from "@/components/sections/BackgroundSection"
import { Access } from "@/components/sections/Access"
import { InstagramSection } from "@/components/sections/InstagramSection"
import { ScheduleEvent } from "@/components/sections/ScheduleEvent"

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getCurrentLocale()
  return getMetadata(lang)
}

const Page = async () => {
  return (
    <>
      <KeyVisual />
      <About />
      <TenantSection />
      <HistorySection />
      <BackgroundSection/>
      <ScheduleEvent />
      <Access />
      <InstagramSection />
    </>
  )
}

export default Page
