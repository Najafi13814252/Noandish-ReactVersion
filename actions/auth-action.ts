'use server'

import { loginSchema, signupSchema } from "@/schemas/auth";
import { apiFetch } from "@/services/api";
import { cookies } from "next/headers";
import z from "zod";

export async function loginAction(data: z.infer<typeof loginSchema>) {
    const { data: result } = await apiFetch('/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
            identifier: data.identifier,
            password: data.password
        })
    })

    const cookieStore = await cookies();

    cookieStore.set("token", result.token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
    });
}

export async function signupAction(data: z.infer<typeof signupSchema>) {
    const { response, data: result } = await apiFetch('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            username: data.username,
            password: data.password
        })
    })

    if (response.status === 422) {
        return {
            success: false,
            message: 'کاربری با این ایمیل یا نام‌کاربری قبلا ثبت‌نام شده است'
        }
    }

    const cookieStore = await cookies();

    cookieStore.set("token", result.token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
    });
}

export async function getMe() {
    const { data } = await apiFetch('/auth/me', {
        method: 'GET'
    })

    return data
}