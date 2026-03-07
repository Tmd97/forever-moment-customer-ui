import * as types from './action-types';

export interface SliderState {
    slides: any[];
    slidesLoading: boolean;
    slidesError: string | null;
}

const initialState: SliderState = {
    slides: [],
    slidesLoading: false,
    slidesError: null,
};

export const sliderReducer = (state = initialState, action: any): SliderState => {
    switch (action.type) {
        case types.GET_SLIDES:
            return {
                ...state,
                slidesLoading: true,
                slidesError: null,
            };
        case types.GET_SLIDES_SUCCESS:
            return {
                ...state,
                slidesLoading: false,
                slides: action.payload,
            };
        case types.GET_SLIDES_FAILURE:
            return {
                ...state,
                slidesLoading: false,
                slidesError: action.payload,
            };
        default:
            return state;
    }
};
