import { IconifyIcon } from "@iconify/react"

import callIcon from "@iconify-icons/solar/call-chat-line-duotone"
import diplomaIcon from "@iconify-icons/solar/diploma-line-duotone"
import notemarkIcon from "@iconify-icons/solar/notebook-bookmark-line-duotone"
import dialogIcon from "@iconify-icons/solar/dialog-line-duotone"
import academicIcon from "@iconify-icons/solar/square-academic-cap-2-line-duotone"

type Introduction = {
    id: number
    title: string
    icon_name: IconifyIcon
}

const introduction: Introduction[] = ([
    { id: 1, title: 'پاسخ‌گویی به سوالات و راهنمایی توسط استاد یا منتور دوره', icon_name: callIcon},
    { id: 2, title: 'ارائه گواهی‌نامه رسمی موسسات آموزشی', icon_name: diplomaIcon },
    { id: 3, title: 'دوره‌های پروژه محور با حضور منتور (راهنما)', icon_name: notemarkIcon },
    { id: 4, title: 'امکان برقراری ارتباط با دانشجویان و پرسش سوالات در تالار گفتگو', icon_name: dialogIcon },
    { id: 5, title: 'تسهیل استخدام برای فارغ‌التحصیلان نواندیش', icon_name: academicIcon }
])

export default introduction