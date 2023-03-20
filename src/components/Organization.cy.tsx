import React from "react"
import Organization from "./Organization"

const orgData = {
  login: "railsmachine",
  id: 4497,
  node_id: "MDEyOk9yZ2FuaXphdGlvbjQ0OTc=",
  url: "https://api.github.com/orgs/railsmachine",
  repos_url: "https://api.github.com/orgs/railsmachine/repos",
  events_url: "https://api.github.com/orgs/railsmachine/events",
  hooks_url: "https://api.github.com/orgs/railsmachine/hooks",
  issues_url: "https://api.github.com/orgs/railsmachine/issues",
  members_url: "https://api.github.com/orgs/railsmachine/members{/member}",
  public_members_url:
    "https://api.github.com/orgs/railsmachine/public_members{/member}",
  avatar_url: "https://avatars.githubusercontent.com/u/4497?v=4",
  description: undefined,
}

describe("<Organization />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Organization {...orgData} />)
  })
})
