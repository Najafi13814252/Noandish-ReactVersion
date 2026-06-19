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
    favorites: FavoritesType
    loading: boolean
}

export const FavoritesContext = createContext<FavoriteContextType>({} as FavoriteContextType)

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
    const [favoriteIds, setFavoriteIds] = useState<number[]>([])
    const [favorites, setFavorites] = useState<FavoritesType>([])
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        try {
            const res = await favoriteService.toggle(courseId)

            setFavoriteIds(prev => {
                if (res.isFavorite) {
                    return [...prev, courseId]
                } else {
                    return prev.filter(id => id !== courseId)
                }
            })

            fetchFavorites()
            return res.isFavorite
        } finally {
            setLoading(false)
        }
    }

    const isFavorite = (courseId: number) => {
        return favoriteIds.includes(courseId)
    }

    return (
        <FavoritesContext.Provider value={{ toggleFavorite, isFavorite, favorites, loading }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoriteProvider