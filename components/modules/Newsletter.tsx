import { Icon } from "@iconify/react"
import bulbIcon from "@iconify-icons/solar/lightbulb-bolt-line-duotone"
import letterIcon from "@iconify-icons/solar/letter-line-duotone"

function Newsletter() {
    return (
        <section className="w-fit mx-auto px-8 py-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-6 lg:gap-36">
                <div className="flex gap-2">
                    <Icon className="text-main-200 text-4xl rotate-6" icon={bulbIcon} />
                    <span className="w-full text-center md:text-right md:w-40 text-xl text-gray-100">خبرنامه ما را برای آخرین بروزرسانی‌ها دنبال کنید</span>
                </div>

                <form className="flex flex-col w-full md:flex-row md:items-center gap-4 md:gap-2">
                    <div className="flex items-center px-3 gap-2 text-gray-100 py-1 border border-gr50text-gray-100 rounded-full">
                        <Icon className="text-xl" icon={letterIcon} />
                        <input className="w-full md:w-72 outline-none placeholder:text-sm placeholder:text-gray-300" type="email"
                            placeholder="ایمیل خود را وارد کنید" />
                    </div>
                    <button
                        className="w-fit mx-auto bg-teal-500 px-6 py-2 text-sm rounded-full text-white cursor-pointer hover:bg-teal-600 duration-200">هم
                        اکنون مشترک شوید</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter
