import { getFavoriteCourseAction } from "@/actions/course-action"
import FavoriteCard from "@/components/modules/FavoriteCard"

async function Favorites() {

    const favorites = await getFavoriteCourseAction()

    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-xl lg:text-2xl dark:text-white">علاقه‌مندی‌ها ({favorites.length} دوره)</h2>

            {favorites.length ? (
                <FavoriteCard myCourses={favorites} />
            ) : (
                <div className="mx-auto flex flex-col items-center">
                    <img src="/images/empty-wishlist-.webp" className="w-56 lg:w-80 h-56 lg:h-80" alt="empty-cart" />
                    <p className="text-4xl font-lalezar text-teal-500">دوره‌ای وجود ندارد</p>
                </div>
            )}
        </div >
    )
}

export default Favorites
