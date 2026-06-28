"use client"

import { CartContext } from "@/contexts/cart"
import { useContext } from "react"

function PaymentCard() {
    const { cartItems, profit, totalPrice } = useContext(CartContext)
    return (
        <div className="">
            <section className="w-full border border-gray-200 rounded-lg p-4 flex flex-col gap-4 divide-y divide-gray-200 lg:sticky lg:top-4 dark:divide-gray-800 dark:border-gray-800 dark:text-white">
                <div className="flex items-center justify-between pb-4">
                    <p>تعداد دوره‌ها</p>
                    <p>{cartItems?.courses.length}</p>
                </div>

                <div className="flex items-center justify-between pb-4">
                    <p>مبلغ کل</p>
                    <p>{totalPrice.toLocaleString('fa-ir')} تومان</p>
                </div>

                <div className="flex items-center justify-between pb-4">
                    <p>تخفیف</p>
                    <p className="px-2 py-1 rounded-md bg-main-100/10 text-main-100 text-sm dark:text-teal-500">{profit.toLocaleString('fa-ir')} تومان</p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">مبلغ پرداختی</p>
                        <p className="text-lg font-semibold">{Math.round(Number(cartItems?.total)).toLocaleString('fa-ir')} تومان</p>
                    </div>
                    <button className="bg-main-100 text-white text-lg font-medium rounded-md py-2 cursor-pointer">تایید و پرداخت</button>
                </div>
            </section>
        </div>
    )
}

export default PaymentCard
