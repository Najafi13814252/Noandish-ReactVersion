import { IconifyIcon } from "@iconify/react"

import caseIcon from "@iconify-icons/solar/case-line-duotone"
import levelIcon from "@iconify-icons/solar/course-up-bold-duotone"
import groupIcon from "@iconify-icons/solar/users-group-two-rounded-line-duotone"
import laptopIcon from "@iconify-icons/solar/laptop-line-duotone"
import shopIcon from "@iconify-icons/solar/shop-2-line-duotone"
import banknoteIcon from "@iconify-icons/solar/banknote-2-line-duotone"
import codeIcon from "@iconify-icons/solar/code-2-bold-duotone"
import dialogIcon from "@iconify-icons/solar/dialog-line-duotone"

type CategoriesType = {
    id: number
    title: string
    icon: IconifyIcon
    course_number: number
}

const categories: CategoriesType[] = [
    { id: 1, title: 'مدیریت حرفه‌ای', icon: caseIcon, course_number: 109 },
    { id: 2, title: 'توسعه فردی', icon: levelIcon, course_number: 86 },
    { id: 3, title: 'مهارت‌های نرم', icon: groupIcon, course_number: 45 },
    { id: 4, title: 'آموزش‌های دیجیتال و فناوری', icon: laptopIcon, course_number: 34 },
    { id: 5, title: 'بازاریابی، فروش و مشتری‌مداری', icon: shopIcon, course_number: 29 },
    { id: 6, title: 'مالی و حسابداری', icon: banknoteIcon, course_number: 48 },
    { id: 7, title: 'برنامه‌نویسی', icon: codeIcon, course_number: 39 },
    { id: 8, title: 'ارتباط موثر', icon: dialogIcon, course_number: 57 }
]

export default categories