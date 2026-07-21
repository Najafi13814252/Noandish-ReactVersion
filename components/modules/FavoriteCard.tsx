'use client'

import { Icon } from "@iconify/react"
import cartPlusIcon from '@iconify-icons/solar/cart-plus-linear'
import saveBoldIcon from '@iconify-icons/solar/bookmark-bold'
import Image from "next/image"
import Link from "next/link"
import { FavoritesType } from "@/types/favorites"
import Modal from "../modals/Modal"
import { useTransition } from "react"
import toast from "react-hot-toast"
import useDeleteModal from "@/hooks/useDeleteModal"
import { toggleFavoriteCourseAction } from "@/actions/course-action"

function FavoriteCard({ myCourses }: { myCourses: FavoritesType }) {
    const [isPending, startTransition] = useTransition()
    const { courseTitle, itemId, showDeleteModal, isOpen, closeModal } = useDeleteModal()

    const handleDeleteFavorite = () => {
        startTransition(async () => {
            try {
                await toggleFavoriteCourseAction(itemId)
            } finally {
                closeModal()
                toast.success('دوره از لیست علاقه‌مندی‌ها حذف شد')
            }
        })
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full">
                {myCourses.map(course => (
                    <div key={course.id} className="relative border border-gray-300 rounded-lg p-2 flex flex-col gap-3 bg-white hover:scale-105 active:scale-95 transition-transform duration-200 dark:bg-darkMode dark:border-gray-700">

                        {/* ذخیره دوره */}
                        <button className="absolute right-6 top-6 text-main-100 bg-white rounded-full flex items-center p-1 shadow opacity-85 hover:scale-110 duration-200 cursor-pointer"
                            onClick={() => showDeleteModal(course.title, course.id)}>
                            <Icon icon={saveBoldIcon} className="text-xl" />
                        </button>

                        <Link href={`/courses/${course.id}`}>
                            <Image src='/images/img-1.webp' width={400} height={250} className="w-full h-40 object-cover rounded-lg border border-gray-200" loading="lazy" alt="Course_Image" />
                        </Link>

                        {/* course title */}
                        <p className="text-lg font-medium dark:text-white">{course.title}</p>

                        {/* teacher name */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">مدرس: سعید احدی</p>



                        <div className="flex items-end h-full mt-10">
                            <div className="bg-gray-200/70 flex items-center justify-between w-full pr-2 rounded-md dark:bg-gray-800">
                                <p className="text-lg dark:text-white">{(course.price - ((course.price * course.discount) / 100)).toLocaleString('fa-IR')} تومان</p>
                                <button
                                    className="bg-teal-600 text-white px-4 py-2 rounded-l-md flex items-center hover:bg-teal-700 duration-200 cursor-pointer">
                                    <Icon className="text-2xl" icon={cartPlusIcon} />
                                </button>
                            </div>
                        </div>
                    </div >
                ))}
            </div >

            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="mt-8 flex flex-col gap-6 text-center">
                    <p className="font-medium text-center">{`آیا میخواهید دوره " ${courseTitle} " را از علاقه‌مندی‌های خود حذف کنید؟`}</p>
                    <button className="text-white bg-red-500 font-medium w-full text-lg py-2 rounded-md cursor-pointer hover:bg-red-600 duration-200"
                        onClick={handleDeleteFavorite}>
                        {isPending ? <Icon icon='svg-spinners:gooey-balls-1' className="mx-auto text-2xl" /> : 'حذف'}
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default FavoriteCard
