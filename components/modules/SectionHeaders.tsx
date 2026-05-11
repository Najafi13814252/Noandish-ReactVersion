import { Icon, IconifyIcon } from "@iconify/react"
import headerIcon from '@iconify-icons/solar/lightbulb-line-duotone'
import viewMoreIcon from '@iconify-icons/solar/arrow-left-up-bold-duotone' 

type SectionHeadersProps = {
    title: string
    iconName: IconifyIcon
    iconColor: string
}

function SectionHeaders({title, iconName, iconColor}: SectionHeadersProps) {
    return (
        <section className="flex items-center justify-between mx-3 md:mx-5">
            <div className="flex gap-9 md:gap-12">
                <div className="relative bottom-1 md:bottom-3 rotate-6">
                    <Icon className="absolute text-[#9AC1C3] text-4xl md:text-5xl dark:text-white" icon={headerIcon} />
                    <Icon icon={iconName} className={`absolute text-sm md:text-xl right-[.70rem] md:right-[.88rem] top-2 ${iconColor}`}/>
                </div>
                <p className="flex items-center text-2xl md:text-3xl font-lalezar text-main-100 dark:text-white">دوره‌های  {title}</p>
            </div>

            <button className="flex items-center gap-2 border border-main-100 text-main-100 px-3 py-1 rounded-xl cursor-pointer dark:text-main-200 dark:border-main-200">
                همه دوره‌ها
                <Icon className="text-xl" icon={viewMoreIcon} />
            </button>
        </section>
    )
}
export default SectionHeaders
