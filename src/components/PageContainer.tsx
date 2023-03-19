import OrganizationsList from "./OrganizationsList"
import { Text } from "./Text"

const PageContainer = () => {
  return (
    <div className="bg-gray-100 rounded text-black pt-16 pb-16 pr-20 pl-20 w-8/12">
      <Text tag="h1">GitHub organizations and their members</Text>
      <OrganizationsList />
    </div>
  )
}
export default PageContainer
