# Developer Onboarding Guide

Welcome to the **Forever Moment** frontend! This guide explains the core architectural patterns, how state management works, and provides a step-by-step tutorial on how to integrate a new API endpoint.

## 1. Project Structure

The project follows a **Feature-Driven Architecture**:
- `src/components/`: Pure, reusable UI components (e.g., `Navbar`, `Button`). They don't typically know about Redux.
- `src/features/`: Domain-specific modules (e.g., `home`, `category`, `experiences`). 
  - Each feature has its own `pages/`, `components/`, and crucially, its own `store/`.
- `src/store/`: The root Redux store configuration that combines reducers from all the features.

## 2. The Redux & Data Flow

The application relies on **Redux Thunk** for asynchronous data fetching. We separate the concerns into 4 main files inside any `feature/store/` directory:

1. **`api.ts`**: Pure asynchronous functions that make HTTP requests (using `fetch`).
2. **`action-types.ts`**: String constants to avoid typos.
3. **`actions.ts`**: Thunk functions that dispatch standard loading, success, and failure states.
4. **`reducer.ts`**: The state machine that listens to actions and updates the store.

---

## 3. How to Integrate a New API (Step-by-Step)

Imagine you need to integrate a new API to fetch "Reviews". You would create a new feature folder `src/features/reviews/`. Here is the exact flow you must follow:

### Step 1: Create the API call (`api.ts`)
Always use the `VITE_API_URL` environment variable.
```typescript
const API_BASE = import.meta.env.VITE_API_URL || '/api/platform';

export const fetchReviews = async () => {
    const response = await fetch(`${API_BASE}/public/reviews`);
    if (!response.ok) throw new Error('Failed to fetch reviews');
    
    const data = await response.json();
    return data.response; // Our backend wraps data in a 'response' object
};
```

### Step 2: Define Action Types (`action-types.ts`)
Always define the 3 lifecycles: Request, Success, Failure.
```typescript
export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE';
```

### Step 3: Write the Thunk Action (`actions.ts`)
```typescript
import * as types from './action-types';
import { fetchReviews } from './api';

export const getReviews = () => {
    return async (dispatch: any) => {
        dispatch({ type: types.GET_REVIEWS }); // Starts loading
        try {
            const reviews = await fetchReviews();
            dispatch({
                type: types.GET_REVIEWS_SUCCESS,
                payload: reviews,
            });
        } catch (error: any) {
            dispatch({
                type: types.GET_REVIEWS_FAILURE,
                payload: error.message,
            });
        }
    };
};
```

### Step 4: Create the Reducer (`reducer.ts`)
```typescript
import * as types from './action-types';

const initialState = {
    reviews: [],
    loading: false,
    error: null,
};

const reviewsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.GET_REVIEWS:
            return { ...state, loading: true, error: null };
        case types.GET_REVIEWS_SUCCESS:
            return { ...state, loading: false, reviews: action.payload };
        case types.GET_REVIEWS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default reviewsReducer;
```

### Step 5: Register the Reducer in the Root Store (`src/store/store.ts`)
```typescript
import { combineReducers } from 'redux';
import reviewsReducer from '../features/reviews/store/reducer';

const rootReducer = combineReducers({
    // ...other reducers
    reviews: reviewsReducer,
});
```

### Step 6: Connect the UI (`src/features/reviews/pages/ReviewsList/index.tsx`)
We use the `connect` HOC pattern (or `useAppSelector` / `useAppDispatch` hooks) to wire up the UI.
```tsx
import { connect } from 'react-redux';
import { getReviews } from '../../store/actions';
import ReviewsListView from './components/ReviewsListView';
import type { RootState } from '@/store/store';

const mapStateToProps = (state: RootState) => ({
    reviews: state.reviews.reviews,
    loading: state.reviews.loading,
    error: state.reviews.error,
});

const mapDispatchToProps = {
    getReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsListView);
```

### Step 7: Render the UI (`ReviewsListView.tsx`)
```tsx
import { useEffect } from 'react';

export default function ReviewsListView({ reviews, loading, error, getReviews }) {
    useEffect(() => {
        getReviews(); // Trigger API call on mount
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul>
            {reviews.map(review => <li key={review.id}>{review.text}</li>)}
        </ul>
    );
}
```

## Summary
By following this exact pattern, your data fetching logic remains completely decoupled from your UI components. The UI simply dispatches `getReviews()`, and responds to changes in the global state's `loading`, `error`, and `reviews` properties!
