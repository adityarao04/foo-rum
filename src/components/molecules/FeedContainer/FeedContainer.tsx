import { FC } from 'react';

type FeedContainerProps = {
}

const FeedContainer: FC<FeedContainerProps> = () => {
    return (
        <div className='flex justify-center pt-8'>
            {/* feed container */}
            <div className="w-feed  min-h-feed bg-feed-bg rounded-lg p-4 rounded-xl">
             {/* feed content container */}
             <div className="w-full bg-white rounded-2xl px-2 py-4 border border-black/10 shadow-feed-content">
             {/* image and name container */}
             <div className="w-full flex gap-2">
             <div className="w-profile-image h-profile-image bg-white rounded-lg">
                <img className='w-full h-full' src="/images/profile_pic.svg" alt="profile image" />
             </div>
             {/* name and time container */}
             <div className="w-full flex justify-between items-center">
                <div className="w-full flex flex-col">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-gray-500">5 minutes ago</span>
                </div>
             </div>


             {/* content and reaction container */}

             </div>
             <div className="flex gap-2 mt-4">
                <div className="flex-shrink-0 w-[30px] h-[30px] bg-emoji-bg rounded-full p-1">
                    <img src="/images/emoji_type_1.png" alt="like" />
                </div>
             <div className="font-sans font-medium text-sm leading-[21px] tracking-normal">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </div>
             </div>

             </div>
            </div>
        </div>
    )
} 

export default FeedContainer;