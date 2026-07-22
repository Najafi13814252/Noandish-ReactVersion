'use client'

import { Icon } from "@iconify/react"
import trashIcon from "@iconify-icons/solar/trash-bin-minimalistic-linear"
import { useContext, useTransition } from "react"
import { CartContext } from "@/contexts/cart"
import Modal from "@/components/modals/Modal"
import useDeleteModal from "@/hooks/useDeleteModal"
import toast from "react-hot-toast"
import { deleteCartAction } from "@/actions/cart-action"


function CartItems() {
    const [isPending, startTransition] = useTransition()

    const { cartItems, refetchCart } = useContext(CartContext)

    const { courseTitle, itemId, showDeleteModal, isOpen, closeModal } = useDeleteModal()

    const handleDeleteCart = async () => {
        startTransition(async () => {
            try {
                await deleteCartAction(itemId)
                refetchCart()
            } finally {
                closeModal()
                toast.success('دوره از سبد خرید حذف شد')
            }
        })
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                {cartItems?.courses.map(item => (
                    <section key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 dark:text-white">
                        {/* عکس، نام دوره و نام مدرس */}
                        <div className="flex items-center gap-4">
                            <img className="w-16 h-16 object-cover aspect-square rounded-xl" src="/images/img-2.webp" alt="cart-image" />
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-medium">{item.title}</p>
                                <p className="text-main-100">سعید احدی</p>
                            </div>
                        </div>

                        {/* قیمت دوره */}
                        <div className="flex gap-4 items-center w-full justify-between lg:justify-stretch lg:w-fit">
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
                    <p className="font-medium text-center">{`آیا میخواهید دوره " ${courseTitle} " را از سبد خرید خود حذف کنید؟`}</p>
                    <button className="text-white bg-red-500 font-medium w-full text-lg py-2 rounded-md cursor-pointer hover:bg-red-600 duration-200"
                        onClick={handleDeleteCart}>
                        {isPending ? <Icon icon='svg-spinners:gooey-balls-1' className="mx-auto text-2xl" /> : 'حذف'}
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default CartItems
