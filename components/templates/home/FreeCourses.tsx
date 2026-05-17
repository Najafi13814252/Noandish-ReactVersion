import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import courses from "@/data/courses"
import fireIcon from "@iconify-icons/solar/fire-bold"

function FreeCourses() {

    const filterCourses = courses.filter(course => course.discount === 100)

    return (
        <section>
            <SectionHeaders title="رایگان" iconName={fireIcon} iconColor="text-orange-500" />

            <CardSlider courses={filterCourses} />
        </section>
    )
}

export default FreeCourses
