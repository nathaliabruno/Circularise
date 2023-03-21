import { useState } from "react"
import { Card } from "./Card"
import { Text } from "./Text"
import { IOrg } from "@/types"
import Avatar from "./Avatar"
import MembersList from "./MembersList"

const Organization = ({ avatar_url, login, id, node_id }: IOrg) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Card opened={setIsOpened}>
      <article>
        <header className="flex justify-start items-center">
          <Avatar url={avatar_url} name={login} />
          <div className="pl-6">
            <Text tag="h2">{login}</Text>
            <Text>{id}</Text>
            <Text>{node_id}</Text>
          </div>
        </header>
        <MembersList
          login={login}
          className={`overflow-hidden h-0 transition-all duration-300 ease-in-out ${
            isOpened && "h-full"
          }`}
        />
      </article>
    </Card>
  )
}

export default Organization
