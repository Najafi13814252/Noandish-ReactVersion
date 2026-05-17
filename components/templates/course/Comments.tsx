import { Icon } from "@iconify/react"
import starIcom from '@iconify-icons/solar/star-line-duotone'

type PointsType = {
    id: number
    rate: string
    percent: number
}

const points: PointsType[] = [
    { id: 1, rate: '5', percent: 85 },
    { id: 2, rate: '4', percent: 75 },
    { id: 3, rate: '3', percent: 53 },
    { id: 4, rate: '2 و 1', percent: 20 }
]

function Comments() {
    return (
        <div className="border border-gray-200 bg-white rounded-lg text-gray-800 dark:bg-darkMode dark:text-white dark:border-gray-800">
            <div>
                {/* points */}
                <div className="p-4 rounded-md">
                    <div className="flex flex-col md:flex-row items-center justify-around">
                        <div className="flex flex-col text-center">
                            <span className="text-5xl font-bold">4.3</span>
                            <span>از 5 امتیاز</span>
                            <div className="flex items-center gap-1 mt-2">
                                <Icon className="text-yellow-500" icon={starIcom} />
                                <Icon className="text-yellow-500" icon={starIcom} />
                                <Icon className="text-yellow-500" icon={starIcom} />
                                <Icon className="text-yellow-500" icon={starIcom} />
                                <Icon className="text-yellow-500" icon={starIcom} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-0 md:pr-10 md:border-r md:border-r-gray-300">
                            {points.map(score => (
                                <div key={score.id} className="flex items-center gap-2">
                                    <div className="flex flex-col">
                                        <span className="mb-1 font-mediums">ستاره {score.rate}</span>
                                        <div className="w-72 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-800">
                                            <div className={`h-1.5 rounded-full
                                             ${score.id == 1 ? 'bg-green-700' :
                                                    score.id == 2 ? 'bg-green-500' :
                                                        score.id == 3 ? 'bg-orange-400' :
                                                            score.id == 4 ? 'bg-red-500' : ''}`} style={{ width: score.percent + '%' }}></div>
                                        </div>
                                        <span className="relative top-2 text-sm font-medium">{score.percent}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* comments */}
                    {/* <div></div> */}
                </div >
            </div >
        </div >
    )
}

export default Comments
