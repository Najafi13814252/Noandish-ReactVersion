"use client"

import dynamic from "next/dynamic"
import { courseType } from "@/types/course"
import SkeletonCard from "@/app/loading/SkeletonCard"

const CardSliderInner = dynamic(() => import("./CardSliderInner"), {
    ssr: false,
    loading: () => <SkeletonCard />
})

function CardSlider({ courses }: { courses: courseType[] }) {
    return <CardSliderInner courses={courses} />
}

export default CardSlider