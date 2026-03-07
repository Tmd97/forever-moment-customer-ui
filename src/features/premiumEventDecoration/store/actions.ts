import * as types from './action-types';
import { fetchData } from './api';

export const getData = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_DATA });
        try {
            const data = await fetchData();
            dispatch({
                type: types.GET_DATA_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: types.GET_DATA_FAILURE,
                payload: error.message || 'Failed to fetch data',
            });
        }
    };
};
