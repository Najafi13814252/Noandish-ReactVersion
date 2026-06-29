"use client"

import { AuthContext } from "@/contexts/Auth";
import { authService } from "@/services/auth";
import { LoginFormValues, SignupFormValues } from "@/types/auth";
import { useRouter } from "next/navigation";
import { relative } from "path";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

function useRegister(onSuccess?: () => void) {
    const [loading, setLoading] = useState(false)

    const { refreshUser } = useContext(AuthContext)

    const router = useRouter();

    const handleLogin = async (data: LoginFormValues) => {
        setLoading(true)
        try {
            await authService.login(data);
            refreshUser()
            onSuccess?.()
            router.push('/');
            toast.success('ورود با موفقیت انجام شد', {
                duration: 3000,
                style: {
                    position: 'relative',
                    zIndex: 9999
                }
            })
        } catch {
            toast.error('نام‌کاربری یا ایمیل و یا رمز عبور اشتباه است', {
                duration: 3000,
                style: {
                    position: 'relative',
                    zIndex: 9999
                }
            })
        } finally {
            setLoading(false)
        }
    };

    const handleSignup = async (data: SignupFormValues) => {
        setLoading(true)
        try {
            await authService.signup(data);
            refreshUser()
            onSuccess?.()
            router.push('/');
            toast.success('ثبت‌نام با موفقیت انجام شد', {
                duration: 3000,
                style: {
                    position: 'relative',
                    zIndex: 9999
                }
            })
        } catch {
            toast.error('نام‌کاربری یا ایمیل و یا رمز عبور اشتباه است', {
                duration: 3000,
                style: {
                    position: 'relative',
                    zIndex: 9999
                }
            })
        } finally {
            setLoading(false)
        }
    };

    return {
        handleLogin,
        handleSignup,
        loading
    }
}

export default useRegister