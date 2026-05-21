import LearningCard from "@/components/modules/LearningCard"
import {favorites} from "@/data/myCourses"

function Favorites() {
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-2xl dark:text-white">علاقه‌مندی‌ها ({favorites.length} دوره)</h2>

            <LearningCard myCourses={favorites}/>
        </div >
    )
}

export default Favorites
