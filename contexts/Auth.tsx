"use client"

import { getMe } from "@/actions/auth-action";
import React, { createContext, useCallback, useEffect, useState } from "react";

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
     refetchUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true) // لود اولیه

    // گرفتن user از me 
    const refetchUser = useCallback(async () => {
        try {
            const result = await getMe();
            setUser(result.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refetchUser();
    }, [refetchUser]);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                refetchUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider