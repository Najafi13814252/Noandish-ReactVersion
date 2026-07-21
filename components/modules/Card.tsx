"use client"

import { Icon } from "@iconify/react"
import saveIcon from '@iconify-icons/solar/bookmark-line-duotone'
import saveFavoriteIcon from '@iconify-icons/solar/bookmark-bold'
import bookIcon from '@iconify-icons/solar/notebook-minimalistic-line-duotone'
import membersIcon from '@iconify-icons/solar/square-academic-cap-2-line-duotone'
import clockIcon from '@iconify-icons/solar/clock-circle-line-duotone'
import starIcon from '@iconify-icons/solar/star-bold'
import Image from "next/image"
import { courseType } from "@/types/course"
import Link from "next/link"
import { toggleFavoriteCourseAction } from "@/actions/course-action"
import { useState, useTransition } from "react"
import toast from "react-hot-toast"


const Card: React.FC<courseType> = ({ id, image_url, title, lessons, members, duration, teacher_name, points, price, discount, favorite }) => {
    const [isFavorite, setIsFavorite] = useState(favorite)

    const [isPending, startTransition] = useTransition()

    const handleToggleFavorite = (courseId: number) => {
        startTransition(async () => {
            if (favorite) {
                const result = await toggleFavoriteCourseAction(courseId)
                setIsFavorite(result)
                toast.success("دوره با موفقیت از لیست علاقه‌مندی‌ها حذف شد", {
                    style: {
                        fontSize: '0.9rem'
                    }
                })
            } else {
                const result = await toggleFavoriteCourseAction(courseId)
                setIsFavorite(result)
                toast.success("دوره با موفقیت به لیست علاقه‌مندی‌ها اضافه شد", {
                    style: {
                        fontSize: '0.9rem'
                    }
                })
            }
        })
    }

    return (

        <div className="flex flex-col relative gap-2 border bg-white border-teal-200 rounded-2xl shadow-md shadow-teal-200 p-3 cursor-pointer transform transition-transform duration-200 hover:scale-105 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-800">

            {/* عکس دوره */}
            <Link href={`/courses/${id}`}>
                <Image src={image_url || '/images/img-1.webp'} width={400} height={250} className="w-full h-40 object-cover rounded-lg border border-gray-200" loading="lazy" alt="Course_Image" />
            </Link>


            <section className="flex flex-col gap-7">
                {/* عنوان دوره */}

                <div className="flex items-center justify-between">
                    <Link href={`/courses/${id}`}>
                        <p className="text-lg font-bold text-gray-800 dark:text-white">{title}</p>
                    </Link>
                    <Icon className="text-lg text-main-100 hover:scale-125 duration-200 cursor-pointer disabled:opacity-50"
                        // icon={isFavorite ? saveFavoriteIcon : saveIcon}
                        icon={isPending ? 'svg-spinners:gooey-balls-1' : isFavorite ? saveFavoriteIcon : saveIcon}
                        onClick={() => handleToggleFavorite(id)}
                    />
                </div>


                {/* جزئیات دوره */}
                <div className="flex justify-between gap-2 text-gray-500 text-sm font-medium h-2">
                    <div className="flex items-center gap-1 whitespace-nowrap dark:text-gray-50">
                        <Icon className="text-sky-500 text-xl" icon={bookIcon} />
                        <p>{lessons} درس</p>
                    </div>
                    <div className="flex items-center gap-1 whitespace-nowrap dark:text-gray-50">
                        <Icon className="text-green-500 text-xl" icon={membersIcon} />
                        <p>{members} دانشجو</p>
                    </div>
                    <div className="flex items-center gap-1 dark:text-gray-50 whitespace-nowrap">
                        <Icon className="text-pink-500 text-xl" icon={clockIcon} />
                        <p className="">{duration} ساعت</p>
                    </div>
                </div>
            </section>

            {/* پروفایل معلم */}
            <section className="flex justify-between mt-6 items-center">
                <div className="flex items-center gap-1.5 text-gray-500 hover:text-teal-500 duration-200">
                    <img src="/images/person.webp" alt="teacher_profile" className="rounded-full w-7 h-7 object-cover" />
                    <span className="text-sm">{teacher_name}</span>
                </div>

                <div className="flex gap-1">
                    <p className="text-gray-500 text-sm relative top-[0.5px]">({points})</p>
                    <div className="flex flex-row-reverse items-end">
                        {Array.from({ length: 5 }).map((_, index) => {
                            const fill = Math.max(0, Math.min(1, Number(points) - index))

                            return (
                                <div key={index} className="relative" dir="ltr">
                                    <Icon
                                        icon={starIcon}
                                        className="text-xl text-gray-300"
                                    />

                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ width: `${fill * 100}%` }}
                                    >
                                        <Icon
                                            icon={starIcon}
                                            className="text-xl text-yellow-400"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <hr className="text-gray-200 dark:text-gray-700" />

            {/* قیمیت دوره */}
            <section className="flex justify-end items-center gap-1 dark:text-white">
                {discount !== 0 ? (
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <p className="text-sm bg-red-500 text-white font-medium p-1 rounded-md">{discount}%</p>
                            <p className="line-through text-gray-500">{price.toLocaleString('fa-IR')}</p>
                        </div>
                        {discount === 100 ? (
                            <p className="text-xl font-lalezar text-teal-500 dark:text-white">رایگان!</p>
                        ) : (
                            <p className="text-xl font-medium">{(price - (price * discount / 100)).toLocaleString('fa-IR')} <span className="text-sm font-normal text-gray-400">تومان </span></p>
                        )}
                    </div>
                ) : (
                    <p className="text-xl font-medium">{price.toLocaleString('fa-IR')} <span className="text-sm font-normal text-gray-400">تومان </span></p>
                )}
            </section>
        </div>
    )
}

export default Card
