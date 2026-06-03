import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import { apiFetch } from "@/services/api"
import { courseType } from "@/types/course"

import heartIcon from "@iconify-icons/solar/heart-bold"

async function PopularCourses() {
  const res = await apiFetch('/courses')
  const courses: courseType[] = await res.json()

  const filterCourses = courses.filter(course => course.discount === 0)

  return (
    <section>
      <SectionHeaders title="محبوب" iconName={heartIcon} iconColor="text-red-500" />

      <CardSlider courses={filterCourses} />
    </section>
  )
}

export default PopularCourses
