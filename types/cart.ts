export type CartItemsType = {
    id: number
    course_id: number
    title: string
    image_url: string
    price: number
    discount: number
}

export type CartType = {
    courses: CartItemsType[]
    total: string
}

