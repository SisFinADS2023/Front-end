import { createContext, useContext } from 'react';

export const ChartsDataContext = createContext(null);
export const ChartsDataDispatchContext = createContext(null);

export function useChartsData() {
    return useContext(ChartsDataContext)
}

export function useChartsDataDispatch() {
    return useContext(ChartsDataDispatchContext)
}