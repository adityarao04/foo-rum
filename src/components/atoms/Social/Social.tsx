import { AuthContext } from 'Auth/auth-context';
import { FC } from 'react';

type SocialProps = {
}

const Social: FC<SocialProps> = ({}) => {
    return (
        <div className='flex gap-2 mt-4 ml-4 gap-5'>
            <div className="w-[18px] h-[18px]">
                <img src="/images/heart.svg" alt="like" />
            </div>
            <div className="w-[18px] h-[18px]">
            <img src="/images/comment-text.svg" alt="comment" />
            </div>
            <div className="w-[18px] h-[18px]">
            <img src="/images/send-2.svg" alt="share" />
            </div>
        </div>
    )
}

export default Social;