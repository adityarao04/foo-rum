import { FeedContent } from 'Data/feedContent';
import { FC } from 'react';
import Social from '../Social/Social';
import { getRelativeTimeString } from 'Utils/helpers/dateHelpers';


type FeedProps = {
    content: FeedContent;
}

const Feed: FC<FeedProps> = ({ content }) => {
    const relativeTime = getRelativeTimeString(content.created_at);
    return (
        <div className="w-[100%] md:w-feed mb-8  min-h-feed bg-feed-bg p-2 rounded-xl">
        <div className="w-full bg-white rounded-2xl px-2 py-4 border border-black/10 shadow-feed-content">
        {/* image and name container */}
        <div className="w-full flex gap-2">
        <div className="w-profile-image h-profile-image bg-white rounded-lg">
           <img className='w-full h-full' src="/images/profile_pic.svg" alt="profile_image" />
        </div>
        {/* name and time container */}
        <div className="w-full flex justify-between items-center">
           <div className="w-full flex flex-col">
               <span className="text-sm font-medium">{content.name}</span>
               <span className="text-xs text-gray-500">{relativeTime}</span>
           </div>
        </div>


        {/* content and reaction container */}

        </div>
        <div className="flex gap-2 mt-4">
           <div className="flex-shrink-0 w-[30px] h-[30px] bg-emoji-bg rounded-full p-1">
               <img src="/images/emoji_type_1.png" alt="like" />
           </div>
        <div className="font-sans font-medium text-sm leading-[21px] tracking-normal">
       {content.content}
        </div>
        </div>

        </div>
        <Social />
        </div>
    )
}

export default Feed;