import { fetchMembers } from "@/requests"
import { IMember } from "@/types"
import { useQuery } from "react-query"
import { Text } from "./Text"
import Member from "./Member"

const MembersList = ({ login }: { login: string }) => {
  const { data, error, isLoading } = useQuery("members", () =>
    fetchMembers(login)
  )

  if (isLoading) return <div>Loading</div>
  if (error) return <div>error</div>

  return (
    <div className="columns-2">
      <Text tag="h3" styling="uppercase font-bold">
        Members
      </Text>
      {data?.map((member: IMember) => (
        <Member key={member.id} {...member} />
      ))}
    </div>
  )
}

export default MembersList
