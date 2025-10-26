import React,{ FC, useContext, useState , useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from 'Auth/auth-context';
import { logoutUser } from 'Storage/dexie';

type HeaderProps = {

}



const Header: FC<HeaderProps> = () => {

    const context = useContext(AuthContext);

    const [scrolled, setScrolled] = useState(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


const handleLoginLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  if(context?.isAuthenticated) {
    logoutUser();
  } else {
    window.location.href = '/login-register';
  }
}



    return (
        <header className={`flex p-4 justify-between items-center sticky top-0 z-1000 bg-white ${scrolled ? 'shadow-lg' : 'shadow-none'}`}>
            <Link to={'/'} className='flex-1'>
            <div className="flex gap-2 items-center w-fit flex-1">
                <img src='/images/mouse.svg' alt="logo" />
                <span className='font-inter font-bold text-base'>foo-rum</span>
            </div>
            </Link>
            <Link to={'/login-register'} onClick={handleLoginLogout}>
            <div className="flex gap-2 items-center w-fit">
                <span className='font-inter font-semibold text-sm leading-none tracking-normal'>{context?.isAuthenticated ? 'logout' : 'login'}</span>
                <img src='/images/log-in-2.svg' alt="logo" />

            </div>
            </Link>

            <div className=""></div>
        </header>
    )
}

export default Header;