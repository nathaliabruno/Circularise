import { IOrg } from "@/types"
import Organization from "./Organization"

const OrganizationsList = (organizations: Array<IOrg>) => {
  return (
    <div className="grid grid-cols-2">
      {organizations.length &&
        organizations?.map((org) => (
          <Organization key={org.node_id} {...org} />
        ))}
    </div>
  )
}

export default OrganizationsList
