# Navbar Component
Path: `src/components/navbar/Navbar.tsx`

## Overview
The `Navbar` component is the central hub for user navigation in the Forever Moment customer UI. It provides dynamic, API-driven routing via a Mega Menu and a mobile-friendly slide-out drawer.

## Key Features
1. **Dynamic Data Fetching**: Hooks into Redux using `useAppSelector` to automatically pull `categories` and `locations`.
2. **Mega Menu Architecture**: Slices fetched categories into manageable chunks to display a large grid dropdown without cluttering the screen.
3. **Responsive Design**: Conditionally renders full links on desktop and a hamburger menu with a `FixedMobileDrawer` on smaller screens.
4. **Theme Toggles**: Includes hooks for light/dark mode toggling, though primarily tailored for a specialized branding theme (`CUSTOMER_CONFIG`).

## State Dependencies
- **`home.locations`**: Array of available service locations (e.g., 'Vizag', 'Delhi').
- **`home.selectedLocation`**: The user's currently selected location.
- **`category.categories`**: Array of root categories and their subcategories.

## Usage Example
```tsx
import Navbar from '@/components/navbar/Navbar';

// Rendering inside a Layout
export default function CustomerLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
```
