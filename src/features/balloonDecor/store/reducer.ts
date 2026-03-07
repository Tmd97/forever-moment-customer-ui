import * as types from './action-types';

export interface BalloonDecorState {
    data: any[];
    loading: boolean;
    error: string | null;
}

const initialState: BalloonDecorState = {
    data: [],
    loading: false,
    error: null,
};

export const balloonDecorReducer = (state = initialState, action: any): BalloonDecorState => {
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
