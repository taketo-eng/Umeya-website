
import { getSetting } from "@/helpers/getSetting"
import { TenantItem } from "../TenantItem/TenantItem"

export const TenantList = async () => {
  const setting = await getSetting()

  return (
    <ul>
      {setting.tenant_data && setting.tenant_data.length > 0 && setting.tenant_data.map((tenant, idx) => <TenantItem key={`${tenant.fieldId}_${idx}`} data={tenant} />)}
    </ul>
  )
}
