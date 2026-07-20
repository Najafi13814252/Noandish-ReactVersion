import { courseAction } from "@/actions/course-action"
import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import fireIcon from "@iconify-icons/solar/fire-bold"
import { Suspense } from "react"

function FreeCourses() {
    return (
        <section>
            <SectionHeaders title="رایگان" iconName={fireIcon} iconColor="text-orange-500" />

            <Suspense>
                <FreeCoursesList />
            </Suspense>
        </section>
    )
}

export default FreeCourses

// جدا مینویسیم تا SectionHeaders الکی منتظر دیتا نماند
async function FreeCoursesList() {
    const { freeCourses } = await courseAction()
    return <CardSlider courses={freeCourses} />
}