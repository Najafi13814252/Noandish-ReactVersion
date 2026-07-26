"use client"

import dynamic from "next/dynamic"
import { courseType } from "@/types/course"
import SkeletonCard from "@/components/loading/SkeletonCard"

const CardSliderInner = dynamic(() => import("./CardSliderInner"), {
    ssr: false,
    loading: () => (
        <div className="grid grid-cols-5 gap-4 my-8 mr-8 ml-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
})

function CardSlider({ courses }: { courses: courseType[] }) {
    return <CardSliderInner courses={courses} />
}

export default CardSlider