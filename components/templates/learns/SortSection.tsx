'use client'

import { Icon } from "@iconify/react"
import sortIcon from "@iconify-icons/solar/sort-from-top-to-bottom-linear"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { updateSearchParams } from "@/utils/updateSearchParams"

function SortSection({ onSelect }: { onSelect?: () => void }) {
    const searchParams = useSearchParams()
    const sort = searchParams.get('sort') || 'default'

    const closeFilterWithSelect = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement;

        if (target.closest("a")) {
            onSelect?.();
        }
    }

    return (
        <section className="flex mb-4 border border-gray-300 rounded-2xl p-4 bg-white w-full dark:bg-darkMode dark:border-gray-700 dark:text-white"
        onClick={closeFilterWithSelect}>
            <div className="flex flex-col lg:flex-row items-center ">
                <div className="flex items-center gap-1 lg:ml-4 lg:mb-0 mb-4">
                    <Icon className="text-xl" icon={sortIcon} />
                    <span className="text-base font-medium">ترتیب:</span>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 text-sm">
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
