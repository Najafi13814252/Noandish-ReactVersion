import Card from "@/components/modules/Card"
import MobileFilterSection from "@/components/templates/learns/MobileFilterSection"
import MobileSortSection from "@/components/templates/learns/MobileSortSection"
import { apiFetch } from "@/services/api"
import { courseType } from "@/types/course"

async function Learns({ searchParams }: {
  searchParams: Promise<{ sort?: string, points?: string, level?: string, type?: string }>
}) {

  const { sort = 'default', points, level, type } = await searchParams

  const params = new URLSearchParams()

  if (sort) params.set('sort', sort)
  if (level) params.set('level', level)
  if (points) params.set('points', points)
  if (type) params.set('type', type)

  console.log(params.toString())

  const courses: courseType[] = await apiFetch(`/courses?${params.toString()}`)

  return (
    <div className="">
      <div className="flex lg:hidden items-center gap-2 mb-4">
        <MobileFilterSection />
        <MobileSortSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
        {courses.map(course => (
          <Card key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

export default Learns
