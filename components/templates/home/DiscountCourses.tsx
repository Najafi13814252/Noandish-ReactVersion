import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import { courseType } from "@/types/course"
import discountIcon from "@iconify-icons/solar/sale-bold"

function DiscountCourses({courses}: {courses: courseType[]}) {

    const filterCourses = courses.filter(course => course.discount !== 0 && course.discount !== 100)

    return (
        <section>
            <SectionHeaders title="تخفیفی" iconName={discountIcon} iconColor="text-sky-500" />

            <CardSlider courses={filterCourses} />
        </section>
    )
}

export default DiscountCourses
