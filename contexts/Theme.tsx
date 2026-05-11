"use client"

import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string
    toggleTheme: () => void
}

const defaultTheme: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => { }
}

export const ThemeContext = createContext<ThemeContextType>(defaultTheme)

const getDefaultTheme = () => {
    // بررسی وجود window قبل از دسترسی به localStorage
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') || 'light';
    }
    return 'light'; // مقدار پیش‌فرض برای محیط سرور
};

export default function ThemeProvider({ children }: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState(getDefaultTheme)

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}