"use client"

import { ThemeContext } from "@/contexts/Theme";
import { Icon } from "@iconify/react";
import Link from "next/link"
import { useContext, useState } from "react"

import categoryIcon from '@iconify-icons/solar/widget-2-line-duotone'
import darkIcon from '@iconify-icons/solar/moon-bold-duotone'
import lightIcon from '@iconify-icons/solar/sun-2-bold-duotone'
import searchIcon from '@iconify-icons/solar/magnifer-line-duotone'
import loginIcon from '@iconify-icons/solar/login-line-duotone'
import cartIcon from '@iconify-icons/solar/cart-5-line-duotone'
import Image from "next/image";
import Modal from "@/components/modals/Modal";
import Register from "../Register";
import Categories from "../Categories";
import useModal from "@/hooks/useModal";
import { AuthContext } from "@/contexts/Auth";

function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { user, loading } = useContext(AuthContext)
    const [showCategories, setShowCategories] = useState(false)
    const { isOpen, openModal, closeModal } = useModal()

    return (
        <nav className="flex justify-between items-center border-b border-b-gray-300 md:px-10 px-2 py-1 bg-white z-40 sticky top-0 dark:bg-darkMode dark:border-gray-800">
            <section className="flex items-center gap-1 md:gap-10">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.avif" width={80} height={80} loading="eager" alt="Logo" className="w-full h-auto" />
                    <div className="flex flex-col items-start relative left-2 bottom-1 whitespace-nowrap">
                        <span className="text-3xl font-lalezar text-main-200">نو اندیش</span>
                        <span className="text-xs text-main-100">بنیاد تعالی آموزشی</span>
                    </div>
                </Link>

                {/* Category */}
                <div className="relative">
                    <button className="hidden md:flex items-center gap-1 text-main-100 text-lg dark:text-main-200 cursor-pointer" onClick={() => setShowCategories(!showCategories)}>
                        <Icon icon={categoryIcon} className="text-2xl" />
                        دسته‌بندی‌ها
                    </button>
                    {showCategories && (
                        <div className="absolute top-full right-0">
                            <Categories />
                        </div>
                    )}
                </div>

                {/* Search Box */}
                <div className="hidden md:block relative">
                    <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3.5 ">
                        <Icon className="text-2xl text-main-100 dark:text-main-200" icon={searchIcon} />
                    </div>
                    <input type="text" id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl w-full md:w-120 ps-12 p-3 dark:bg-transparent dark:border-gray-700 dark:placeholder:text-white dark:text-white"
                        placeholder="جستجو..." />
                </div>
            </section>

            <section className="flex items-center gap-4">
                {/* System Mode */}
                <button
                    className="p-2 text-main-100 border border-main-100 rounded-full flex cursor-pointer dark:text-main-200 dark:border-main-200"
                    onClick={toggleTheme}>
                    <Icon className="text-2xl" icon={theme === 'light' ? darkIcon : lightIcon} />
                </button>

                {/* سبد خرید */}
                <button
                    className="p-2 text-main-100 border border-main-100 rounded-full flex cursor-pointer dark:text-main-200 dark:border-main-200">
                    <Icon className="text-2xl" icon={cartIcon} />
                </button>

                {/* Register */}
                {loading ? (
                    <span className="w-32 h-10 py-5.5 bg-gray-200 rounded-lg animate-pulse dark:bg-gray-800"></span>
                ) : user ? (
                    <Link href="/panel/my-courses">
                        <button
                            className="flex items-center gap-2 border border-main-100 text-main-100 px-4 py-2 rounded-lg cursor-pointer dark:text-main-200 dark:border-main-200">
                            {/* <Icon className="text-2xl" name="solar:user-outline" /> */}
                            <p>{user.firstname} {user.lastname}</p>
                        </button>
                    </Link>
                ) : (
                    <button
                        className="md:flex items-center gap-1 p-2 text-main-100 rounded-xl border border-main-100 cursor-pointer dark:text-main-200 dark:border-main-200"
                        onClick={openModal}>
                        <Icon icon={loginIcon} className="rotate-180 text-2xl" />
                        ورود | ثبت‌نام
                    </button>
                )}

                <Modal isOpen={isOpen} onClose={closeModal}>
                    <Register onSuccess={closeModal} />
                </Modal>
            </section>
        </nav>
    )
}

export default Navbar
