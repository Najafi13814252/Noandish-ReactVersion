'use client'

import { Icon } from "@iconify/react"
import trashIcon from "@iconify-icons/solar/trash-bin-minimalistic-linear"
import { useContext, useState } from "react"
import { CartContext } from "@/contexts/cart"
import useModal from "@/hooks/useModal"
import Modal from "@/components/modals/Modal"


function CartItems() {

    const { cartItems, deleteCart, loading } = useContext(CartContext)

    const { isOpen, openModal, closeModal } = useModal()

    const [cartTitle, setCartTitle] = useState('')
    const [courseId, setCourseId] = useState(0)

    const showDeleteModal = (cartTitle: string, cartId: number) => {
        openModal()
        setCartTitle(cartTitle)
        setCourseId(cartId)
    }

    const handleDeleteCart = async () => {
        try {
            await deleteCart(courseId)
        } finally {
            closeModal()
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                {cartItems?.courses.map(item => (
                    <section key={item.id} className="flex items-center justify-between pt-4 border-t border-t-gray-200">
                        {/* عکس، نام دوره و نام مدرس */}
                        <div className="flex items-center gap-4">
                            <img className="w-16 h-16 object-cover aspect-square rounded-xl" src="/images/img-2.webp" alt="cart-image" />
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-medium">{item.title}</p>
                                <p className="text-main-100">سعید احدی</p>
                            </div>
                        </div>

                        {/* قیمت دوره */}
                        <div className="flex gap-4 items-center">
                            {item.discount > 0 ? (
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col items-end gap-1">
                                        <p className="font-medium text-lg">{(item.price - (item.price * item.discount / 100)).toLocaleString('fa-IR')} تومان</p>
                                        <p className="font-medium line-through text-sm text-gray-500">{item.price.toLocaleString('fa-ir')} تومان</p>
                                    </div>
                                    <p className="px-2 py-1 bg-main-100 text-white rounded">{item.discount}%</p>
                                </div>
                            ) : (
                                <p className="font-medium text-lg">{item.price.toLocaleString('fa-ir')} تومان</p>
                            )}
                            <Icon className="text-lg text-main-100 cursor-pointer" icon={trashIcon} onClick={() => showDeleteModal(item.title, item.id)} />
                        </div>
                    </section>
                ))}
            </div>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="mt-8 flex flex-col gap-6 text-center">
                    <p className="font-medium">آیا میخواهید دوره {cartTitle} را از سبد خرید خود حذف کنید؟</p>
                    <button className="text-white bg-red-500 font-medium w-full text-lg py-2 rounded-md cursor-pointer hover:bg-red-600 duration-200"
                        onClick={handleDeleteCart}>
                            {loading ? <Icon icon='svg-spinners:gooey-balls-1' className="mx-auto text-2xl"/> : 'حذف'}
                        </button>
                </div>
            </Modal>
        </>
    )
}

export default CartItems
