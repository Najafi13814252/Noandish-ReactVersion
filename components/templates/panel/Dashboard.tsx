"use client"

import { Icon } from "@iconify/react"
import Link from "next/link"

import panel from "@/data/dashboard"
import { usePathname } from "next/navigation";

function Dashboard() {
    const pathname = usePathname();
    return (
        <aside className="border border-gray-300 rounded-2xl w-72 h-full p-4 bg-white dark:bg-darkMode dark:border-gray-700">
            <div>
                {/* profile */}
                <div className="flex flex-col items-center gap-4 border-b border-b-gray-200 pb-4 dark:border-b-gray-800">
                    <img className="w-32 h-32 rounded-full object-cover" src="/images/person.webp" alt="teacher_profile" />
                    <div className="flex flex-col items-center gap-2 dark:text-white">
                        <span className="font-medium">امیرحسین نجفی</span>
                        <span className="text-gray-500">09374826032</span>
                    </div>
                </div>

                {/* menu */}
                <div className="flex flex-col gap-4">
                    {panel.map(menu => (
                    <div key={menu.id} className={`mt-2 ${pathname === menu.route ? 'bg-teal-50 text-teal-500 border-r-2 border-r-teal-200 shadow-md shadow-teal-100 rounded-l dark:bg-gray-800 dark:border-r-teal-700 dark:shadow-teal-900 dark:shadow-sm dark:text-teal-500 pointer-events-none' : ''}`}>
                        <Link href={menu.route} 
                            className="flex items-center gap-2 px-3 py-2 rounded w-full hover:bg-gray-100 duration-200 dark:text-white dark:hover:bg-gray-800">
                            <Icon className="text-lg" icon={menu.icon} />
                            <p>{menu.title}</p>
                        </Link>
                    </div>
                ))}
                </div>
            </div >
        </aside >
    )
}

export default Dashboard
