"use client"

import { authService } from "@/services/auth";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true) // لود اولیه

    // گرفتن user از me 
    const refreshUser = async () => {
        try {
            const data = await authService.me()
            setUser(data?.user || null)
        } catch {
            setUser(null)
        }
    }

    useEffect(() => {
        const initAuth = async () => {
            try {
                await refreshUser()
            } finally {
                setLoading(false)
            }
        }
        initAuth()
    }, [])

    // logout
    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
        } finally {
            toast.success('خروج با موفقیت انجام شد', {
                duration: 3000
            })
        }

    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                logout,
                refreshUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider