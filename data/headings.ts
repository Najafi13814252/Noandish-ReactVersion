type HeadingsType = {
    id: number
    title: string
    options: {
        id: number
        title: string
        type: string
    }[]
}


const courseHeadings: HeadingsType[] = [
    {
        id: 1,
        title: 'مقدمه و معرفی مدرس',
        options: [
            {id: 1, title: 'معرفی دوره', type: 'public' },
            {id: 2, title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            {id: 3, title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            {id: 4, title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            {id: 5, title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
    {
        id: 2,
        title: 'پیاده‌سازی پلاگین آمار بازدید',
        options: [
            {id: 1, title: 'معرفی دوره', type: 'public' },
            {id: 2, title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            {id: 3, title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            {id: 4, title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            {id: 5, title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
    {
        id: 3,
        title: 'پیاده‌سازی پلاگین رای دادن به مطالب',
        options: [
            {id: 1, title: 'معرفی دوره', type: 'public' },
            {id: 2, title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            {id: 3, title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            {id: 4, title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            {id: 5, title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
    {
        id: 4,
        title: 'پیاده‌سازی پلاگین فروشگاه اینترنتی با درگاه پرداخت',
        options: [
            {id: 1, title: 'معرفی دوره', type: 'public' },
            {id: 2, title: 'ساخت منوها در بخش مدیریت', type: 'public' },
            {id: 3, title: 'متاباکس و ذخیره اطلاعات برای پست‌ها', type: 'public' },
            {id: 4, title: 'استفاده از قالب استاندارد در پلاگین‌ها', type: 'private' },
            {id: 5, title: 'ذخیره و بازیابی تنظیمات در وردپرس', type: 'private' }
        ]
    },
]

export default courseHeadings