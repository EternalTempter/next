'use client'
import { Provider } from 'react-redux';
import { store } from './store';
import { FC } from 'react';

interface ProviderProps {
    children: React.ReactNode
}

const Providers:FC<ProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Providers;