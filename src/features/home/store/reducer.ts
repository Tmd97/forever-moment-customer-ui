import * as types from './action-types';

export interface HomeState {
    featuredExperiences: any[];
    locations: any[];
    selectedLocation: string;
    loading: boolean; // Global loading for initial page load
    locationsLoading: boolean;
    experiencesLoading: boolean;
    error: string | null;
}

const initialState: HomeState = {
    featuredExperiences: [],
    locations: [],
    selectedLocation: 'Vizag',
    loading: true, // Start with page-level loading
    locationsLoading: false,
    experiencesLoading: false,
    error: null,
};

export const homeReducer = (state = initialState, action: any): HomeState => {
    switch (action.type) {
        case types.GET_FEATURED_EXPERIENCES:
            return { ...state, experiencesLoading: true, error: null };
        case types.GET_FEATURED_EXPERIENCES_SUCCESS:
            return { ...state, loading: false, experiencesLoading: false, featuredExperiences: action.payload };
        case types.GET_FEATURED_EXPERIENCES_FAILURE:
            return { ...state, loading: false, experiencesLoading: false, error: action.payload };

        case types.GET_LOCATIONS:
            return { ...state, locationsLoading: true, error: null };
        case types.GET_LOCATIONS_SUCCESS:
            const locations = action.payload || [];
            const activeLocations = locations.filter((loc: any) => loc.isActive);
            let nextSelectedLocation = state.selectedLocation;

            // If current selectedLocation is default 'Vizag' or not in active list,
            // default to the first active location name from the API
            const isCurrentValid = activeLocations.some((loc: any) => loc.name === state.selectedLocation);
            if ((state.selectedLocation === 'Vizag' || !isCurrentValid) && activeLocations.length > 0) {
                nextSelectedLocation = activeLocations[0].name;
            }

            return {
                ...state,
                loading: false,
                locationsLoading: false,
                locations: locations,
                selectedLocation: nextSelectedLocation,
            };
        case types.GET_LOCATIONS_FAILURE:
            return { ...state, loading: false, locationsLoading: false, error: action.payload };
        case types.SET_SELECTED_LOCATION:
            return { ...state, selectedLocation: action.payload };

        default:
            return state;
    }
};
