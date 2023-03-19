import { useState } from "react"
import { Card } from "./Card"
import { Text } from "./Text"
import { IOrg } from "@/types"

const Organization = (props: IOrg) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Card opened={setIsOpened}>
      <>
        <Text tag="h2">Test title</Text>
      </>
    </Card>
  )
}

export default Organization
