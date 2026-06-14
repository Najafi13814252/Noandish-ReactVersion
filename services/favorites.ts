import { apiFetch } from "./api"

export const favoriteService = {
    toggle: async (courseId: number) => {
        return await apiFetch("/favorites/toggle", {
            method: "POST",
            body: JSON.stringify({ course_id: courseId })
        })
    },

    getAll: async () => {
        return await apiFetch("/favorites")
    }
}