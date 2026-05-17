import { Icon } from "@iconify/react"
import saveIcon from '@iconify-icons/solar/bookmark-line-duotone'
import bookIcon from '@iconify-icons/solar/notebook-minimalistic-line-duotone'
import membersIcon from '@iconify-icons/solar/square-academic-cap-2-line-duotone'
import clockIcon from '@iconify-icons/solar/clock-circle-line-duotone'
import teacherIcon from '@iconify-icons/solar/user-line-duotone'
import starIcon from '@iconify-icons/solar/star-bold-duotone'
import Image from "next/image"
import { courseType } from "@/data/courses"
import React from "react"
import Link from "next/link"

const Card: React.FC<courseType> = ({id ,src, title, lesson, members, duration, teacher, rate, price, discount }) => {
    return (
        <Link href={`/courses/${id}`}>
            <div className="mb-20 flex flex-col relative gap-2 border bg-white border-teal-200 rounded-2xl shadow-md shadow-teal-200 p-3 my-4 cursor-pointer transform transition-transform duration-200 hover:scale-105 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-800">
                {/* ذخیره دوره */}
                {/* <button className="absolute right-6 top-6 text-main-100 bg-white rounded-full flex items-center p-1 shadow opacity-85 hover:scale-110 duration-200">
                <Icon icon={saveIcon} className="text-xl" />
            </button> */}

                {/* عکس دوره */}
                <Image src={src} width={400} height={250} className="w-full h-40 object-cover rounded-lg border border-gray-200" loading="lazy" alt="Course_Image" />

                <section className="flex flex-col gap-7">
                    {/* عنوان دوره */}
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-gray-800 dark:text-white">{title}</p>
                        <Icon icon={saveIcon} className="text-lg text-main-100 hover:scale-125 duration-200" />
                    </div>

                    {/* جزئیات دوره */}
                    <div className="flex gap-5 text-gray-500 text-sm font-medium h-2">
                        <div className="flex items-center gap-1.5 whitespace-nowrap dark:text-gray-50">
                            <Icon className="text-sky-500 text-xl" icon={bookIcon} />
                            <p>{lesson} درس</p>
                        </div>
                        <div className="flex items-center gap-1.5 whitespace-nowrap dark:text-gray-50">
                            <Icon className="text-green-500 text-xl" icon={membersIcon} />
                            <p>{members} دانشجو</p>
                        </div>
                        <div className="flex items-center gap-1.5 dark:text-gray-50">
                            <Icon className="text-pink-500 text-xl" icon={clockIcon} />
                            <p className="">+{duration} ساعت</p>
                        </div>
                    </div>
                </section>

                {/* پروفایل معلم */}
                <section className="flex justify-between mt-4">
                    <div className="flex items-center gap-1">
                        <Icon className="text-xl text-main-100 dark:text-gray-400" icon={teacherIcon} />
                        <span className="text-sm text-gray-400">{teacher}</span>
                    </div>

                    <div className="flex items-end">
                        <div className="flex items-center gap-1 text-yellow-500">
                            <div className="flex relative top-0.5">
                                <span className="font-medium">{rate}</span>
                            </div>
                            <div className="flex">
                                <Icon className="text-xl" icon={starIcon} />
                            </div>
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
        </Link>
    )
}

export default Card
