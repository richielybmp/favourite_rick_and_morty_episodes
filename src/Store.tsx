import React, { useReducer } from 'react';
import { IState, IEpisode, IAction } from './interfaces'

const initialState: IState = {
    episodes: [],
    favourites: []
}

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        case 'ADD_FAV':
            return { ...state, favourites: action.payload }
        case 'REMOVE_FAV':
            return { ...state, favourites: action.payload }
        default:
            break;
    }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}