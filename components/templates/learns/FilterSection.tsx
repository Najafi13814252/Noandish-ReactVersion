"use client"

import { Icon } from "@iconify/react"
import filterIcon from '@iconify-icons/solar/filter-linear'
import Link from "next/link"
import { updateSearchParams } from "@/utils/updateSearchParams"
import { useSearchParams } from "next/navigation"

function FilterSection({ onSelect }: { onSelect?: () => void }) {
    const searchParams = useSearchParams()

    const type = searchParams.get('type')
    const level = searchParams.get('level')
    const points = searchParams.get('points')

    const closeFilterWithSelect = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement;

        if (target.closest("a")) {
            onSelect?.();
        }
    }

    return (
        <aside className="flex flex-col divide-y divide-gray-200 gap-4 border border-gray-300 rounded-2xl w-full lg:w-60 h-full p-4 bg-white dark:bg-darkMode dark:border-gray-700 dark:text-white dark:divide-gray-800"
            onClick={closeFilterWithSelect}>
            <section className="pb-4 flex items-center gap-2">
                <Icon className="text-xl" icon={filterIcon} />
                <span className="text-lg font-medium">فیلترها</span>
            </section>

            {/* امتیاز دوره */}
            <section className="text-2xl flex flex-col gap-4 pb-4">
                <span className="text-base text-main-100 font-medium">امتیاز دوره</span>
                <Link href={`/learns?${updateSearchParams(searchParams, 'points', '4.5')}`}
                    className="flex items-center">
                    <input checked={points === '4.5'} readOnly id="checkbox-1" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-1" className="filterSection-input-checkbox">4.5 به بالا</label>
                </Link>
                <Link href={`/learns?${updateSearchParams(searchParams, 'points', '4.0')}`}
                    className="flex items-center">
                    <input checked={points === '4.0'} readOnly id="checkbox-2" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-2" className="filterSection-input-checkbox">4.0 به بالا</label>
                </Link>
                <Link href={`/learns?${updateSearchParams(searchParams, 'points', '3.5')}`}
                    className="flex items-center">
                    <input checked={points === '3.5'} readOnly id="checkbox-3" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-3" className="filterSection-input-checkbox">3.5 به بالا</label>
                </Link>
                <Link href={`/learns?${updateSearchParams(searchParams, 'points', '3.0')}`}
                    className="flex items-center">
                    <input checked={points === '3.0'} readOnly id="checkbox-4" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-4" className="filterSection-input-checkbox">3.0 به بالا</label>
                </Link>
            </section>

            {/* سطح دوره */}
            <section className="text-2xl flex flex-col gap-4 pb-4">
                <span className="text-base text-main-100 font-medium">سطح دوره</span>
                <Link href="/learns?level=مقدماتی" className="flex items-center">
                    <input checked={level === 'مقدماتی'} readOnly id="checkbox-5" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-5" className="filterSection-input-checkbox">مقدماتی</label>
                </Link>
                <Link href="/learns?level=پیشرفته" className="flex items-center">
                    <input checked={level === 'پیشرفته'} readOnly id="checkbox-6" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-6" className="filterSection-input-checkbox">پیشرفته</label>
                </Link>
                <Link href="/learns?level=مقدماتی تا پیشرفته" className="flex items-center">
                    <input checked={level === 'مقدماتی تا پیشرفته'} readOnly id="checkbox-7" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-7" className="filterSection-input-checkbox">مقدماتی تا پیشرفته</label>
                </Link>
            </section>

            {/* نوع دوره */}
            <section className="text-2xl flex flex-col gap-4 pb-4">
                <span className="text-base text-main-100 font-medium">نوع دوره</span>
                <Link href={`/learns?${updateSearchParams(searchParams, 'type', 'free')}`}
                    className="flex items-center">
                    <input checked={type === 'free'} readOnly id="checkbox-8" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-8" className="filterSection-input-checkbox">رایگان</label>
                </Link>
                <Link href={`/learns?${updateSearchParams(searchParams, 'type', 'paid')}`}
                    className="flex items-center">
                    <input checked={type === 'paid'} readOnly id="checkbox-9" type="checkbox" value="" className="filterSection-label-checkbox" />
                    <label htmlFor="checkbox-9" className="filterSection-input-checkbox">نقدی</label>
                </Link>
            </section>
        </aside>
    )
}

export default FilterSection
