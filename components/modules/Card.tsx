import { Icon } from "@iconify/react"
import saveIcon from '@iconify-icons/solar/bookmark-line-duotone'
import bookIcon from '@iconify-icons/solar/notebook-minimalistic-line-duotone'
import membersIcon from '@iconify-icons/solar/square-academic-cap-2-line-duotone'
import clockIcon from '@iconify-icons/solar/clock-circle-line-duotone'
import starIcon from '@iconify-icons/solar/star-bold'
import Image from "next/image"
import { courseType } from "@/data/courses"
import React from "react"
import Link from "next/link"

const Card: React.FC<courseType> = ({ id, src, title, lesson, members, duration, teacher, rate, price, discount }) => {
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
                        <Icon icon={saveIcon} className="text-lg text-main-100 hover:scale-125 duration-200 cursor-pointer" />
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
                <section className="flex justify-between mt-6 items-center">
                    <div className="flex items-center gap-1.5 text-gray-400 hover:text-teal-500 duration-200">
                        <img src="/images/person.webp" alt="teacher_profile" className="rounded-full w-7 h-7 object-cover" />
                        <span className="text-sm">{teacher}</span>
                    </div>

                    <div className="flex gap-1">
                        <p className="text-gray-500 text-sm relative top-[0.5px]">({rate})</p>
                        <div className="flex flex-row-reverse items-end">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const fill = Math.max(0, Math.min(1, Number(rate) - index))

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
        </Link>
    )
}

export default Card
