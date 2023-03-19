import { Text } from "@/components/Text"
import OrganizationsList from "@/components/OrganizationsList"

export default function Home() {
  return (
    <main className="p-24 font-karla">
      <div className="bg-gray-100 rounded text-black pt-16 pb-16 pr-20 pl-20 w-8/12 m-auto">
        <Text tag="h1">GitHub organizations and their members</Text>
        <OrganizationsList />
      </div>
    </main>
  )
}
