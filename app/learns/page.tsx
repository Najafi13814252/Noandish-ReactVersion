import Card from "@/components/modules/Card"
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

  const res = await apiFetch(`/courses?${params.toString()}`)
  const courses: courseType[] = await res.json()

  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10">
      {courses.map(course => (
        <Card key={course.id} {...course} />
      ))}
    </div>
  )
}

export default Learns
