import * as types from './action-types';
import { fetchFeaturedExperiences, fetchLocations } from './api';

export const getFeaturedExperiences = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_FEATURED_EXPERIENCES });
        try {
            const experiences = await fetchFeaturedExperiences();
            dispatch({
                type: types.GET_FEATURED_EXPERIENCES_SUCCESS,
                payload: experiences,
            });
        } catch (error: any) {
            console.error('Failed to fetch featured experiences:', error);
            dispatch({
                type: types.GET_FEATURED_EXPERIENCES_FAILURE,
                payload: error.message || 'Failed to fetch featured experiences',
            });
        }
    };
};

export const getLocations = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_LOCATIONS });
        try {
            const locations = await fetchLocations();
            dispatch({
                type: types.GET_LOCATIONS_SUCCESS,
                payload: locations,
            });
        } catch (error: any) {
            console.error('Failed to fetch locations:', error);
            dispatch({
                type: types.GET_LOCATIONS_FAILURE,
                payload: error.message || 'Failed to fetch locations',
            });
        }
    };
};

export const setSelectedLocation = (location: string) => ({
    type: types.SET_SELECTED_LOCATION,
    payload: location,
});
