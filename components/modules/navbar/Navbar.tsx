"use client"

import { ThemeContext } from "@/contexts/Theme";
import Link from "next/link"
import { useContext, useState } from "react"

import Image from "next/image";
import Modal from "@/components/modals/Modal";
import Register from "../Register";
import Categories from "../Categories";
import useModal from "@/hooks/useModal";
import { AuthContext } from "@/contexts/Auth";
import { CartContext } from "@/contexts/cart";

import Widgets from "@/assets/icons/widgets.svg"
import Moon from "@/assets/icons/moon.svg"
import Sun from "@/assets/icons/sun.svg"
import Search from "@/assets/icons/search.svg"
import Cart from "@/assets/icons/cart.svg"
import Login from "@/assets/icons/login.svg"
import User from "@/assets/icons/user.svg"

function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { cartItems } = useContext(CartContext)
    const { user, loading } = useContext(AuthContext)

    const [showCategories, setShowCategories] = useState(false)
    
    const { isOpen, openModal, closeModal } = useModal()

    return (
        <nav className="flex justify-between items-center border-b border-b-gray-300 md:px-10 px-2 py-1 bg-white z-40 sticky top-0 dark:bg-darkMode dark:border-gray-800">
            <section className="flex items-center gap-1 md:gap-10">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.avif" width={70} height={70} loading="eager" alt="Logo" className="w-full h-auto" />
                    <div className="flex flex-col items-start relative left-2 bottom-1 whitespace-nowrap">
                        <span className="text-2xl font-lalezar text-main-200">نو اندیش</span>
                        <span className="text-xs text-main-100">بنیاد تعالی آموزش</span>
                    </div>
                </Link>

                {/* Category */}
                <div className="relative">
                    <button className="hidden lg:flex items-center gap-1 text-main-100 text-lg dark:text-main-200 cursor-pointer" onClick={() => setShowCategories(!showCategories)}>
                        <Widgets />
                        دسته‌بندی‌ها
                    </button>
                    {showCategories && (
                        <div className="absolute top-full right-0">
                            <Categories />
                        </div>
                    )}
                </div>

                {/* Search Box */}
                <div className="hidden lg:block relative">
                    <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3.5 ">
                        <div className="text-main-100 dark:text-main-200" >
                            <Search />
                        </div>
                    </div>
                    <input type="text" id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl w-full md:w-120 ps-12 p-3 dark:bg-transparent dark:border-gray-700 dark:placeholder:text-white dark:text-white"
                        placeholder="جستجو..." />
                </div>
            </section>

            <section className="flex items-center gap-3">
                {/* System Mode */}
                <button
                    className="p-2 text-main-100 border border-main-100 rounded-full flex cursor-pointer dark:text-main-200 dark:border-main-200"
                    onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <Moon />
                    ) : (
                        <Sun />
                    )}
                </button>

                {/* سبد خرید */}
                <div className="relative">
                    <Link href="/cart"
                        className="p-2 text-main-100 border border-main-100 rounded-full flex cursor-pointer dark:text-main-200 dark:border-main-200">
                        <Cart />
                    </Link>
                    {cartItems?.courses.length >= 1 && user && (
                        <p className="bg-main-200 text-white text-sm w-4.5 h-4.5 text-center flex items-center justify-center rounded-full absolute top-0 -right-2 dark:text-white dark:bg-main-100">{cartItems?.courses.length}</p>
                    )}
                </div>

                {/* Register */}
                {loading ? (
                    <span className="w-32 h-10 py-5.5 bg-gray-200 rounded-lg animate-pulse dark:bg-gray-800"></span>
                ) : user ? (
                    <Link href="/panel/my-courses">
                        <button
                            className="flex items-center gap-2 border border-main-100 text-main-100 px-2 py-2 rounded-full cursor-pointer dark:text-main-200 dark:border-main-200">
                            <User />
                            {/* <p>{user.firstname} {user.lastname}</p> */}
                        </button>
                    </Link>
                ) : (
                    <button
                        className="flex items-center gap-1 p-2 text-main-100 rounded-xl border border-main-100 cursor-pointer dark:text-main-200 dark:border-main-200"
                        onClick={openModal}>
                        <Login />
                        <p className="hidden xs:block"> ورود | ثبت‌نام</p>
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
