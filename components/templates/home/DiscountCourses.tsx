import { courseAction } from "@/actions/course-action"
import CardSlider from "@/components/modules/CardSlider"
import SectionHeaders from "@/components/modules/SectionHeaders"
import discountIcon from "@iconify-icons/solar/sale-bold"
import { Suspense } from "react"

function DiscountCourses() {
    return (
        <section>
            <SectionHeaders title="تخفیفی" iconName={discountIcon} iconColor="text-sky-500" />

            <Suspense>
                <DiscountCoursesList />
            </Suspense>
        </section>
    )
}

export default DiscountCourses

async function DiscountCoursesList() {
    const { discountCourses } = await courseAction()
    return <CardSlider courses={discountCourses} />
}
