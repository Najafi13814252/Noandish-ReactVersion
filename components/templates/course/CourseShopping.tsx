import { Icon, IconifyIcon } from "@iconify/react"
import notebookIcon from '@iconify-icons/solar/notebook-linear'
import clockIcon from '@iconify-icons/solar/clock-circle-linear'
import caseIcon from '@iconify-icons/solar/case-linear'
import languageIcon from '@iconify-icons/solar/global-linear'
import sappurtIcon from '@iconify-icons/solar/shield-user-linear'
import tagIcon from '@iconify-icons/solar/tag-outline'
import saveIcon from '@iconify-icons/solar/bookmark-line-duotone'
import cartIcon from '@iconify-icons/solar/cart-large-2-bold'

type FeaturesType = {
    id: number
    title_1: string
    title_2: string
    icon_name: IconifyIcon
}

const features: FeaturesType[] = [
    { id: 1, title_1: 'جلسات', title_2: '20', icon_name: notebookIcon },
    { id: 2, title_1: 'زمان دوره', title_2: '+12 ساعت', icon_name: clockIcon },
    { id: 3, title_1: 'پیش‌نیاز', title_2: 'دارد', icon_name: caseIcon },
    { id: 4, title_1: 'زبان', title_2: 'فارسی', icon_name: languageIcon },
    { id: 5, title_1: 'روش پشتیبانی', title_2: 'آنلاین', icon_name: sappurtIcon },
    { id: 6, title_1: 'نوع دوره', title_2: 'نقدی', icon_name: tagIcon }
]

function CourseShopping() {
    return (
        <div className="text-gray-800 font-medium sticky top-24">
            <div className="border border-gray-300 bg-white rounded-lg w-full md:w-88 shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* price and description */}
                <div className="flex justify-between items-center gap-4 p-4">
                    <div className="flex items-center gap-2">
                        <span className="bg-rose-500 text-white px-2 font-semibold rounded">50%</span>
                        <span className="line-through text-sm text-gray-400 self-end">2,400,000</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold dark:text-white">1,200,000</span>
                        <span className="text-sm text-gray-400">تومان</span>
                    </div>
                </div>

                {/* Buy & Save */}
                <div className="flex justify-between gap-2 px-2 pt-2 pb-4">
                    <button
                        className="flex items-center gap-2 bg-sky-500 text-white py-2 px-[3.3rem] rounded-md cursor-pointer hover:bg-sky-600 duration-200">
                        <Icon className="text-2xl" icon={cartIcon} />
                        <span className="font-medium text-lg">افزودن به سبد خرید</span>
                    </button>
                    <button
                        className="flex items-center p-3 rounded-md bg-sky-50 border border-sky-500 text-sky-500 cursor-pointer hover:bg-sky-100 duration-200 dark:bg-gray-800 dark:hover:bg-gray-900">
                        <Icon className="text-xl" icon={saveIcon} />
                    </button>
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
