import React from "react"
import Member from "./Member"

const memberData = {
  login: "dbRM",
  id: 4280300,
  node_id: "MDQ6VXNlcjQyODAzMDA=",
  avatar_url: "https://avatars.githubusercontent.com/u/4280300?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/dbRM",
  html_url: "https://github.com/dbRM",
  followers_url: "https://api.github.com/users/dbRM/followers",
  following_url: "https://api.github.com/users/dbRM/following{/other_user}",
  gists_url: "https://api.github.com/users/dbRM/gists{/gist_id}",
  starred_url: "https://api.github.com/users/dbRM/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/dbRM/subscriptions",
  organizations_url: "https://api.github.com/users/dbRM/orgs",
  repos_url: "https://api.github.com/users/dbRM/repos",
  events_url: "https://api.github.com/users/dbRM/events{/privacy}",
  received_events_url: "https://api.github.com/users/dbRM/received_events",
  type: "User",
  site_admin: false,
}

describe("<Member />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Member {...memberData} isUnic={false} />)
  })
})
