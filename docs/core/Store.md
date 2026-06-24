# Global Store Architecture (Redux)
Path: `src/store/`

## Detailed Overview
The application uses Redux Toolkit (`@reduxjs/toolkit`) coupled with traditional Redux Thunk action creators. The architecture is strictly sliced by domain.

## The State Tree
The `RootState` is composed of the following slices:
```typescript
{
  home: {
    featuredExperiences: Experience[],
    locations: Location[],
    selectedLocation: string,
    loading: boolean,
    error: string | null
  },
  category: {
    categories: Category[],
    loading: boolean
  },
  slider: {
    slides: Slide[],
    loading: boolean
  }
}
```

## API Client & Interceptors
The application avoids third-party clients like Axios in favor of the native `fetch` API. 
Because `fetch` does not automatically throw errors on HTTP 4xx/5xx status codes, the `api.ts` files manually guard the responses:
```typescript
const response = await fetch('/api/endpoint');
if (!response.ok) {
    throw new Error('Network error or 400+ status');
}
```
This guarantees that the `.catch()` blocks inside the Thunk actions (`actions.ts`) are always hit, allowing the `FAILURE` action to be cleanly dispatched to the reducer.

## Dispatching from Components
Components should connect to the store using modern React-Redux hooks rather than `connect()` when writing new code:
```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCategories } from '@/features/category/store/actions';

export const MyComponent = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);
};
```
