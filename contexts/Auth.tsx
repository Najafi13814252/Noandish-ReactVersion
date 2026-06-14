"use client"

import { authService, LoginPayload, SignupPayload } from "@/services/auth";
import React, { createContext, useEffect, useState } from "react";

type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    authLoading: boolean
    login: (data: LoginPayload) => Promise<void>;
    signup: (data: SignupPayload) => Promise<void>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true) // لود اولیه
    const [authLoading, setAuthLoading] = useState(false)

    // گرفتن user از me 
    const refreshUser = async () => {
        try {
            const data = await authService.me()
            setUser(data?.user || null)
        } catch {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        refreshUser()
    }, [])

    // login
    const login = async (data: LoginPayload) => {
        setAuthLoading(true)
        try {
            const res = await authService.login(data);

            if (res?.user) {
                setUser(res.user);
            }

            await refreshUser();
        } finally {
            setAuthLoading(false)
        }
    };

    // signup
    const signup = async (data: SignupPayload) => {
        const res = await authService.signup(data);

        if (res) {
            setUser(res);
        }

        await refreshUser();
    };

    // logout
    const logout = async () => {
        await authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                authLoading,
                login,
                signup,
                logout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider