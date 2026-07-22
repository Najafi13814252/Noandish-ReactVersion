'use client'

import { Icon } from "@iconify/react"
import notebookIcon from '@iconify-icons/solar/notebook-linear'
import clockIcon from '@iconify-icons/solar/clock-circle-linear'
import caseIcon from '@iconify-icons/solar/case-linear'
import languageIcon from '@iconify-icons/solar/global-linear'
import sappurtIcon from '@iconify-icons/solar/shield-user-linear'
import tagIcon from '@iconify-icons/solar/tag-outline'
// import saveIcon from '@iconify-icons/solar/bookmark-line-duotone'
import cartIcon from '@iconify-icons/solar/cart-large-2-bold'
import { courseType } from "@/types/course"
import { useContext, useTransition } from "react"
import toast from "react-hot-toast"
import { addCartAction } from "@/actions/cart-action"
import { CartContext } from "@/contexts/cart"

function CourseShopping({ course }: { course: courseType }) {

    const [isPending, startTransition] = useTransition()

    const {refetchCart} = useContext(CartContext)

    const features = [
        { id: 1, title_1: 'جلسات', title_2: course.lessons, icon_name: notebookIcon },
        { id: 2, title_1: 'زمان دوره', title_2: `+${course.duration} ساعت`, icon_name: clockIcon },
        { id: 3, title_1: 'پیش‌نیاز', title_2: course.prerequisites[0] !== null ? 'دارد' : 'ندارد', icon_name: caseIcon },
        { id: 4, title_1: 'زبان', title_2: 'فارسی', icon_name: languageIcon },
        { id: 5, title_1: 'روش پشتیبانی', title_2: 'آنلاین', icon_name: sappurtIcon },
        { id: 6, title_1: 'نوع دوره', title_2: course.discount === 100 ? 'رایگان' : 'نقدی', icon_name: tagIcon }
    ]

    const handleAddcart = (courseId: number) => {
        startTransition(async () => {
            try {
                await addCartAction(courseId)
                refetchCart()
                toast.success("دوره به سبد خرید اضافه شد")
            } catch {
                toast.error("دوره در سبد خرید وجود دارد")
            }
        })

    }
    return (
        <div className="text-gray-800 font-medium lg:sticky lg:top-24">
            <div className="border border-gray-300 bg-white rounded-lg w-full lg:w-[350px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* price and description */}
                <div className="flex justify-between items-center gap-4 p-4">
                    <div className="flex items-center gap-2">
                        {course.discount !== 0 && (
                            <>
                                <p className="bg-rose-500 text-white px-2 font-semibold rounded">{course.discount}%</p>
                                <p className="line-through text-gray-400 self-end">{(course.price).toLocaleString('fa-ir')}</p>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-2xl font-bold dark:text-white">{(course.price - ((course.price * course.discount) / 100)).toLocaleString('fa-ir')}</p>
                        <span className="text-sm text-gray-400">تومان</span>
                    </div>
                </div>

                {/* Buy & Save */}
                <div className="flex gap-2 px-2 pt-2 pb-4">
                    <button
                        onClick={() => handleAddcart(course.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-sky-500 text-white py-3 px-4 rounded-md cursor-pointer hover:bg-sky-600 duration-200">
                        {isPending ? (
                            <Icon className="text-2xl" icon="svg-spinners:gooey-balls-1" />
                        ) : (
                            <>
                                <Icon className="text-2xl" icon={cartIcon} />
                                <p className="font-medium text-lg">افزودن به سبد خرید</p>
                            </>
                        )}
                    </button>
                    {/* <button
                        className="flex items-center p-3 rounded-md bg-sky-50 border border-sky-500 text-sky-500 cursor-pointer hover:bg-sky-100 duration-200 dark:bg-gray-800 dark:hover:bg-gray-900">
                        <Icon className="text-xl" icon={saveIcon} />
                    </button> */}
                </div>

                {/* course features */}
                <div className="p-2 border-t border-t-gray-300 dark:border-gray-700">
                    <div className="flex flex-col gap-4 p-2">
                        {features.map(item => (
                            <div key={item.id} className="flex items-center justify-between" >
                                <div className="flex items-center gap-2">
                                    <Icon className="text-gray-500" icon={item.icon_name} />
                                    <span className="dark:text-white">{item.title_1}</span>
                                </div>
                                <span className="dark:text-white">{item.title_2}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CourseShopping
