"use server"

import { apiFetch } from "@/services/api";

export async function addCartAction(courseId: number) {
    const { data } = await apiFetch('/cart', {
        method: 'POST',
        body: JSON.stringify({ courseId: courseId })
    })

    return data
}

export async function cartItemsAction() {
    const { data } = await apiFetch('/cart', {
        method: 'GET'
    })

    return data
}

export async function deleteCartAction(courseId: number) {
    const { data } = await apiFetch(`/cart/${courseId}`, {
        method: 'DELETE',
        body: JSON.stringify({ courseId: courseId })
    })

    return data
}