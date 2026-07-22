'use client'

import { cartItemsAction } from "@/actions/cart-action"
import { CartType } from "@/types/cart"
import { createContext, useCallback, useEffect, useMemo, useState } from "react"

type CartContextType = {
    cartItems: CartType
    refetchCart: () => Promise<void>
    totalPrice: number
    profit: number
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartType>({
        courses: [],
        total: ''
    })

    const refetchCart = useCallback(async () => {
        try {
            const result = await cartItemsAction()
            setCartItems(result || {
                courses: [],
                total: '0'
            })
        } catch {
            setCartItems({
                courses: [],
                total: '0'
            })
        }
    }, [])

    useEffect(() => {
        refetchCart()
    }, [refetchCart])


    const totalPrice = useMemo(
        () => cartItems?.courses.reduce((sum, item) => sum + item.price, 0) || 0,
        [cartItems]
    )
    
    const profit: number = totalPrice - Number(cartItems?.total)

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, profit, refetchCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider