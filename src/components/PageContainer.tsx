import Organization from "./Organization"

const PageContainer = () => {
  return (
    <div className="bg-gray-100 rounded text-black pt-16 pb-16 pr-20 pl-20 w-8/12">
      <h1 className="text-2xl">GitHub organizations and their members</h1>
      <Organization />
    </div>
  )
}
export default PageContainer
