import { Icon } from "@iconify/react"

import { links } from "@/data/footer"

import directionLeftIcon from "@iconify-icons/solar/arrow-left-bold-duotone"
import Image from "next/image"
import MobileFooter from "./MobileFooter"

function Footer() {
    return (
        <>
            <footer className="mt-20 w-fit mx-4 lg:pr-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-36 items-center text-gray-100">
                    {/* introduction */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center">
                            <div className="bg-white rounded-full">
                                <Image src="/logo.avif" width={80} height={80} loading="lazy" alt="Logo" className="w-20 h-20 relative right-1" />
                            </div>
                            <div className="flex flex-col gap-1 items-start relative bottom-1 pr-1 whitespace-nowrap">
                                <span className="text-3xl font-lalezar text-main-200">نو اندیش</span>
                                <span className="text-xs text-white">بنیاد تعالی آموزشی</span>
                            </div>
                        </div>
                        <p className="w-full lg:w-80">بنیاد تعالی آموزشی نواندیش با هدف ارتقاء دانش و مهارت‌های تخصصی در سازمان‌ها و
                            شرکت‌ها، با
                            بهره‌گیری از اساتید
                            مجرب و محتوای به‌روز، بستری حرفه‌ای برای آموزش و توسعه منابع انسانی فراهم کرده است.
                            ما همراه شما هستیم در مسیر رشد، یادگیری و تعالی سازمانی.
                        </p>
                        {/* <div className="flex items-center gap-4">
                            <div className="flex items-center p-2 rounded-full bg-gray-200 cursor-pointer hover:scale-125 duration-200">
                                <Icon className="text-main-100 text-xl" v-if="app.icon_name" icon="app.icon_name" />
                            </div>
                        </div> */}
                    </div>

                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-40 w-full">
                        {/* quick links */}
                        <li className="flex flex-col gap-1">
                            <span className="mb-3">لینک‌های سریع</span>
                            {links.quick.map(qu => (
                                <ul key={qu.id} className="flex items-center gap-2 cursor-pointer hover:text-main-200 duration-200">
                                    <Icon icon={directionLeftIcon} />
                                    <span>{qu.title}</span>
                                </ul>
                            ))}
                        </li>

                        {/* useful links  */}
                        <li className="flex flex-col gap-1">
                            <span className="mb-3">لینک‌های کاربردی</span>
                            {links.useful.map(use => (
                                <ul key={use.id} className="flex items-center gap-2 cursor-pointer hover:text-main-200 duration-200">
                                    <Icon icon={directionLeftIcon} />
                                    <span>{use.title}</span>
                                </ul>
                            ))}
                        </li >

                        {/* concat us */}
                        < li className="flex flex-col gap-3" >
                            <span className="mb-3">ارتباط با ما</span>
                            {links.concat.map(concat => (
                                <ul key={concat.id} className="flex items-center gap-2">
                                    <Icon icon={concat.icon_name || ''} />
                                    <span>{concat.title}</span>
                                </ul>
                            ))}
                        </li >
                    </ul >
                </div >
            </footer >

            {/* mobile footer */}
            <MobileFooter />
        </>
    )
}

export default Footer
