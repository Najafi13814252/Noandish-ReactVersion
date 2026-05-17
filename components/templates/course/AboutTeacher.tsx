import { Icon, IconifyIcon } from "@iconify/react"
import videoIcon from '@iconify-icons/solar/videocamera-linear'
import courseIcon from '@iconify-icons/solar/notebook-minimalistic-linear'
import chartIcon from '@iconify-icons/solar/chart-square-linear'

type TeacherDetailsType = {
    id: number
    title: string
    icon_name: IconifyIcon
}

const teacherDetails: TeacherDetailsType[] = [
    { id: 1, title: '14 ویدئو', icon_name: videoIcon },
    { id: 2, title: '4 دوره', icon_name: courseIcon },
    { id: 3, title: 'آپدیت بهمن ماه', icon_name: chartIcon }
]

function AboutTeacher() {
    return (
        <div className="border border-gray-200 bg-white p-4 rounded-lg text-gray-800 dark:bg-darkMode dark:text-white dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <img className="w-48 h-48 rounded-full object-cover" src="/images/person.webp" alt="teacher_profile" />
                <div className="flex flex-col gap-8 md:gap-4">
                    <span className="text-2xl text-main-100 font-bold dark:text-white text-center md:text-right">امیر رحمانی</span>
                    <div className="flex items-center gap-6 justify-center md:justify-stretch">
                        {teacherDetails.map(detail => (
                            <div key={detail.id} className="flex flex-col md:flex-row items-center gap-2" >
                                <Icon icon={detail.icon_name} />
                                <span>{detail.title}</span>
                            </div>
                        ))}
                    </div>
                    <p className=" text-gray-600 dark:text-gray-300">اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان
                        بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default AboutTeacher
