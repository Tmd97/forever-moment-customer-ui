# Project Architecture Overview

## Top-to-Bottom Flow

### 1. Application Entry Point (`src/main.tsx`)
The `main.tsx` file is the root of the React application. 
- It mounts the app to the `#root` DOM element.
- It wraps the entire application with the **Redux Provider** (`<Provider store={store}>`) to make the global state available.
- It provides routing using React Router's `<RouterProvider router={router} />`.

### 2. Routing (`src/router/index.tsx`)
The router maps URLs to specific Layouts and Pages.
- Usually handles public routes (`/`, `/search`, etc.) and authenticated routes (`/dashboard`).
- Maps the root path (`/`) to the **CustomerLayout**.

### 3. Layout Shell (`src/layouts/CustomerLayout.tsx`)
This acts as the visual shell for all customer-facing pages.
- **Top:** Renders the `<Navbar />`.
- **Middle:** Renders an `<Outlet />` where the specific Page (e.g., `HomeView`) is injected based on the current route.
- **Bottom:** Renders floating action buttons (`FloatingBookingCTA`, `WhatsAppButton`), `BottomNav`, and the `Footer`.

### 4. Page Level (`src/features/home/pages/Home/components/HomeView.tsx`)
Pages are responsible for orchestrating the overall view for a specific route.
- **Data Fetching:** On mount, the Home page triggers Redux actions like `getFeaturedExperiences()` and `getLocations()` to populate the global state with backend data.
- **Composition:** It stacks the various UI components (e.g., `Hero`, `QuickCategories`, `StatsBar`, `DecorSliders`) in order.

### 5. Feature/Container Level (`src/features/`)
Features follow a structured pattern:
- They export connected components or hook-based functional components that tap into Redux using `useAppSelector` or `mapStateToProps`.
- Example: The Slider feature connects to the `slider` state to render dynamic API-driven images.

### 6. Component Level (`src/components/`)
These are purely presentational or highly reusable components (like `Navbar`, `Footer`, `TrustBar`). They receive data via props or local hooks and manage local UI state (like dropdowns, modals, and mobile menus).

### 7. State Management (`src/store/`)
Redux Toolkit acts as the single source of truth for dynamic data.
- **Actions/Thunks:** Make asynchronous API calls (e.g., fetching categories).
- **Reducers:** Store the fetched data in specific slices (`home`, `category`, `slider`).
- Components map this state into their UI to stay automatically updated.

## Summary of Data Flow
1. **User visits `/`** → Router renders `CustomerLayout` containing `Navbar` and `HomeView`.
2. **Mount Phase** → `HomeView` and `Navbar` dispatch Redux Thunks (e.g., `getCategories()`).
3. **API Request** → Redux Thunk hits the backend API via Axios.
4. **State Update** → API response is saved to Redux Store slices.
5. **UI Update** → Connected components (`Navbar`, `CategorySlider`) automatically re-render with the fetched data.
