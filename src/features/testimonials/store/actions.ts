import * as types from './action-types';
import { fetchTestimonials } from './api';

export const getTestimonials = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_TESTIMONIALS });
        try {
            const data = await fetchTestimonials();
            dispatch({
                type: types.GET_TESTIMONIALS_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: types.GET_TESTIMONIALS_FAILURE,
                payload: error.message || 'Failed to fetch testimonials',
            });
        }
    };
};
