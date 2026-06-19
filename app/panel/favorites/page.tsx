'use client'

import FavoriteCard from "@/components/modules/FavoriteCard"
import { FavoritesContext } from "@/contexts/favorites"
import { useContext } from "react"

function Favorites() {

    const { favorites } = useContext(FavoritesContext)

    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-2xl dark:text-white">علاقه‌مندی‌ها ({favorites.length} دوره)</h2>

            {favorites.length ? (
                <FavoriteCard myCourses={favorites} />
            ) : (
                <div className="mx-auto flex flex-col items-center">
                    <img src="/images/empty-wishlist-.webp" className="w-80 h-80" alt="empty-cart" />
                    <p className="text-4xl font-lalezar text-teal-500">دوره‌ای وجود ندارد</p>
                </div>
            )}
        </div >
    )
}

export default Favorites
