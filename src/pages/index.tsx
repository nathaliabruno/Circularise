import { Text } from "@/components/Text"
import OrganizationsList from "@/components/OrganizationsList"

export default function Home() {
  return (
    <main className="p-24 font-karla">
      <div className="bg-gray-100 rounded text-black pt-8 pb-8 pr-10 pl-10 lg:pt-16 lg:pb-16 lg:pr-20 lg:pl-20 w-full lg:w-8/12 m-auto">
        <Text tag="h1" styling="mb-6">
          GitHub organizations and their members
        </Text>
        <OrganizationsList />
      </div>
    </main>
  )
}
