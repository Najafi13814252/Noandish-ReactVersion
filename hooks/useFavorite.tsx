'use client'

import { favoriteService } from "@/services/favorites"
import { useEffect, useState } from "react"

type FavoriteItem = {
    course_id: number
}

export const useFavorites = () => {
    const [favoriteIds, setFavoriteIds] = useState<number[]>([])

    const fetchFavorites = async () => {
        const data = await favoriteService.getAll()
        setFavoriteIds(data.map((item: FavoriteItem )=> item.course_id))
    }

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

    return {
        favoriteIds,
        toggleFavorite,
        isFavorite,
        fetchFavorites
    }
}