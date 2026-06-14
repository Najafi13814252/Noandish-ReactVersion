'use client'

import { favoriteService } from "@/services/favorites"
import { createContext, useEffect, useState } from "react"

type FavoriteItem = {
    id: number // corse id
}

type FavoriteContextType = {
    toggleFavorite: (course_id: number) => Promise<boolean>;
    isFavorite: (courseId: number) => boolean;
    fetchFavorites: () => void;
}

export const FavoritesContext = createContext<FavoriteContextType>({} as FavoriteContextType)

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
    const [favoriteIds, setFavoriteIds] = useState<number[]>([])

    const fetchFavorites = async () => {
        try {
            const data = await favoriteService.getAll()

            console.log('log 1 => ', data)

            setFavoriteIds(data.map((item: FavoriteItem) => item.id))

            console.log('log 2 => ', favoriteIds)
        } catch {
            setFavoriteIds([])
        }
    }

    useEffect(() => {
        fetchFavorites()
    }, [])

    const toggleFavorite = async (courseId: number) => {
        const res = await favoriteService.toggle(courseId)

        setFavoriteIds(prev => {
            if (res.isFavorite) {
                return [...prev, courseId]
            } else {
                return prev.filter(id => id !== courseId)
            }
        })

        return res.isFavorite
    }

    const isFavorite = (courseId: number) => {
        console.log('log 3 => ', favoriteIds)
        return favoriteIds.includes(courseId)
    }

    return (
        <FavoritesContext.Provider value={{ toggleFavorite, isFavorite, fetchFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoriteProvider