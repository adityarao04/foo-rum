import { FC } from 'react';
import FeedContainer from '../../molecules/FeedContainer/FeedContainer';

type HomepageProps = {}

const Homepage: FC<HomepageProps> = () => {
    return (
        <div className=''>
            <FeedContainer />
        </div>
    )
} 

export default Homepage;