import Feed from 'components/atoms/Feed/Feed';
import feedContent from 'Data/feedContent';
import { FC, useContext, useEffect } from 'react';
import AddFeed from '../AddFeed/AddFeed';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/ducks/root-reducer';
import FeedSkeleton from 'components/atoms/Skeletons/feedSkeleton';
import { fetchFeeds } from 'state/ducks/feed';
import { AuthContext } from 'Auth/auth-context';

type FeedContainerProps = {
}

const FeedContainer: FC<FeedContainerProps> = () => {

    const dispatch = useDispatch() as any; // Add the type here();
    const feeds = useSelector((state: RootState) => state.feed);
    const context = useContext(AuthContext);

    useEffect(() => {
        dispatch(fetchFeeds());
    }, []);

    if(
        feeds.loading || context.loading
    ) {
        return (
        <section className='flex flex-col justify-center items-center pt-8'>
            <FeedSkeleton/>
        </section>)
    }

    return (
        <section className='flex flex-col justify-center items-center pt-8'>
             <AddFeed />
            {/* feed container */}
             {/* feed content container */}
            {feeds?.posts?.map((feed) => {
                return <Feed key={feed.id} content={feed} />
            })}
        </section>
    )
} 

export default FeedContainer;