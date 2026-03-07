import * as types from './action-types';

export interface PremiumEventDecorationState {
    data: any[];
    loading: boolean;
    error: string | null;
}

const initialState: PremiumEventDecorationState = {
    data: [],
    loading: false,
    error: null,
};

export const premiumEventDecorationReducer = (state = initialState, action: any): PremiumEventDecorationState => {
    switch (action.type) {
        case types.GET_DATA:
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
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
