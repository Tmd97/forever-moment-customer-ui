import os

docs = {
    "docs/components/Navbar.md": """# Navbar Component
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
""",
    "docs/core/Layouts.md": """# Application Layouts
Path: `src/layouts/CustomerLayout.tsx`

## Overview
The Layout system defines the persistent, high-level structure that wraps around individual pages (Views). We primarily use `CustomerLayout` for all public-facing and customer-authenticated routes.

## Layout Structure
The `CustomerLayout` is composed of the following vertical flow:
1. **Top Navigation**: `<Navbar />` (includes fixed positioning to stay atop the viewport).
2. **Main Content Area**: `<main className="relative z-0 flex-1"><Outlet /></main>`. React Router injects the matched child route here.
3. **Floating Overlays**:
   - `<FloatingBookingCTA />`
   - `<WhatsAppButton />`
4. **Bottom Navigation**: `<BottomNav />` (visible on mobile only).
5. **Footer**: `<Footer />` (contains all auxiliary links, social media, and SEO footers).

## Handling Authentication States
Currently, the layout does not strictly guard routes. Authentication guarding is done at the routing level (`src/router/index.tsx`) or via specific higher-order components.

## Adding a New Layout
If building an Admin dashboard or a vendor portal:
1. Create `src/layouts/AdminLayout.tsx`.
2. Add it to `src/router/index.tsx` mapping to `/admin/*`.
"""
}

for path, content in docs.items():
    with open(path, "w") as f:
        f.write(content)
print("Docs expanded successfully.")
