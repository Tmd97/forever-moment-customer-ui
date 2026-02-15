import * as types from './action-types';
import { fetchCategories } from './api';

export const toggleMenu = () => ({
    type: types.TOGGLE_MENU,
});

export const setSearchQuery = (query: string) => ({
    type: types.SET_SEARCH_QUERY,
    payload: query,
});

export const getCategories = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_CATEGORIES });
        try {
            const categories = await fetchCategories();
            console.log('API response categories:', categories);
            dispatch({
                type: types.GET_CATEGORIES_SUCCESS,
                payload: categories,
            });
        } catch (error: any) {
            console.error('Failed to fetch categories:', error);
            dispatch({
                type: types.GET_CATEGORIES_FAILURE,
                payload: error.message || 'Failed to fetch categories',
            });
        }
    };
};
