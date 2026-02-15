import * as types from './action-types';
import { fetchSlides } from './api';

export const getSlides = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_SLIDES });
        try {
            const slides = await fetchSlides();
            dispatch({
                type: types.GET_SLIDES_SUCCESS,
                payload: slides,
            });
        } catch (error: any) {
            dispatch({
                type: types.GET_SLIDES_FAILURE,
                payload: error.message || 'Failed to fetch slides',
            });
        }
    };
};
