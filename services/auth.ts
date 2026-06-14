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
    me() {
        return apiFetch('/auth/me', {
            method: 'GET'
        })
    },

    // => user: {id, email, username}
    login(payload: LoginPayload) {
        return apiFetch('/auth/signin', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
    },

    signup(payload: SignupPayload) {
        return apiFetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
    },

    logout() {
        return apiFetch('/auth/logout', {
            method: 'POST',
        })
    },
}