'use client';

type SkeletonProps = {
    shape: string
}

const Skeleton = ({shape}: SkeletonProps) => {
  return (
    <div className={`animate-pulse bg-gray-300 ${shape}`}></div>
  )
}

export default Skeleton