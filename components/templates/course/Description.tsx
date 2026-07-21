import { Icon } from "@iconify/react"
import checkIcon from '@iconify-icons/solar/check-circle-linear'
import fileIcon from '@iconify-icons/solar/file-text-line-duotone'
import closeIcon from '@iconify-icons/solar/close-circle-linear'

function Description({ prerequisites }: { prerequisites: string[] }) {
    return (
        <div className="text-gray-800">
            <div className="flex flex-col gap-4 border border-gray-200 bg-white px-4 py-6 rounded-lg dark:bg-darkMode dark:text-white dark:border-gray-800">
                {/* descriptons */}
                <div className="flex items-center gap-2">
                    <Icon className="text-4xl text-yellow-500" icon={fileIcon} />
                    <span className="text-xl md:text-2xl font-bold">توضیحات</span>
                </div>
                <div className="flex flex-col gap-4">
                    <p>طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                        حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    <p>از آنجایی که گنجاندن امکانات بیشتر باعث سنگین‌تر شدن آن می‌شود، و از طرف دیگر همه کاربران وردپرس به آن
                        نیازی ندارند، این افزونه‌های وردپرس هستند که کار توسعه امکانات وردپرس را به عهده دارند. در ادامه مطلب با
                        آکادمی لرن آپ مرجع آموزش برنامه نویسی همراه باشید. اگر علاقمند به کسب اطلاعات بیشتر درباره وردپرس هستید
                        پیشنهاد میکنیم به سایت رسمی وردپرس مراجعه نمایید.
                    </p>
                </div>

                {/* prerequisites */}
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-medium mb-2">پیش‌نیازهای دوره</span>
                    <div className="flex flex-col gap-3">
                        {prerequisites.map((check, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {check !== null ? (
                                    <>
                                        <Icon className="text-lg text-sky-600" icon={checkIcon} />
                                        <span className="font-medium">{check}</span>
                                    </>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Icon className="text-lg text-red-500" icon={closeIcon} />
                                        <p className="text-lg font-medium">ندارد</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Description
