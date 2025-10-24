import React,{ FC, useContext } from 'react';
import logo from '/images/mouse.svg';
import { Link } from 'react-router';
import { AuthContext } from 'Auth/auth-context';

type HeaderProps = {

}



const Header: FC<HeaderProps> = () => {



    const context = useContext(AuthContext);


    
    return (
        <div className='flex p-4 justify-between items-center'>
            <Link to={'/'} className='flex-1'>
            <div className="flex gap-2 items-center w-fit flex-1">
                <img src='/images/mouse.svg' alt="logo" />
                <span className='font-inter font-bold text-base'>foo-rum</span>
            </div>
            </Link>
            <Link to={'/login-register'}>
            <div className="flex gap-2 items-center w-fit">
                <span className='font-inter font-semibold text-sm leading-none tracking-normal'>{context?.isAuthenticated ? 'logout' : 'login'}</span>
                <img src='/images/log-in-2.svg' alt="logo" />

            </div>
            </Link>

            <div className=""></div>
        </div>
    )
}

export default Header;