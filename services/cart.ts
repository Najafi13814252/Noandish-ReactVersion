import { apiFetch } from "./api"

export const cartServices = {
    getAll: async () => {
        return await apiFetch('/cart', {
            method: 'GET'
        })
    },
    addCart: async (courseId: number) => {
        return await apiFetch('/cart', {
            method: 'POST',
            body: JSON.stringify({ courseId: courseId })
        })
    },
    deleteCart: async (courseId: number) => {
        return await apiFetch(`/cart/${courseId}`, {
            method: 'DELETE'
        })
    },
}