import { useQuery } from "react-query"

const fetchOrgs = async () => {
  const organizations = await fetch(
    "https://api.github.com/organizations?per_page=6&since=4242"
  )
  return organizations.json()
}

const fetchMembers = async (orgLogin: string) => {
  if (!orgLogin) return

  const members = await fetch(
    `https://api.github.com/orgs/${orgLogin}/public_members`
  )
  return members.json()
}

export { fetchOrgs, fetchMembers }
