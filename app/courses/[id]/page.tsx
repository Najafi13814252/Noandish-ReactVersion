import CourseContent from "@/components/templates/course/CourseContent"
import CourseDescriptions from "@/components/templates/course/CourseDescriptions"
import CourseShopping from "@/components/templates/course/CourseShopping"

async function Course() {
  return (
    <section className="px-2 md:px-0 mx-0 md:mx-10 flex flex-col gap-6 my-10 w-full md:w-fit">
      {/* <Breadcrumb /> */}
      <CourseDescriptions />

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-4 w-full">
          <CourseContent />
        </div>

        <div>
          <CourseShopping />
        </div>
      </div>
    </section>
  )
}

export default Course
