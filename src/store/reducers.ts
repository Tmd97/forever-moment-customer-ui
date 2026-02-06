import { combineReducers } from '@reduxjs/toolkit';

// Config reducer
import { configReducer } from '@/store/config/reducer';

// Customer reducers
import { homeReducer } from '@/features/home/store/reducer';

export const rootReducer = combineReducers({
    // Global config
    config: configReducer,

    // Customer
    home: homeReducer,
});
