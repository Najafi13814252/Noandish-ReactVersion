'use client'

import Form from "next/form"
import { useSearchParams } from "next/navigation"
import { Icon } from "@iconify/react"
import sortIcon from "@iconify-icons/solar/sort-from-top-to-bottom-linear"

const options = [
    { value: 'default', label: 'پیشفرض' },
    { value: 'popular', label: 'پرمخاطب‌ها' },
    { value: 'discount', label: 'تخفیفی‌ها' },
    { value: 'newest', label: 'جدیدترین‌ها' },
]

function SortSection() {
    const searchParams = useSearchParams()
    const sort = searchParams.get('sort') || 'default'
    const level = searchParams.get('level')
    const points = searchParams.get('points')
    const type = searchParams.get('type')

    return (
        <section className="flex mb-4 border border-gray-300 rounded-2xl p-4 bg-white w-full dark:bg-darkMode dark:border-gray-700 dark:text-white">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex items-center gap-1 lg:ml-4 lg:mb-0 mb-4">
                    <Icon className="text-xl" icon={sortIcon} />
                    <span className="text-base font-medium">ترتیب:</span>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 text-sm">
                    {options.map(opt => (
                        <Form key={opt.value} action="/learns">
                            {level && <input type="hidden" name="level" value={level} />}
                            {points && <input type="hidden" name="points" value={points} />}
                            {type && <input type="hidden" name="type" value={type} />}
                            <input type="hidden" name="sort" value={opt.value} />
                            <button
                                type="submit"
                                className={sort === opt.value ? 'bg-main-100/10 text-main-100 font-medium px-2 py-1 rounded-md' : 'link-sort-section'}
                            >
                                {opt.label}
                            </button>
                        </Form>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SortSection