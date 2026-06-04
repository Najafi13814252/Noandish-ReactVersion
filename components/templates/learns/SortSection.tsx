'use client'

import { Icon } from "@iconify/react"
import sortIcon from "@iconify-icons/solar/sort-from-top-to-bottom-linear"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { updateSearchParams } from "@/utils/updateSearchParams"

function SortSection() {
    const searchParams = useSearchParams()
    const sort = searchParams.get('sort') || 'default'

    return (
        <section className="mb-4 flex border border-gray-300 rounded-2xl p-4 bg-white w-full dark:bg-darkMode dark:border-gray-700 dark:text-white">
            <div className="flex items-center">
                <div className="flex items-center gap-1 ml-4">
                    <Icon className="text-xl" icon={sortIcon} />
                    <span className="text-base font-medium">ترتیب:</span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                    <Link href="/learns"
                        className={sort === 'default' ? 'bg-main-100/10 text-main-100 font-medium px-2 py-1 rounded-md' : 'link-sort-section'} >
                        پیشفرض
                    </Link>
                    <Link href={`/learns?${updateSearchParams(searchParams,'sort', 'popular')}`}
                        className={sort === 'popular' ? 'bg-main-100/10 text-main-100 font-medium px-2 py-1 rounded-md' : 'link-sort-section'} >
                        پرمخاطب‌ها
                    </Link>
                    <Link href={`/learns?${updateSearchParams(searchParams,'sort', 'discount')}`}
                        className={sort === 'discount' ? 'bg-main-100/10 text-main-100 font-medium px-2 py-1 rounded-md' : 'link-sort-section'} >
                        تخفیفی‌ها
                    </Link>
                    <Link  href={`/learns?${updateSearchParams(searchParams,'sort', 'newest')}`}
                        className={sort === 'newest' ? 'bg-main-100/10 text-main-100 font-medium px-2 py-1 rounded-md' : 'link-sort-section'} >
                        جدیدترین‌ها
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SortSection
