'use client'

import { Icon } from "@iconify/react"
import courseIcon from '@iconify-icons/solar/notebook-minimalistic-linear'
import { apiFetch } from "@/services/api"
import { CourseTeacherType } from "@/types/course-teacher"
import { useEffect, useState } from "react"

function AboutTeacher({ courseId }: { courseId: number }) {

    const [teacher, setTeacher] = useState<CourseTeacherType | null>(null)

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await apiFetch(`/courses/${courseId}/teacher`)
                setTeacher(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchContent()
    }, [courseId])
    return (
        <div className="border border-gray-200 bg-white p-4 rounded-lg text-gray-800 dark:bg-darkMode dark:text-white dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                <img className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover" src="/images/person.webp" alt="teacher_profile" />
                <div className="flex flex-col gap-8 md:gap-4">
                    <span className="text-2xl text-main-100 font-bold dark:text-white text-center md:text-right">{teacher?.fullname}</span>
                    <div className="flex items-center gap-6 justify-center md:justify-stretch">
                        <div className="flex flex-col md:flex-row items-center gap-1 text-xl" >
                            <Icon icon={courseIcon} />
                            <p className="text-base">{teacher?.courses_count} دوره</p>
                        </div>
                    </div>
                    <p className=" text-gray-600 dark:text-gray-300">اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان
                        بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default AboutTeacher
