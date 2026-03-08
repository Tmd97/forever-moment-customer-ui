import * as types from './action-types';
import { fetchData, fetchExperienceDetail, fetchSubCategoryExperiences } from './api';

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

export const getExperienceDetail = (id: string | number) => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_EXPERIENCE_DETAIL });
        try {
            const data = await fetchExperienceDetail(id);
            dispatch({
                type: types.GET_EXPERIENCE_DETAIL_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: types.GET_EXPERIENCE_DETAIL_FAILURE,
                payload: error.message || 'Failed to fetch experience detail',
            });
        }
    };
};

export const getSubCategoryExperiences = (subCategoryId: string | number) => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_SUBCATEGORY_EXPERIENCES });
        try {
            const data = await fetchSubCategoryExperiences(subCategoryId);
            dispatch({
                type: types.GET_SUBCATEGORY_EXPERIENCES_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: types.GET_SUBCATEGORY_EXPERIENCES_FAILURE,
                payload: error.message || 'Failed to fetch sub-category experiences',
            });
        }
    };
};
