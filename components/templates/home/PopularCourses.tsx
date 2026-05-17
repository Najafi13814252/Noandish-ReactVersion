import courses from "@/data/courses"
import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"

import heartIcon from "@iconify-icons/solar/heart-bold"

function PopularCourses() {

  const filterCourses = courses.filter(course => course.discount === 0)

  return (
    <section>
      <SectionHeaders title="محبوب" iconName={heartIcon} iconColor="text-red-500" />

      <CardSlider courses={filterCourses} />
    </section>
  )
}

export default PopularCourses
