import { AuthContext } from 'Auth/auth-context';
import { FC } from 'react';
import Tooltip from '../Tooltip/Tooltip';

type SocialProps = {
}

const Social: FC<SocialProps> = ({}) => {
    return (
        <div className='flex gap-2 mt-4 ml-4 gap-5'>
            <Tooltip text="Like: function not implemented">
            <div className="w-[18px] h-[18px]">
                <img src="/images/heart.svg" alt="like" />
            </div>
            </Tooltip>
            <Tooltip text="Comment: function not implemented">
            <div className="w-[18px] h-[18px]">
            <img src="/images/comment-text.svg" alt="comment" />
            </div>
            </Tooltip>
            <Tooltip text="Share: function not implemented">
            <div className="w-[18px] h-[18px]">
                <img src="/images/send-2.svg" alt="share" />
                </div>
            </Tooltip>
        </div>
    )
}

export default Social;