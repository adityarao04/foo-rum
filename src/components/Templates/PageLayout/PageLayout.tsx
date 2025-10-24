import { FC } from 'react';
import Header from '../../atoms/Header/Header';
type PageLayoutProps = {
    children?: React.ReactNode;
}



// ✅ Interview-friendly approach
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className='bg-white h-screen'>
            <Header />
            {children}
        </div>
    );
};


export default PageLayout;