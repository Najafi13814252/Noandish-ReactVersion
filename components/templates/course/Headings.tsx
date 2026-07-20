"use client"

import { Icon } from "@iconify/react"
import headingsIcon from '@iconify-icons/solar/square-academic-cap-2-line-duotone'
import directionUpIcon from '@iconify-icons/solar/alt-arrow-up-linear'
import lockIcon from '@iconify-icons/solar/lock-keyhole-minimalistic-linear'
import viewIcon from '@iconify-icons/solar/eye-linear'
import playIcon from '@iconify-icons/solar/play-linear'
import { useEffect, useState } from "react"
import { CourseContentsType } from "@/types/course-contents"
import { contentCourseAction } from "@/actions/course-action"

function Headings({ courseId }: { courseId: number }) {
    const [openHeading, setOpenHeading] = useState<null | number>(null)
    const [courseContents, setCourseContents] = useState<CourseContentsType[] | []>([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await contentCourseAction(courseId)
                setCourseContents(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchContent()
    }, [courseId])

    const toggle = (index: number) => {
        setOpenHeading(openHeading === index ? null : index)
    }

    return (
        <div className="border border-gray-200 bg-white p-4 rounded-lg flex flex-col gap-6 text-gray-800 dark:bg-darkMode dark:text-white dark:border-gray-800">
            <div className="flex items-center gap-2">
                <Icon className="text-4xl text-sky-500" icon={headingsIcon} />
                <span className="text-xl md:text-2xl font-bold">سرفصل‌ها</span>
            </div>

            <div className="flex flex-col gap-6">
                {/* course box */}
                {courseContents.map((heading, index) => (
                    <div key={heading.id} className="border border-gray-200 p-4 rounded-md dark:border-gray-700">
                        {/* main title course */}
                        <div className="flex items-center justify-between cursor-pointer text-lg" onClick={() => toggle(index)}>
                            <div className="flex items-center gap-2">
                                <span className="whitespace-nowrap">فصل {index + 1}.</span>
                                <span className="truncate max-w-[180px] sm:max-w-[250px] md:max-w-full font-medium">{heading.title}</span>
                            </div>
                            <Icon className={`text-xl transition-transform ${openHeading === index ? '' : 'rotate-180'}`} icon={directionUpIcon} />
                        </div>

                        {/* detail course */}
                        {openHeading === index && (
                            <div className="my-8 flex flex-col gap-6">
                                {heading.lessons.map((lesson, index) => (
                                    <div key={lesson.id} className="flex items-center justify-between gap-3 p-3 md:p-4 rounded-lg shadow cursor-pointer hover:bg-gray-50 duration-200 dark:bg-gray-700 dark:hover:bg-gray-800">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <Icon icon={playIcon} />
                                                <span className="whitespace-nowrap">جلسه {index + 1}.</span>
                                            </div>
                                            <div className="truncate max-w-[120px] sm:max-w-[220px] md:max-w-full">{lesson.title}</div>
                                        </div>
                                        {lesson.is_free ? (
                                            <div className="flex items-center bg-green-100 p-2 rounded-full dark:bg-gray-600">
                                                <Icon className="text-green-500 text-xl" icon={viewIcon} />
                                            </div>
                                        ) : (
                                            <div className="flex items-center bg-fuchsia-100 p-2 rounded-full dark:bg-gray-600">
                                                <Icon className="text-fuchsia-500 text-xl" icon={lockIcon} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div >
                ))}
            </div >
        </div >
    )
}

export default Headings
