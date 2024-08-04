'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { api } from "./api/api";

const refucers = combineReducers({
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: refucers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch