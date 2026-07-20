import { apiFetch } from "./api"

export interface LoginPayload {
    identifier: string
    password: string
}

export interface SignupPayload {
    firstname: string
    lastname: string
    email: string
    username: string
    password: string
}

export const authService = {
    // => user: {id, firstname, lastname, email, username}
    async me() {
        const {data} = await apiFetch('/auth/me', {
            method: 'GET'
        })
        return data
    },

    logout() {
        return apiFetch('/auth/logout', {
            method: 'POST',
        })
    },
}