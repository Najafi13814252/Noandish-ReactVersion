"use client"

import { AuthContext } from "@/contexts/Auth";
import { LoginFormValues, SignupFormValues } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";

function useRegister(onSuccess?: () => void) {
    const router = useRouter();

    const { login, signup, authLoading } = useContext(AuthContext)

    const handleLogin = async (data: LoginFormValues) => {
        await login(data);
        onSuccess?.()
        router.push('/');
    };

    const handleSignup = async (data: SignupFormValues) => {
        await signup(data);
        onSuccess?.()
        router.push('/');
    };

    return {
        authLoading,
        handleLogin,
        handleSignup
    }
}

export default useRegister