'use client'

import { TypeTea } from "@/app/page";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TypeTea[] = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        toggleFavorites: (state, {payload: recipe}) => {
            const isExists = state.some(r => r.id === recipe.id)
            if(isExists) {
                const index = state.findIndex(r => r.id === recipe.id)
                if(index !== -1) {
                    state.splice(index, 1)
                }
            }
            else {
                state.push(recipe)
            } 
        }
    }
})

export const {actions, reducer} = favoritesSlice;