import Card from "@/components/modules/Card"
import { apiFetch } from "@/services/api"
import { courseType } from "@/types/course"

async function LearnsByCategory({ searchParams, params }: {
    searchParams: Promise<{ sort?: string, points?: string, level?: string, type?: string }>,
    params: Promise<{ slug: string }>
}) {

    const { sort = 'default', points, level, type } = await searchParams
    const { slug } = await params

    const param = new URLSearchParams()

    if (sort) param.set('sort', sort)
    if (level) param.set('level', level)
    if (points) param.set('points', points)
    if (type) param.set('type', type)

    console.log(param.toString())

    const { data } = await apiFetch(`/courses/category/${slug}?${param.toString()}`)

    return (
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
            {data.map((course: courseType) => (
                <Card key={course.id} {...course} />
            ))}
        </div>
    )
}

export default LearnsByCategory
