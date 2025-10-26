import { FC } from 'react';
import Tooltip from '../Tooltip/Tooltip';

type FeedRichTextContainerProps = {
    content?: string;
    removeContentCallback?: () => void;
}

const FeedRichTextContainer: FC<FeedRichTextContainerProps> = ({ removeContentCallback }) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='bg-feed-bg rounded-lg p-1 flex'>
                {/* selector */}
                <div className='bg-white rounded-lg font-medium text-xs shadow-sm p-2 flex justify-between items-center'>
                <select  className="focus:outline-none appearance-none  text-xs cursor-pointer">
                    <option className='font-medium text-xs' value="paragraph">Paragraph</option>
                    <option className='font-medium text-xs' disabled value="heading">Heading</option>
                    <option className='font-medium text-xs' disabled value="heading">Quotes</option>
                </select>
                <div className="ml-3 relative">
                 <img src="/images/chevron-down.svg" alt="dropdown" className="w-[10px] h-[10px]" />
                   </div>
                </div>
                <div className="bg-white rounded-lg font-medium text-xs shadow-sm p-2 ml-6 cursor-pointer">
                <Tooltip text="function not implemented">
                    <img src="/images/text-bold.svg" alt="bold_image"  className='w-[14px] h-[14px]'/>
                </Tooltip>

                </div>
                <div className="rounded-lg font-medium text-xs p-2 ml-2 cursor-pointer">
                    <Tooltip text="function not implemented">
                    <img src="/images/text-italic.svg" alt="bold_image"  className='w-[14px] h-[14px]'/>
                    </Tooltip>
                </div>
                <div className="rounded-lg font-medium text-xs p-2 ml-2 cursor-pointer">
                    <Tooltip text="function not implemented">
                    <img src="/images/quotes.svg" alt="bold_image"  className='w-[14px] h-[14px]'/>
                    </Tooltip>

                </div>
                <div className="rounded-lg font-medium text-xs p-2 ml-2 cursor-pointer">
                    <Tooltip text="function not implemented">
                    <img src="/images/script.svg" alt="bold_image"  className='w-[14px] h-[14px]'/>
                    </Tooltip>
                </div>
            </div>
            <div className="bg-[#FF000026] rounded-lg h-[40px] w-[40px] flex items-center justify-center cursor-pointer" onClick={removeContentCallback}>
                <img src="/images/trash.svg" alt="trash" className='w-[16px] h-[16px]' />
            </div>
        </div>
    )
}

export default FeedRichTextContainer;