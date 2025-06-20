import { TenantSection } from "@/components/sections/TenantSection"
import { KeyVisual } from "@/components/sections/KeyVisual"
import { About } from "@/components/sections/About"
import { HistorySection } from "@/components/sections/HistorySection"
import { BackgroundSection } from "@/components/sections/BackgroundSection"
import { Access } from "@/components/sections/Access"
import { InstagramSection } from "@/components/sections/InstagramSection"
import { ScheduleEvent } from "@/components/sections/ScheduleEvent"



const Page = async () => {
  return (
    <>
      <KeyVisual />
      <About />
      <TenantSection />
      <HistorySection />
      <BackgroundSection />
      <ScheduleEvent />
      <Access />
      <InstagramSection />
    </>
  )
}

export default Page
