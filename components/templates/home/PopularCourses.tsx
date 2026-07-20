import { courseAction } from "@/actions/course-action"
import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import heartIcon from "@iconify-icons/solar/heart-bold"
import { Suspense } from "react"

function PopularCourses() {
  return (
    <section>
      <SectionHeaders title="محبوب" iconName={heartIcon} iconColor="text-red-500" />

      <Suspense>
        <PopularCoursesList />
      </Suspense>
    </section>
  )
}

export default PopularCourses

async function PopularCoursesList() {
  const { popularCourses } = await courseAction()
  return <CardSlider courses={popularCourses} />
}
