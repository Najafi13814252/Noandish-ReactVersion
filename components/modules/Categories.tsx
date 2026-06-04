'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import menu from '@/data/categoriesMenu'

export default function Categories() {
    const [isSelected, setIsSelected] = useState<number>(1)

    return (
        <div className="mt-7 bg-gray-50 rounded-b-lg border border-gray-200 shadow-lg w-[46rem] dark:bg-gray-900 dark:border-gray-800 dark:text-white relative">
            {menu.map((menuItem) => (
                <div
                    key={menuItem.id}
                    className="flex items-center justify-between relative h-full"
                >
                    {/* main menu */}
                    <div className="flex items-center w-1/2 bg-white dark:bg-gray-800">
                        <div
                            className={`flex items-center justify-between p-4 w-full cursor-pointer duration-200
                            ${
                                isSelected === menuItem.id
                                    ? 'bg-teal-50 text-teal-500 font-font-medium border-l-2 border-l-teal-500 hover:bg-teal-50 dark:bg-teal-800 dark:text-teal-50 dark:hover:bg-teal-800'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            onClick={() => setIsSelected(menuItem.id)}
                        >
                            <div className="flex items-center gap-2">
                                <Icon
                                    className="text-xl"
                                    icon={menuItem.icon_name}
                                />
                                <span className="text-sm">
                                    {menuItem.title}
                                </span>
                            </div>

                            <Icon
                                className="text-lg"
                                icon="solar:alt-arrow-left-outline"
                            />
                        </div>
                    </div>
                </div>
            ))}

            {/* sub menu */}
            {menu.map((items) => (
                <div
                    key={items.id}
                    className="flex flex-col gap-8 p-4 absolute rounded-b-lg left-0 top-0 w-1/2"
                >
                    {isSelected === items.id && (
                        <div className="flex flex-col gap-7">
                            <div className="flex items-center justify-between text-teal-500 cursor-pointer">
                                <span className="text-sm">
                                    همه آموزش‌های {items.title}
                                </span>

                                <Icon icon="solar:arrow-left-broken" />
                            </div>

                            {items.items.map((item, index) => (
                                <div key={index}>
                                    <span className="text-sm hover:text-teal-500 cursor-pointer duration-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}