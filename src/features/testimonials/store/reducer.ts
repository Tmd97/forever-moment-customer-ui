import * as types from './action-types';

interface TestimonialsState {
    data: any[];
    loading: boolean;
    error: string | null;
}

const initialState: TestimonialsState = {
    data: [],
    loading: false,
    error: null,
};

const testimonialsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.GET_TESTIMONIALS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case types.GET_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.GET_TESTIMONIALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default testimonialsReducer;
