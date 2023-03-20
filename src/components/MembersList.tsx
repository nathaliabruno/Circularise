import { fetchMembers } from "@/requests"
import { IMember } from "@/types"
import { useQuery } from "react-query"
import { Text } from "./Text"
import Member from "./Member"

const MembersList = ({
  login,
  className,
}: {
  login: string
  className: string
}) => {
  const { data, error, isLoading } = useQuery(["members", login], () =>
    fetchMembers(login)
  )

  if (isLoading) return <div>Loading</div>
  if (error) return <div>error</div>

  return (
    <div className={className}>
      <Text tag="h3" styling="uppercase font-bold mt-8 mb-4">
        Members
      </Text>

      {data.length === 0 ? (
        <Text>No Members for this organization.</Text>
      ) : (
        data.length === 1 && (
          <Member isUnic={true} item={1} key={data[0].id} {...data[0]} />
        )
      )}
      {data.length > 1 &&
        data?.map((member: IMember, index: number) => (
          <Member item={index + 1} key={member.id} {...member} isUnic={false} />
        ))}
    </div>
  )
}

export default MembersList
