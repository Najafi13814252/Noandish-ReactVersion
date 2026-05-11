import courses from "@/data/courses"
import CardSlider from "../modules/CardSlider"
import SectionHeaders from "../modules/SectionHeaders"
import discountIcon from "@iconify-icons/solar/sale-bold"

function DiscountCourses() {

    const filterCourses = courses.filter(course => course.discount !== 0 && course.discount !== 100)

    return (
        <section>
            <SectionHeaders title="تخفیفی" iconName={discountIcon} iconColor="text-sky-500" />

            <CardSlider courses={filterCourses} />
        </section>
    )
}

export default DiscountCourses
