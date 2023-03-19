import { useState } from "react"
import { Card } from "./Card"
import { Text } from "./Text"
import { IOrg } from "@/types"
import Avatar from "./Avatar"
import MembersList from "./MembersList"

const Organization = (props: IOrg) => {
  const [isOpened, setIsOpened] = useState(false)

  const { avatar_url, login, id, node_id } = props
  return (
    <Card opened={setIsOpened}>
      <article>
        <header>
          <Avatar url={avatar_url} name={login} />
          <div>
            <Text tag="h2">{login}</Text>
            <Text>{id}</Text>
            <Text>{node_id}</Text>
          </div>
        </header>
        <MembersList login={login} />
      </article>
    </Card>
  )
}

export default Organization
