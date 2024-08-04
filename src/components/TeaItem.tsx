import { TypeTea } from '@/app/page';
import getRandomNumber from '@/helpers/helpers';
import { useActions } from '@/hooks/useActions';
import { TypeComment, useGetCommentQuery } from '@/store/api/api';
import Image from 'next/image';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface TeaItemProps {
    id: number
    imageSrc: string
    name: string
    description: string
    rating: number
}

const TeaItem:FC<TeaItemProps> = ({id, name, description, imageSrc, rating}) => {
    const favorites = useSelector((state: any) => state.favorites);
    const {toggleFavorites} = useActions();
    const isExists = favorites.some((tea: TypeTea) => tea.id === id)

    const {data: comment} = useGetCommentQuery(getRandomNumber(1,10));

    return (
        <div className='flex flex-col items-center p-3.5 rounded bg-gray-900 mr-3.5 mt-3.5 opacity-90 shadow-md shadow-slate-800 hover:shadow-slate-600 ease-in-out duration-500'>
            <div className='rounded-full w-36 h-36 mt-1.5 border-2 border-white-600 p-1.5'>
                <img 
                    src={imageSrc} 
                    alt='' 
                    className='w-full h-full rounded-full object-cover'
                />
            </div>
            <h2 className='mt-1.5 text-center max-w-60 font-bold text-xl text-white '>{name}</h2>
            <p className='text-center max-w-60 text-xs text-white'>{description}</p>
            <span className='text-white'>Рейтинг чая: {rating}/10</span>
            <span className='text-xs text-white max-w-60'>Лучший комментарий о чае: {comment && comment.email} - <br/>{comment && comment.body}</span>
            <button 
                className='mt-1.5 bg-gray-800 rounded text-white py-0.5 px-3.5 hover:bg-gray-200 hover:text-black ease-in-out duration-500'
                onClick={() => toggleFavorites({id, name, description, imageSrc, rating})}
            >{!isExists ? 
                'Попробовать'
                :
                'Фу нахуй, забыть что пробовал'
            }</button>
        </div>
    );
};

export default TeaItem;