export type MyCourseType = {
    id: number
    image: string
    title: string
    teacherName: string
    progress: number,
    price?: number
    isBuy?: boolean
}

const favorites: MyCourseType[] = [
    { id: 1, image: '/images/img-1.webp', title: 'توسعه فردی', teacherName: 'علی احمدی', progress: 30, isBuy: true },
    { id: 2, image: '/images/img-3.webp', title: 'مدیریت حرفه‌ای', teacherName: 'رضا عباسی', progress: 55, price: 3648000, isBuy: false },
    { id: 3, image: '/images/img-6.webp', title: 'هنر مذاکره', teacherName: 'سهیل امیری', progress: 72, isBuy: true },
    { id: 4, image: '/images/img-5.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40, price: 2970000, isBuy: false }
]

const myCourses: MyCourseType[] = [
    { id: 1, image: '/images/img-1.webp', title: 'توسعه فردی', teacherName: 'علی احمدی', progress: 30, isBuy: true },
    { id: 2, image: '/images/img-3.webp', title: 'مدیریت حرفه‌ای', teacherName: 'رضا عباسی', progress: 55, isBuy: true },
    { id: 3, image: '/images/img-6.webp', title: 'هنر مذاکره', teacherName: 'سهیل امیری', progress: 72, isBuy: true },
    { id: 4, image: '/images/img-5.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40, isBuy: true },
    { id: 5, image: '/images/img-2.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40, isBuy: true },
    { id: 6, image: '/images/img-3.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40, isBuy: true },
    { id: 7, image: '/images/img-1.webp', title: 'تفکر استراتژیک', teacherName: 'سارا رضایی', progress: 40, isBuy: true }
]

export {favorites ,myCourses}