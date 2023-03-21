const fetchOrgs = async () => {
  const organizations = await fetch(
    "https://api.github.com/organizations?per_page=6&since=4242",
    {
      headers: new Headers({
        Authorization: "Bearer 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",
      }),
    }
  )
  return organizations.json()
}

const fetchMembers = async (orgLogin: string) => {
  if (!orgLogin) return

  const members = await fetch(
    `https://api.github.com/orgs/${orgLogin}/public_members`,
    {
      headers: new Headers({
        Authorization: "Bearer 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",
      }),
    }
  )
  return members.json()
}

export { fetchOrgs, fetchMembers }
