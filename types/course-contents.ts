export type CourseContentsType = {
    id: number
    title: string
    lessons: {
        id: number
        duration: number
        title: string
        is_free: number
    }[]
}