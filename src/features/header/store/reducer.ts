import * as types from './action-types';

const initialState = {
    isMenuOpen: false,
    searchQuery: '',
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
};

export const headerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.TOGGLE_MENU:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            };
        case types.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case types.GET_CATEGORIES:
            return {
                ...state,
                categoriesLoading: true,
                categoriesError: null,
            };
        case types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesLoading: false,
                categories: action.payload,
            };
        case types.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                categoriesLoading: false,
                categoriesError: action.payload,
            };
        default:
            return state;
    }
};
