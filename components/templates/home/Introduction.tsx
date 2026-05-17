import introduction from "@/data/intruduction"
import { Icon } from "@iconify/react"

function Introduction() {
    return (
        <section className="flex flex-col justify-center items-center gap-12 bg-gray-50 py-10 rounded-2xl px-2 dark:bg-gray-800">
            <span className="font-lalezar text-main-100 text-3xl dark:text-white">چرا نواندیش؟</span>

            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-28">
                {introduction.map(intro => (
                    <div key={intro.id} className="flex flex-col items-center text-center gap-4">
                        <div className="flex items-center border border-main-100 p-4 rounded-3xl dark:border-main-200 bg-main-200/10">
                            <Icon className="text-4xl text-main-100 dark:text-gray-200" icon={intro.icon_name} />
                        </div>
                        <p className="w-40 h-20 text-gray-800 dark:text-white">{intro.title}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Introduction
