import SkeletonCard from "@/components/loading/SkeletonCard"

function LearnLoading() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}

export default LearnLoading
