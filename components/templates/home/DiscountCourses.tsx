import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import { apiFetch } from "@/services/api"
import { courseType } from "@/types/course"
import discountIcon from "@iconify-icons/solar/sale-bold"

async function DiscountCourses() {
    const res = await apiFetch('/courses')
    const courses: courseType[] = await res.json()

    const filterCourses = courses.filter(course => course.discount !== 0 && course.discount !== 100)

    return (
        <section>
            <SectionHeaders title="تخفیفی" iconName={discountIcon} iconColor="text-sky-500" />

            <CardSlider courses={filterCourses} />
        </section>
    )
}

export default DiscountCourses
