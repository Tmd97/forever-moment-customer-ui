# Application Architecture & Tech Stack

## Tech Stack Overview

This project is built using a modern frontend stack designed for high performance, scalability, and developer experience.

- **Framework**: React `^19.2.0`
- **Routing**: React Router DOM `^7.13.0`
- **State Management**: Redux Toolkit `^2.11.2`
- **Styling**: TailwindCSS `^4.1.18` & Sass `^1.97.3`
- **Build Tool**: Vite `^7.2.4`
- **Language**: TypeScript `~5.9.3`
- **Animations**: Framer Motion `^12.34.3` & Tailwind Animate CSS

## Environment Variables Configuration

Environment variables are managed through Vite's built-in `.env` file system.

1. **Naming Convention**: Variables must be prefixed with `VITE_` to be exposed to the client-side code.
2. **Usage**: Access variables using `import.meta.env`.
   - *Example*: `import.meta.env.VITE_API_URL`
3. **Type Safety**: Environment variables are typed in `src/vite-env.d.ts` (if configured) to ensure TypeScript autocomplete.

## API Integration Architecture

We do not use Axios; instead, the application uses the native `fetch` API bundled within Redux Thunks.

### 1. Endpoint Configuration
The base API URL is defined via environment variables with a fallback for local development.
```typescript
// Example from src/features/home/store/api.ts
const API_BASE = import.meta.env.VITE_API_URL || '/api/platform';
```

### 2. Request Handling
API calls are isolated in pure functions inside `[feature]/store/api.ts`.
```typescript
export const fetchCategories = async () => {
    const response = await fetch(`${API_BASE}/public/categories`);
    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response; // Our backend typically wraps the payload in 'response'
};
```

### 3. Asynchronous State Management
The API calls are triggered inside Redux Thunk Actions (`actions.ts`), which handle the loading, success, and error lifecycles.
```typescript
export const getCategories = () => {
    return async (dispatch: any) => {
        dispatch({ type: GET_CATEGORIES });
        try {
            const categories = await fetchCategories();
            dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
        } catch (error: any) {
            dispatch({ type: GET_CATEGORIES_FAILURE, payload: error.message });
        }
    };
};
```

## Routing Strategy (React Router 7)

Routing is centralized in `src/router/` and configured using the modern `createBrowserRouter` (or `<RouterProvider>`).

- **Layouts**: Routes are grouped under layout wrappers (e.g., `CustomerLayout`). The layout provides the `Navbar` and `Footer`, while using an `<Outlet />` to render the specific page content.
- **Navigation**: Use the `<Link>` component from `react-router-dom` for internal navigation to avoid full page reloads.
- **Dynamic Routing**: Route parameters are passed down and extracted using the `useParams` hook.

## Component Architecture

1. **Features (`src/features/`)**: Contain domain-specific logic. Each feature represents a vertical slice of the app (e.g., `slider`, `home`, `category`) and houses its own Redux store, pages, and specific sub-components.
2. **Components (`src/components/`)**: These are "dumb" or generic presentational components (e.g., `Navbar`, `Footer`, `FeaturedBanner`). They take props and render UI, occasionally tapping into global state directly for things like the global Navigation menu.
