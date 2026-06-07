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
    async me() {
        return apiFetch('/auth/me', {
            method: 'GET'
        })
    },

    async login(payload: LoginPayload) {
        return apiFetch('/auth/signin', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
    },

    async signup(payload: SignupPayload) {
        return apiFetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
    },

    async logout() {
        return apiFetch('/auth/logout', {
            method: 'GET',
        })
    },
}