import CourseContent from "@/components/templates/course/CourseContent"
import CourseDescriptions from "@/components/templates/course/CourseDescriptions"
import CourseShopping from "@/components/templates/course/CourseShopping"
import { apiFetch } from "@/services/api"
import { courseType } from "@/types/course"

async function Course({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  const res = await apiFetch(`/courses/${id}`)
  const course: courseType = await res.json()

  return (
    <section className="px-2 md:px-0 mx-0 md:mx-10 flex flex-col gap-6 my-10 w-full md:w-fit">
      {/* <Breadcrumb /> */}
      <CourseDescriptions course={course} />

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-4 w-full">
          <CourseContent course={course}/>
        </div>

        <div>
          <CourseShopping course={course}/>
        </div>
      </div>
    </section>
  )
}

export default Course
