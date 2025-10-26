import { FC } from 'react';
import FeedContainer from '../../molecules/FeedContainer/FeedContainer';
import AddFeed from '../../molecules/AddFeed/AddFeed';

type HomepageProps = {}

const Homepage: FC<HomepageProps> = () => {
    return (
        <div className=''>
            <FeedContainer />
        </div>
    )
} 

export default Homepage;