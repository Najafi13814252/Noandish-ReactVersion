import { Icon } from "@iconify/react"
import homeIcon from "@iconify-icons/solar/home-angle-bold"
import searchIcon from "@iconify-icons/solar/magnifer-line-duotone"
import widgetIcon from "@iconify-icons/solar/widget-2-line-duotone"
import notebookIcon from "@iconify-icons/solar/notebook-line-duotone"
import userIcon from "@iconify-icons/solar/user-line-duotone"
import CategorySheet from "./navbar/CategorySheet"

function MobileFooter() {
    return (
        <div className="fixed bottom-0 w-full flex lg:hidden justify-between items-center py-2 px-4 z-20 bg-white shadow-lg border-t border-t-gray-200 dark:bg-darkMode dark:border-t-gray-700">
            {/* <CategorySheet /> */}

            <button className="flex flex-col items-center gap-1 text-main-100 cursor-pointer dark:text-white">
                <Icon className="text-xl" icon={homeIcon} />
                <span className="text-xs">خانه</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-main-100 cursor-pointer dark:text-white">
                <Icon className="text-xl" icon={searchIcon} />
                <span className="text-xs">جستجو</span>
            </button>

            <CategorySheet>
                <Icon className="text-xl" icon={widgetIcon} />
                <span className="text-xs">دسته‌بندی‌ها</span>
            </CategorySheet>

            <button className="flex flex-col items-center gap-1 text-main-100 cursor-pointer dark:text-white">
                <Icon className="text-xl" icon={notebookIcon} />
                <span className="text-xs">آموزش‌های من</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-main-100 cursor-pointer dark:text-white">
                <Icon className="text-xl" icon={userIcon} />
                <span className="text-xs">پروفایل</span>
            </button>

        </div >
    )
}

export default MobileFooter
