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
    initialized: boolean
    loading: boolean;
    login: (data: LoginPayload) => Promise<void>;
    signup: (data: SignupPayload) => Promise<void>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [initialized, setInitialized] = useState(false)

    // گرفتن user از me 
    const refreshUser = async () => {
        setLoading(true)
        try {
            const data = await authService.me()
            setUser(data?.user || null)
            console.log(data.user);
        } catch {
            setUser(null)
        } finally {
            setLoading(false)
            setInitialized(true)
        }
    }

    useEffect(() => {
    refreshUser()
}, [])

    // login
    const login = async (data: LoginPayload) => {
        const res = await authService.login(data);

        if (res?.user) {
            setUser(res.user);
        }

        await refreshUser();
        
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
                initialized,
                loading,
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