import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface HeaderProps {
    
}

const Header:FC<HeaderProps> = () => {
    return (
        <header className='w-full py-1.5 px-3.5 flex items-center justify-between'>
            <Link href="/" className='block px-12 py-1.5 bg-gray-400 rounded text-white bg-gray-800 mr-3.5 mt-3.5 opacity-90 shadow-md shadow-slate-800 hover:shadow-slate-600 ease-in-out duration-500'>
                Домой
            </Link>
            <Link href="/profile" className='block px-12 py-1.5 bg-gray-400 rounded text-white bg-gray-800 mr-3.5 mt-3.5 opacity-90 shadow-md shadow-slate-800 hover:shadow-slate-600 ease-in-out duration-500'>  
                Профиль
            </Link>
        </header>
    );
};

export default Header;