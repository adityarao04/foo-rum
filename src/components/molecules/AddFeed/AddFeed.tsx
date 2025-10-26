import FeedRichTextContainer from 'components/atoms/FeedRichTextContainer/FeedRichTextContainer';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from 'state/ducks/feed';

type AddFeedProps = {
}

type setNewPost = {
    emoji_type: string;
    content: string;
}

const AddFeed: FC<AddFeedProps> = () => {


    const dispatch = useDispatch() as any;
    const [newPost, setNewPost] = useState<setNewPost>({
        emoji_type: "winking_face_with_tongue",
        content: "",
      })

     // Add the type here();







    const handleFeedTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost((prev) => ({...prev, content: e.target.value}));
    }

    const handleFeedSubmit = () => {

        const postPayload = {
            "id": `${Date.now()}`,
            "name": "Theresa Webb",
            "profile_pic": null,
            "created_at": Date.now(),
            "emoji_type": newPost.emoji_type,
            "content": newPost.content,
            "likes": 0,
            "comments": 0,
            "shares": 0
          }

       dispatch(addNewPost(postPayload));
    }


    return (
        <div className="w-feed mb-8  min-h-feed bg-feed-bg p-2 rounded-xl">
        <div className="w-full bg-white rounded-t-2xl px-2 py-2 border border-black/10 shadow-feed-content border-b-0">
        <FeedRichTextContainer/>
        <div className="flex w-full mt-6 ml-2 gap-6">
            {/* emoji container */}
            <div className="flex-shrink-0 cursor-pointer">
                <img src="/images/emotion-smile.svg" alt="emotion-smile" className='w-[18px] h-[18px]' />
            </div>
            {/* text container */}
            <div className="w-full">
                <textarea 
                value={newPost.content} 
                onChange={handleFeedTextChange} 
                className='w-full outline-none placeholder-[#00000066] font-inter-medium text-sm resize-none'
                placeholder='How are you feeling today?'
                rows={4}
                ></textarea>
            </div>
        </div>
        </div>
        <div className="w-full flex justify-between items-center bg-white rounded-b-2xl rounder- px-2 py-2 border border-black/10 shadow-feed-content  w-full border-top border-[#D9D9D9]">
            <div className="flex gap-4 justify-between items-center">
                <div className="cursor-pointer bg-[#0000000F] rounded-lg w-[30px] h-[30px] flex items-center justify-center">
                    <img src="/images/plus.svg" alt="plus" className='w-[18px] h-[18px]' />
                </div>
                <div className="cursor-pointer">
                <img src="/images/mic.svg" alt="plus" className='w-[18px] h-[18px]' />
                </div>
                <div className="cursor-pointer">
                <img src="/images/video-camera.svg" alt="plus" className='w-[18px] h-[18px]' />
                </div>
            </div>
            <button className="cursor-pointer" onClick={handleFeedSubmit}>
                <img src="/images/send.svg" alt="send" className='w-[24px] h-[24px]' />
            </button>
        </div>
        </div>
    )
}

export default AddFeed;