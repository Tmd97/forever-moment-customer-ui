import * as types from './action-types';

export interface ExperiencesState {
    data: any[];
    subCategoryData: any[];
    currentExperience: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: ExperiencesState = {
    data: [],
    subCategoryData: [],
    currentExperience: null,
    loading: false,
    error: null,
};

export const experiencesReducer = (state = initialState, action: any): ExperiencesState => {
    switch (action.type) {
        case types.GET_DATA:
        case types.GET_EXPERIENCE_DETAIL:
        case types.GET_SUBCATEGORY_EXPERIENCES:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.GET_SUBCATEGORY_EXPERIENCES_SUCCESS:
            return {
                ...state,
                loading: false,
                subCategoryData: action.payload,
            };
        case types.GET_EXPERIENCE_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                currentExperience: action.payload,
            };
        case types.GET_DATA_FAILURE:
        case types.GET_EXPERIENCE_DETAIL_FAILURE:
        case types.GET_SUBCATEGORY_EXPERIENCES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
