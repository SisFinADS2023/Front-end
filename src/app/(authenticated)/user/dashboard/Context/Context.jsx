import { createContext, useContext } from 'react';

export const ChartsFiltersContext = createContext(null);
export const ChartsFiltersDispatchContext = createContext(null);

export function useChartsFilters() {
    return useContext(ChartsFiltersContext)
}

export function useChartsFiltersDispatch() {
    return useContext(ChartsFiltersDispatchContext)
}