import { fetchOrgs } from "@/requests"
import { IOrg } from "@/types"
import { useQuery } from "react-query"
import Organization from "./Organization"

const OrganizationsList = () => {
  const { data, error, isLoading } = useQuery("organizations", fetchOrgs)

  if (isLoading) return <div>Loading</div>
  if (error) return <div>error</div>

  return (
    <div className="flex flex-wrap gap-4">
      {data &&
        data?.map((organization: IOrg) => (
          <Organization key={organization.id} {...organization} />
        ))}
    </div>
  )
}

export default OrganizationsList
