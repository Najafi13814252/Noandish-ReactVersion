"use client"

import { AuthContext } from "@/contexts/Auth";
import { LoginFormValues, SignupFormValues } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";

function useRegister(onSuccess?: () => void) {
    const router = useRouter();

    const { login, signup, authLoading } = useContext(AuthContext)

    const handleLogin = async (data: LoginFormValues) => {
        try {
            await login(data);
            onSuccess?.()
            router.push('/');
            toast.success('ورود با موفقیت انجام شد', {
                duration: 4000
            })
        } catch {
            toast.error('نام‌کاربری یا ایمیل و یا رمز عبور اشتباه است')
        }
    };

    const handleSignup = async (data: SignupFormValues) => {
        try {
            await signup(data);
            onSuccess?.()
            router.push('/');
            toast.success('ثبت‌نام با موفقیت انجام شد', {
                duration: 4000
            })
        } catch {
            toast.error('نام‌کاربری یا ایمیل و یا رمز عبور اشتباه است')
        }
    };

    return {
        authLoading,
        handleLogin,
        handleSignup
    }
}

export default useRegister