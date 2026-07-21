function SkeletonCard() {
    return (
        <div className="mr-8 flex gap-4 overflow-hidden">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="w-80 h-full my-8 flex flex-col relative gap-4 border bg-white border-gray-200 rounded-2xl shadow-md shadow-gray-200 p-3">
                    <div className="w-full h-40  rounded-lg border border-gray-200 bg-gray-200 animate-pulse"></div>

                    <div className="flex items-center justify-between">
                        <div className="w-48 h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
                        <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-16 h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
                        </div>

                        <div className="w-32 h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
                    </div>

                    <hr className="text-gray-200" />

                    <div className="flex items-center justify-between">
                        <div className="w-28 h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
                        <div className="w-24 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonCard