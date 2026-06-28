'use client'

import { cartServices } from "@/services/cart"
import { CartItemsType, CartType } from "@/types/cart"
import { createContext, useEffect, useState } from "react"

type CartContextType = {
    cartItems: CartType
    addCart: (courseId: number) => Promise<void>
    deleteCart: (courseId: number) => Promise<void>
    totalPrice: number
    profit: number
    loading: boolean
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartType>({
        courses: [],
        total: ''
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        try {
            const cart = await cartServices.getAll()
            setCartItems(cart || {
                courses: [],
                total: '0'
            })
        } catch {
            setCartItems({
                courses: [],
                total: '0'
            })
        }
    }

    const addCart = async (courseId: number) => {
        await cartServices.addCart(courseId)
        getCart()
    }

    const deleteCart = async (courseId: number) => {
        setLoading(true)
        try {
            await cartServices.deleteCart(courseId)
            getCart()
        } finally {
            setLoading(false)
        }
    }

    const totalPrice = cartItems?.courses.map(item => item.price).reduce((total, current) => total + current, 0) || 0
    const profit: number = totalPrice - Number(cartItems?.total)

    return (
        <CartContext.Provider value={{ cartItems, addCart, deleteCart, totalPrice, profit, loading }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider