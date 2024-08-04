'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { TypeTea } from '../page';

const ProfilePage = () => {
    const favorites = useSelector((state: any) => state.favorites)

    function getMyStatus():string {
        switch(favorites.length) {
            case 0: return 'Попущенец';
            case 1: return 'Чайный лох';
            case 2: return 'Чайный адепт';
            case 3: return 'Чайный любитель';
            case 4: return 'Чайный крутыш';
            case 5: return 'Чайный эксперт';
            case 6: return 'Чайный сомелье';
            case 7: return 'Чайный магистр';
            case 8: return 'Амбассадор чая';
            default: return '';
        }
        return 'Иди нахуй';
    }

    return (
        <div>
            <p className='text-white'>Ты пробовал следующие чаи:</p>
            {favorites.length === 0 && <p className='text-white'>Бля иди сначала чая выпей что-ли</p>}
            {favorites && favorites.map((tea: TypeTea) => 
                <div key={tea.id} className='text-white flex items-center'>
                    <div className='rounded-full w-24 h-24 mt-1.5 border-2 border-white-600 p-1.5'>
                        <img 
                            src={tea.imageSrc} 
                            alt='' 
                            className='w-full h-full rounded-full object-cover'
                        />
                    </div>
                    <p className='ml-3.5'>{tea.name}</p>
                    <p className='ml-12'>Рейтинг: {tea.rating}/10</p>
                </div>
            )}
            <p className='text-white'>Ваше чайное звание: {getMyStatus()}</p>
        </div>
    );
};

export default ProfilePage;