import CartItems from "@/components/templates/cart/CartItems"
import PaymentCard from "@/components/templates/cart/PaymentCard"
import { Icon } from "@iconify/react"
import headerIcon from '@iconify-icons/solar/lightbulb-line-duotone'
import cartIcon from "@iconify-icons/solar/cart-5-bold"

function Cart() {
    return (
        <div className="px-10 pb-10 pt-5 flex flex-col gap-5">
            <div className="flex gap-9 md:gap-12 my-2">
                <div className="relative bottom-1 md:bottom-3 rotate-6">
                    <Icon className="absolute text-[#9AC1C3] text-4xl md:text-5xl dark:text-white" icon={headerIcon} />
                    <Icon icon={cartIcon} className="absolute text-sm md:text-xl right-[.70rem] md:right-[.88rem] top-2 text-main-100" />
                </div>
                <h1 className="flex items-center text-2xl font-lalezar text-main-100 dark:text-white">سبد خرید</h1>
            </div>
            <div className="w-full flex gap-16">
                <div className="w-3/4">
                    <CartItems />
                </div>

                <div className="w-1/4">
                    <PaymentCard />
                </div>
            </div>
        </div>
    )
}

export default Cart
