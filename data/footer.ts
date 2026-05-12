import { IconifyIcon } from "@iconify/react"

import gamilIcon from "@iconify-icons/solar/letter-opened-line-duotone"
import phoneIcon from "@iconify-icons/solar/phone-calling-line-duotone"
import mapIcon from "@iconify-icons/solar/map-point-line-duotone"
import homeIcon from "@iconify-icons/solar/home-angle-bold"
import searchIcon from "@iconify-icons/solar/magnifer-line-duotone"
import widgetIcon from "@iconify-icons/solar/widget-2-line-duotone"
import notebookIcon from "@iconify-icons/solar/notebook-line-duotone"
import userIcon from "@iconify-icons/solar/user-line-duotone"


type Item = {
    id: number
    title?: string
    icon_name?: IconifyIcon
}

type Links = {
    quick: Item[]
    useful: Item[]
    concat: Item[]
    // apps: Item[]
}

const links: Links = ({
    quick: [
        { id: 1, title: 'صفحه اصلی' },
        { id: 2, title: 'درباره ما' },
        { id: 3, title: 'دوره‌های پیشنهادی' },
        { id: 4, title: 'مدرسین' }
    ],
    useful: [
        { id: 1, title: 'ارتباط با ما' },
        { id: 2, title: 'دوره‌ها' },
        { id: 3, title: 'دروس' },
        { id: 4, title: 'ایجاد حساب کاربری' }
    ],
    concat: [
        { id: 1, title: 'Noandish@gmail.com', icon_name: gamilIcon },
        { id: 2, title: '4567 123 9812+', icon_name: phoneIcon },
        { id: 3, title: 'ایران', icon_name: mapIcon }
    ],
    // apps: [
    //     { id: 1, icon_name: 'akar-icons:instagram-fill' },
    //     { id: 2, icon_name: 'akar-icons:linkedinv2-fill' },
    //     { id: 3, icon_name: 'akar-icons:x-fill' },
    //     { id: 4, icon_name: 'akar-icons:whatsapp-fill' }
    // ]
})

const mobileFooter: Item[] = ([
    { id: 1, title: 'خانه', icon_name: homeIcon },
    { id: 2, title: 'جستجو', icon_name: searchIcon },
    { id: 3, title: 'دسته‌بندی‌ها', icon_name: widgetIcon },
    { id: 4, title: 'آموزش‌های من', icon_name: notebookIcon },
    { id: 5, title: 'پروفایل', icon_name: userIcon }
])

export { links, mobileFooter }