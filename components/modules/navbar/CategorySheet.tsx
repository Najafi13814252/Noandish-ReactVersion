'use client'

import menu from "@/data/categoriesMenu"
import { Icon } from "@iconify/react"
import backIcon from "@iconify-icons/solar/arrow-right-broken"
import React, { useState } from "react"
import { Drawer } from "vaul"

function CategorySheet({children}: {children: React.ReactNode}) {
    const [isSelected, setIsSelected] = useState<number>(1)
    const [showMenu, setShowMenu] = useState(true)
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (
        <Drawer.Root>
            <Drawer.Trigger className="flex flex-col items-center gap-1 text-main-100 cursor-pointer dark:text-white">
                {children}
            </Drawer.Trigger >
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-9997" />
                <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-96 fixed z-9998 bottom-0 left-0 right-0 outline-none dark:bg-darkMode">
                    {/* header */}
                    <div className="sticky top-0 z-10 rounded-t-[10px] px-4 pt-4 space-y-4 dark:bg-darkMode">
                        <div aria-hidden className="mx-auto w-8 h-1 shrink-0 rounded-full bg-gray-300 mb-4" />
                        <div className="flex items-center">
                            <Icon icon={backIcon} className="text-gray-900 text-xl text-right cursor-pointer dark:text-white" onClick={() => {
                                setShowMenu(true)
                                setShowSubMenu(false)
                            }} />
                            <Drawer.Title className="font-medium text-gray-900 text-lg text-center mx-auto translate-x-3 dark:text-white">دسته‌بندی‌ها</Drawer.Title>
                        </div>
                        <hr className="text-gray-200 dark:text-gray-800" />
                    </div>
                    <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto dark:bg-darkMode">
                        <div className="w-full mx-auto space-y-4 relative">
                            {/* menu */}
                            {showMenu && menu.map((menuItem) => (
                                <div
                                    key={menuItem.id}
                                    className="flex items-center justify-between relative h-full"
                                >
                                    {/* main menu */}
                                    <div className="flex items-center w-full bg-white dark:bg-darkMode dark:text-white">
                                        <div
                                            className='flex items-center justify-between py-4 w-full cursor-pointer'
                                            onClick={() => {
                                                setIsSelected(menuItem.id)
                                                setShowMenu(false)
                                                setShowSubMenu(true)
                                            }}
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
                            {showSubMenu && menu.map((items) => (
                                <div
                                    key={items.id}
                                    className="flex items-center justify-between absolute top-full w-full py-4"
                                >
                                    {isSelected === items.id && (
                                        <div className="flex flex-col gap-7 w-full dark:text-white">
                                            <p className="text-sm text-teal-500">
                                                همه آموزش‌های {items.title}
                                            </p>

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
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default CategorySheet
