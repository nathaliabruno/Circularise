import { IMember } from "@/types"
import Avatar from "./Avatar"
import { Text } from "./Text"

const Member = (props: IMember) => {
  const { avatar_url, id, login, item, isUnic } = props
  return (
    <li
      className={`flex justify-start items-center relative ${
        !isUnic
          ? 'before:content-[""] before:inline-block before:absolute before:w-6 before:h-full before:border-l-2 before:left-5 before:border-gray-400 first-of-type:before:h-1/2 first-of-type:before:translate-y-1/2 last-of-type:before:h-1/2 last-of-type:before:-translate-y-1/2'
          : ''
      }`}
    >
      <div className={`text-base text-gray-400 relative w-10 text-center mr-2`}>
        <span className="bg-gray-200 bg-blend-color-dodge py-1">{item}</span>
      </div>
      <Avatar size="small" url={avatar_url} name={login} />
      <div className="pl-4">
        <Text tag="h3" styling="font-bold">
          {login}
        </Text>
        <Text>{id}</Text>
      </div>
    </li>
  )
}

export default Member
