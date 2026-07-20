import { courseByIdAction } from "@/actions/course-action"
import CourseContent from "@/components/templates/course/CourseContent"
import CourseDescriptions from "@/components/templates/course/CourseDescriptions"
import CourseShopping from "@/components/templates/course/CourseShopping"
import { Suspense } from "react"

async function Course({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  const course = await courseByIdAction(id)

  return (
    <section className="container mx-auto px-4 lg:px-6 flex flex-col gap-6 my-6 lg:my-10">
      {/* <Breadcrumb /> */}
      <Suspense fallback={<p className="text-5xl text-red-500">Loading...</p>}>
        <CourseDescriptions course={course} />
      </Suspense>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4 flex-1 min-w-0">
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
