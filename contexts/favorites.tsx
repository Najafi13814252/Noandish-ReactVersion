'use client'

import { favoriteService } from "@/services/favorites"
import { FavoritesType } from "@/types/favorites"
import { createContext, useEffect, useState } from "react"

type FavoriteItem = {
    id: number // corse id
}

type FavoriteContextType = {
    toggleFavorite: (course_id: number) => Promise<boolean>;
    isFavorite: (courseId: number) => boolean;
    fetchFavorites: () => void;
    favorites: FavoritesType
}

export const FavoritesContext = createContext<FavoriteContextType>({} as FavoriteContextType)

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
    const [favoriteIds, setFavoriteIds] = useState<number[]>([])
    const [favorites, setFavorites] = useState<FavoritesType>([])

    const fetchFavorites = async () => {
        try {
            const data = await favoriteService.getAll()
            setFavoriteIds(data.map((item: FavoriteItem) => item.id))
            setFavorites(data)
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
        return favoriteIds.includes(courseId)
    }

    return (
        <FavoritesContext.Provider value={{ toggleFavorite, isFavorite, fetchFavorites, favorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoriteProvider