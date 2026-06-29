import { MyCourseType } from "@/data/myCourses"
import { Icon } from "@iconify/react"
import arrowLeft from '@iconify-icons/solar/arrow-left-broken'
import cartPlusIcon from '@iconify-icons/solar/cart-plus-linear'
import Image from "next/image"
import Link from "next/link"

function LearningCard({ myCourses }: { myCourses: MyCourseType[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full">
            {myCourses.map(course => (
                <div key={course.id} className="relative border border-gray-300 rounded-lg p-2 flex flex-col gap-3 bg-white hover:scale-105 active:scale-95 transition-transform duration-200 dark:bg-darkMode dark:border-gray-700">

                    <Image src={course.image} width={400} height={250} className="w-full h-40 object-cover rounded-lg border border-gray-200" loading="lazy" alt="Course_Image" />

                    {/* course title */}
                    <p className="text-lg font-medium dark:text-white">{course.title}</p>

                    {/* teacher name */}
                    <span className="text-sm text-gray-500 dark:text-gray-400">مدرس: {course.teacherName}</span>

                    {/* progress bar */}
                    {course?.isBuy && (
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-teal-500">{course.progress}%</span>
                                <span className="text-gray-700 text-sm dark:text-gray-500">پیشرفت</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-800">
                                <div className="bg-teal-500 h-2 rounded-full dark:bg-teal-600" style={{ width: course.progress + '%' }}></div>
                            </div>
                        </div >
                    )}

                    {course?.isBuy ? (
                        <div className="flex flex-col sm:flex-row gap-2 mt-3" >
                            <button
                                className="bg-teal-600 w-full py-2 text-white text-sm rounded-md flex items-center justify-center gap-2 hover:bg-teal-700 duration-200 cursor-pointer">
                                ادامه دوره
                                <Icon className="text-lg" icon={arrowLeft} />
                            </button>
                            <button
                                className="border border-teal-600 w-full py-2 text-teal-600 rounded-md text-sm hover:bg-teal-100 duration-200 cursor-pointer dark:hover:bg-gray-800">ثبت
                                نظر</button>
                        </div>
                    ) : course?.price && (
                        <div className="flex items-end h-full">
                            <div className="bg-gray-200/70 flex items-center justify-between w-full pr-2 rounded-md dark:bg-gray-800">
                                <p className="text-lg dark:text-white">{course.price?.toLocaleString('fa-IR')} تومان</p>
                                <button
                                    className="bg-teal-600 text-white px-4 py-2 rounded-l-md flex items-center hover:bg-teal-700 duration-200 cursor-pointer">
                                    <Icon className="text-2xl" icon={cartPlusIcon} />
                                </button>
                            </div>
                        </div>
                    )}
                </div >
            ))}
        </div >
    )
}

export default LearningCard
