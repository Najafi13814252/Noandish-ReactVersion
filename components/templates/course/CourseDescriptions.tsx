import { Icon } from "@iconify/react"
import starIcon from '@iconify-icons/solar/star-bold-duotone'
import membersIcon from '@iconify-icons/solar/users-group-two-rounded-line-duotone'
import chartIcon from '@iconify-icons/solar/chart-line-duotone'

function CourseDescriptions() {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-beetween gap-10 md:gap-20">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold dark:text-white">عنوان دوره</h2>

                <p className="line-clamp-3 dark:text-gray-100">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                    بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                    با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-9">
                    <div className="flex gap-2">
                        <Icon className="text-2xl text-yellow-500" icon={starIcon} />
                        <span className="text-xl font-medium dark:text-white"><span className="text-lg text-gray-500 dark:text-gray-300">5 /</span> 4.8</span>
                    </div>
                    <div className="flex gap-2">
                        <Icon className="text-2xl text-sky-600" icon={membersIcon} />
                        <span className="text-xl font-medium dark:text-white">169 <span className="text-sm text-gray-500 dark:text-gray-300">دانشجو</span></span>
                    </div>

                    <div className="flex gap-2">
                        <Icon className="text-2xl text-pink-600" icon={chartIcon} />
                        <span className="text-base font-medium dark:text-white relative top-0.5">مقدماتی تا پیشرفته</span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <img className="w-9 h-9 object-cover rounded-full" src="/images/person.webp" alt="teacher"/>
                            <span className="dark:text-white">رضا مردانی</span>
                    </div>
                    <div className="flex items-center gap-2 dark:text-white">
                        <Icon className="text-xl" icon="solar:danger-outline" />
                        <span>آخرین بروزرسانی: 1403/02/10</span>
                    </div>
                </div>
            </div>

            <video className="w-120 h-full rounded-md object-cover" poster="/images/img-1.webp" controls>
                <source src="/videoTest.mp4"/>
            </video>
        </div>
    )
}

export default CourseDescriptions
