"use client"

import { Icon } from "@iconify/react"
import filterIcon from '@iconify-icons/solar/filter-linear'
import Form from 'next/form'
import { useSearchParams } from "next/navigation"
import { useRef } from "react"

function FilterSection() {
    const searchParams = useSearchParams()
    const formRef = useRef<HTMLFormElement>(null)

    // خواندن مقادیر از url 
    const type = searchParams.get('type')
    const level = searchParams.get('level')
    const points = searchParams.get('points')
    const sort = searchParams.get('sort')

    const handleChange = () => {
        formRef.current?.requestSubmit()
    }

    return (
        <Form
            ref={formRef}
            action="/learns"
            onChange={handleChange}
            className="flex flex-col divide-y divide-gray-200 gap-4 border border-gray-300 rounded-2xl w-full lg:w-60 h-full p-4 bg-white dark:bg-darkMode dark:border-gray-700 dark:text-white dark:divide-gray-800"
        >

            {sort && <input type="hidden" name="sort" value={sort} />}

            <section className="pb-4 flex items-center gap-2">
                <Icon className="text-xl" icon={filterIcon} />
                <span className="text-lg font-medium">فیلترها</span>
            </section>

            {/* امتیاز دوره */}
            <section className="text-2xl flex flex-col gap-4 pb-4">
                <span className="text-base text-main-100 font-medium">امتیاز دوره</span>
                {['4.5', '4.0', '3.5', '3.0'].map((val, i) => (
                    <label key={val} htmlFor={`checkbox-${i + 1}`} className="flex items-center">
                        <input
                            type="checkbox"
                            name="points"
                            value={val}
                            defaultChecked={points === val}
                            id={`checkbox-${i + 1}`}
                            className="filterSection-label-checkbox"
                        />
                        <span className="filterSection-input-checkbox">{val} به بالا</span>
                    </label>
                ))}
            </section>

            {/* سطح دوره */}
            <section className="text-2xl flex flex-col gap-4 pb-4">
                <span className="text-base text-main-100 font-medium">سطح دوره</span>
                {['مقدماتی', 'پیشرفته', 'مقدماتی تا پیشرفته'].map((val, i) => (
                    <label key={val} htmlFor={`checkbox-${i + 5}`} className="flex items-center">
                        <input
                            type="checkbox"
                            name="level"
                            value={val}
                            defaultChecked={level === val}
                            id={`checkbox-${i + 5}`}
                            className="filterSection-label-checkbox"
                        />
                        <span className="filterSection-input-checkbox">{val}</span>
                    </label>
                ))}
            </section>

            {/* نوع دوره */}
            <section className="text-2xl flex flex-col gap-4 pb-4">
                <span className="text-base text-main-100 font-medium">نوع دوره</span>
                <label htmlFor="checkbox-8" className="flex items-center">
                    <input type="checkbox" name="type" value="free" defaultChecked={type === 'free'} id="checkbox-8" className="filterSection-label-checkbox" />
                    <span className="filterSection-input-checkbox">رایگان</span>
                </label>
                <label htmlFor="checkbox-9" className="flex items-center">
                    <input type="checkbox" name="type" value="paid" defaultChecked={type === 'paid'} id="checkbox-9" className="filterSection-label-checkbox" />
                    <span className="filterSection-input-checkbox">نقدی</span>
                </label>
            </section>
        </Form>

    )
}

export default FilterSection
