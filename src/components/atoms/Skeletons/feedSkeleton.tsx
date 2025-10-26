import { FC } from "react";

const FeedSkeleton: FC = () => {
    return (
        <div className="">
            {[...Array(2)]?.map((_, index) => {
                return (
                    <div key={`skeleton-feed-${index}`} className="w-feed mb-8  min-h-feed rounded-lg p-2 rounded-xl">
                    <div className="w-full rounded-2xl px-2 ">
                    {/* image and name container */}
                    <div className="w-full flex gap-2">
                    <div className="w-profile-image h-profile-image bg-gray-200 animate-pulse rounded-lg">
                    </div>
                    {/* name and time container */}
                    <div className="w-full flex justify-between items-center">
                       <div className="w-full flex flex-col">
                           <span className="text-sm w-[60px] h-[10px] font-medium bg-gray-200 animate-pulse"></span>
                           <span className="text-xs bg-gray-200 animate-pulse w-[40px] h-[7px] mt-1"></span>
                       </div>
                    </div>
            
            
                    {/* content and reaction container */}
                 
                    </div>
                    <div className="w-full h-[100px] bg-gray-200 animate-pulse rounded-lg mt-2"></div>
                    </div>
                    </div>
                )
            })}
           

        </div>
    )
}

export default FeedSkeleton;