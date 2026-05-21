"use client"

import { Icon } from "@iconify/react"
import directionUpIcon from '@iconify-icons/solar/alt-arrow-up-linear'
import searchIcon from '@iconify-icons/solar/magnifer-line-duotone'
import { useState } from "react"
import LearningCard from "@/components/modules/LearningCard"
import {myCourses} from "@/data/myCourses"

const filters = [
    {
        id: 1,
        option: 'نوع دوره',
        icon: 'solar:filter-outline',
        subOption: [
            { id: 1, title: 'رایگان', value: 'free' },
            { id: 2, title: 'نقدی', value: 'cash' }
        ]
    },
    {
        id: 2,
        option: 'وضعیت',
        icon: 'solar:align-right-outline',
        subOption: [
            { id: 1, title: 'شروع نشده', value: 'no-started' },
            { id: 2, title: 'درحال یادگیری', value: 'learning' },
            { id: 3, title: 'تمام شده', value: 'finish' }
        ]
    }
]

function MyCourses() {

    const [openFilter, setOpenFilter] = useState<number | null>(null)

    const openFilterHandler = (filterId: number) => {
        setOpenFilter(openFilter === filterId ? null : filterId)
    }

    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-2xl dark:text-white">دوره‌های من ({myCourses.length} دوره)</h2>

            <div className="flex items-center justify-between gap-4">
                {/* search box */}
                <div className="flex items-center justify-between bg-white border border-gray-300 w-full rounded-lg dark:bg-darkMode dark:border-gray-700">
                    <input className="px-2 py-3 w-full focus:outline-none dark:placeholder:text-gray-200 dark:text-white" type="text" placeholder="جستجو در دوره‌های من..." />
                    <Icon className="text-2xl ml-2 text-gray-500" icon={searchIcon} />
                </div>

                {/* filter */}
                {filters.map(filter => (
                    <div key={filter.id} className="flex items-center gap-4">
                        <div className="relative">
                            <div className="flex items-center justify-between px-3 py-3 w-52 border border-gray-300 rounded-lg cursor-pointer bg-white hover:border-gray-400 transition dark:bg-darkMode dark:text-gray-200 dark:border-gray-700"
                                onClick={() => openFilterHandler(filter.id)}>
                                <div className="flex items-center gap-2">
                                    <Icon className="text-xl text-gray-500" icon={filter.icon} />
                                    <p>{filter.option}</p>
                                </div>
                                <Icon className={`text-xl transition-transform ${openFilter === filter.id ? '' : 'rotate-180'}`} icon={directionUpIcon} />
                            </div>

                            {/* dropdown */}
                            {openFilter === filter.id && (
                                <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-md shadow-md mt-1 z-20 w-full dark:bg-darkMode dark:border-gray-700">
                                    {filter.subOption.map(option => (
                                        <div key={option.id} className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                                            {option.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div >
                ))}
            </div >

            {/* courses */}
            <LearningCard myCourses={myCourses}/>
        </div >
    )
}

export default MyCourses
