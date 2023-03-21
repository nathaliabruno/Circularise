const API_TOKEN = process.env.GH_TOKEN

const fetchOrgs = async () => {
  const organizations = API_TOKEN
    ? await fetch(
        'https://api.github.com/organizations?per_page=6&since=4242',
        {
          headers: new Headers({
            Authorization: `Bearer ${API_TOKEN}`,
          }),
        }
      )
    : await fetch('https://api.github.com/organizations?per_page=6&since=4242')
  return organizations.json()
}

const fetchMembers = async (orgLogin: string) => {
  if (!orgLogin) return

  const members = API_TOKEN
    ? await fetch(`https://api.github.com/orgs/${orgLogin}/public_members`, {
        headers: new Headers({
          Authorization: `Bearer ${API_TOKEN}`,
        }),
      })
    : await fetch(`https://api.github.com/orgs/${orgLogin}/public_members`)
  return members.json()
}

export { fetchOrgs, fetchMembers }
