"use client"

import { Icon } from "@iconify/react"
import logoutIcon from '@iconify-icons/solar/logout-line-duotone'
import bottomIcon from '@iconify-icons/solar/alt-arrow-down-outline'
import Link from "next/link"

import panel from "@/data/dashboard"
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useContext, useState } from "react"
import { AuthContext } from "@/contexts/Auth"

function Dashboard() {
    const { user } = useContext(AuthContext)

    const [open, setOpen] = useState(false)
    const pathname = usePathname();
    const router = useRouter()
    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
        router.push('/')
    }
    return (
        <div className="relative">
            <aside className={`w-full lg:w-60 lg:h-auto lg:overflow-auto p-4 border border-gray-300 rounded-2xl bg-white dark:bg-darkMode dark:border-gray-700 ${open ? "h-auto" : "h-[11.5rem] overflow-hidden"}`}>
                <div>
                    {/* profile */}
                    <div className="flex flex-col items-center gap-4 border-b border-b-gray-200 pb-4 dark:border-b-gray-800">
                        <img className="w-20 h-20 lg:w-32 lg:h-32 rounded-full object-cover" src="/images/person.webp" alt="teacher_profile" />
                        <div className="flex flex-col items-center gap-2 dark:text-white">
                            <span className="font-medium">{user?.firstname} {user?.lastname}</span>
                            <span className="text-gray-500">{user?.email}</span>
                        </div>
                    </div>

                    {/* menu */}
                    <div className="flex flex-col gap-2">
                        {panel.map(menu => (
                            <div key={menu.id} className={`mt-1 rounded-lg transition ${pathname === menu.route ? 'bg-teal-50 text-teal-500 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                                <Link href={menu.route}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 px-3 py-2 rounded w-full hover:bg-gray-100 duration-200 dark:text-white dark:hover:bg-gray-800">
                                    <Icon className="text-lg" icon={menu.icon} />
                                    <p>{menu.title}</p>
                                </Link>
                            </div>
                        ))}
                        <button className="flex items-center gap-2 px-3 py-2 rounded w-full hover:bg-red-100 hover:text-red-500 duration-200 dark:text-white dark:hover:bg-gray-800 cursor-pointer"
                            onClick={handleLogout}>
                            <Icon className="text-lg" icon={logoutIcon} />
                            <p>خروج</p>
                        </button>
                    </div>
                </div >
            </aside >

            <div className="lg:hidden absolute -bottom-4.5 left-1/2 -translate-x-1/2 z-20">
                <button className="bg-main-100 text-white p-1.5 rounded-lg shadow-md"
                    onClick={() => setOpen(!open)}>
                    <Icon icon={bottomIcon}
                        className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>
            </div>
        </div>
    )
}

export default Dashboard
