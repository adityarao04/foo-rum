import Feed from 'components/atoms/Feed/Feed';
import feedContent from 'Data/feedContent';
import { FC } from 'react';
import AddFeed from '../AddFeed/AddFeed';

type FeedContainerProps = {
}

const FeedContainer: FC<FeedContainerProps> = () => {
    return (
        <section className='flex flex-col justify-center items-center pt-8'>
             <AddFeed />
            {/* feed container */}
            
             {/* feed content container */}
            {feedContent?.map((feed) => {
                return <Feed key={feed.id} content={feed} />
            })}
        </section>
    )
} 

export default FeedContainer;